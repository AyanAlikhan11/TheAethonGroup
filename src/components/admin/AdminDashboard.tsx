'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  KeyRound,
  LayoutDashboard,
  Users,
  FileText,
  Briefcase,
  MessageSquareQuote,
  Settings,
  Plus,
  Pencil,
  Trash2,
  Star,
  Loader2,
  Database,
  Eye,
  EyeOff,
  LogOut,
} from 'lucide-react'
import { useAdminStore } from '@/lib/admin-store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

/* ─── types ─── */
interface Lead {
  id: string
  name: string
  email: string
  company: string | null
  service: string | null
  status: string
  createdAt: string
}
interface Blog {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  category: string | null
  published: boolean
  createdAt: string
}
interface CaseStudy {
  id: string
  title: string
  slug: string
  client: string
  industry: string | null
  challenge: string
  solution: string
  results: string
  metrics: string | null
  published: boolean
  featured: boolean
  createdAt: string
}
interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string | null
  rating: number
  featured: boolean
  published: boolean
  createdAt: string
}

type ActiveTab = 'overview' | 'leads' | 'blogs' | 'case-studies' | 'testimonials' | 'settings'

const TABS: { id: ActiveTab; label: string; icon: React.ElementType }[] = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'leads', label: 'Leads', icon: Users },
  { id: 'blogs', label: 'Blogs', icon: FileText },
  { id: 'case-studies', label: 'Case Studies', icon: Briefcase },
  { id: 'testimonials', label: 'Testimonials', icon: MessageSquareQuote },
  { id: 'settings', label: 'Settings', icon: Settings },
]

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  contacted: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  qualified: 'bg-green-500/20 text-green-300 border-green-500/30',
  converted: 'bg-gold/20 text-gold border-gold/30',
}

const CATEGORIES = ['AI & Automation', 'Conversion Optimization', 'Analytics & Intelligence', 'Growth Strategy', 'Paid Media', 'Brand Positioning']
const INDUSTRIES = ['Fashion & Lifestyle', 'Technology & SaaS', 'Health & Wellness', 'Finance', 'Food & Beverage', 'Education']

/* ─── Password Gate ─── */
function PasswordGate({ onAuth }: { onAuth: () => void }) {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setTimeout(() => {
      if (password === 'aethon2025') {
        onAuth()
      } else {
        setError('Invalid password')
      }
      setLoading(false)
    }, 400)
  }

  return (
    <div className="flex items-center justify-center h-full min-h-[400px]">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6 p-8 rounded-2xl glass-strong">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gold/10 flex items-center justify-center">
            <KeyRound className="w-6 h-6 text-gold" />
          </div>
          <h2 className="text-xl font-semibold text-ivory">Admin Access</h2>
          <p className="text-sm text-ivory-soft/40 mt-1">Enter the admin password</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="admin-pw" className="text-ivory-soft/60 text-xs">Password</Label>
          <div className="relative">
            <Input
              id="admin-pw"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError('') }}
              placeholder="Enter password"
              className="bg-matte-black-lighter border-ivory/10 text-ivory pr-10"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ivory-soft/40 hover:text-ivory-soft/70"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {error && <p className="text-red-400 text-xs">{error}</p>}
        </div>
        <Button
          type="submit"
          disabled={loading || !password}
          className="w-full bg-gold hover:bg-gold-light text-matte-black font-semibold"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Unlock'}
        </Button>
      </form>
    </div>
  )
}

/* ─── Stats Card ─── */
function StatCard({ label, value, icon: Icon }: { label: string; value: number; icon: React.ElementType }) {
  return (
    <div className="glass rounded-xl p-5 flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-gold" />
      </div>
      <div>
        <p className="text-2xl font-bold text-gold-gradient">{value}</p>
        <p className="text-xs text-ivory-soft/40">{label}</p>
      </div>
    </div>
  )
}

/* ─── Overview Tab ─── */
function OverviewTab() {
  const [stats, setStats] = useState({ leads: 0, blogs: 0, caseStudies: 0, testimonials: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const [leadsRes, blogsRes, csRes, testRes] = await Promise.all([
          fetch('/api/leads?all=true&limit=1'),
          fetch('/api/blogs?all=true&limit=1'),
          fetch('/api/case-studies?all=true&limit=1'),
          fetch('/api/testimonials?all=true&limit=1'),
        ])
        const [leadsData, blogsData, csData, testData] = await Promise.all([
          leadsRes.json(),
          blogsRes.json(),
          csRes.json(),
          testRes.json(),
        ])
        setStats({
          leads: leadsData.total || 0,
          blogs: blogsData.total || 0,
          caseStudies: csData.total || 0,
          testimonials: testData.total || 0,
        })
      } catch {
        // silent
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-6 h-6 text-gold animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-ivory">Dashboard Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <StatCard label="Total Leads" value={stats.leads} icon={Users} />
        <StatCard label="Total Blogs" value={stats.blogs} icon={FileText} />
        <StatCard label="Case Studies" value={stats.caseStudies} icon={Briefcase} />
        <StatCard label="Testimonials" value={stats.testimonials} icon={MessageSquareQuote} />
      </div>
    </div>
  )
}

/* ─── Leads Tab ─── */
function LeadsTab() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)

  const fetchLeads = useCallback(async () => {
    try {
      const res = await fetch('/api/leads?all=true&limit=100')
      const data = await res.json()
      setLeads(data.leads || [])
    } catch {
      // silent
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchLeads() }, [fetchLeads])

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/leads/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)))
    } catch {
      // silent
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="w-6 h-6 text-gold animate-spin" /></div>
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-ivory">Leads ({leads.length})</h2>
      </div>
      {leads.length === 0 ? (
        <p className="text-ivory-soft/40 text-sm py-8 text-center">No leads yet</p>
      ) : (
        <ScrollArea className="max-h-[60vh]">
          <Table>
            <TableHeader>
              <TableRow className="border-ivory/10 hover:bg-transparent">
                <TableHead className="text-ivory-soft/50">Name</TableHead>
                <TableHead className="text-ivory-soft/50">Email</TableHead>
                <TableHead className="text-ivory-soft/50 hidden md:table-cell">Company</TableHead>
                <TableHead className="text-ivory-soft/50 hidden lg:table-cell">Service</TableHead>
                <TableHead className="text-ivory-soft/50">Status</TableHead>
                <TableHead className="text-ivory-soft/50 hidden md:table-cell">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow key={lead.id} className="border-ivory/5 hover:bg-ivory/[0.02]">
                  <TableCell className="text-ivory font-medium text-sm">{lead.name}</TableCell>
                  <TableCell className="text-ivory-soft/60 text-sm">{lead.email}</TableCell>
                  <TableCell className="text-ivory-soft/60 text-sm hidden md:table-cell">{lead.company || '—'}</TableCell>
                  <TableCell className="text-ivory-soft/60 text-sm hidden lg:table-cell">{lead.service || '—'}</TableCell>
                  <TableCell>
                    <Select value={lead.status} onValueChange={(v) => updateStatus(lead.id, v)}>
                      <SelectTrigger className="w-[120px] h-7 text-xs border-ivory/10 bg-matte-black-lighter">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-matte-black-lighter border-ivory/10">
                        {['new', 'contacted', 'qualified', 'converted'].map((s) => (
                          <SelectItem key={s} value={s} className="text-ivory text-xs capitalize focus:bg-ivory/5 focus:text-ivory">
                            <Badge variant="outline" className={`${STATUS_COLORS[s] || ''} text-[10px] capitalize border`}>
                              {s}
                            </Badge>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="text-ivory-soft/40 text-xs hidden md:table-cell">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      )}
    </div>
  )
}

/* ─── Blog Form Dialog ─── */
function BlogFormDialog({
  blog,
  open,
  onClose,
  onSaved,
}: {
  blog: Blog | null
  open: boolean
  onClose: () => void
  onSaved: () => void
}) {
  const isEdit = !!blog
  const [form, setForm] = useState({
    title: '', slug: '', excerpt: '', content: '', category: '', published: false,
  })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (blog) {
      setForm({
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt || '',
        content: blog.content,
        category: blog.category || '',
        published: blog.published,
      })
    } else {
      setForm({ title: '', slug: '', excerpt: '', content: '', category: '', published: false })
    }
  }, [blog, open])

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

  const handleTitleChange = (title: string) => {
    setForm((f) => ({ ...f, title, slug: isEdit ? f.slug : generateSlug(title) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      const url = isEdit ? `/api/blogs/${blog.slug}` : '/api/blogs'
      const method = isEdit ? 'PUT' : 'POST'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: form.title,
          slug: form.slug,
          excerpt: form.excerpt || undefined,
          content: form.content,
          category: form.category || undefined,
          published: form.published,
        }),
      })
      if (res.ok) {
        onSaved()
        onClose()
      }
    } catch {
      // silent
    } finally {
      setSaving(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-matte-black-lighter border-ivory/10 text-ivory max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-ivory">{isEdit ? 'Edit Blog' : 'Add New Blog'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-ivory-soft/60 text-xs">Title *</Label>
              <Input value={form.title} onChange={(e) => handleTitleChange(e.target.value)} required className="bg-matte-black border-ivory/10 text-ivory" />
            </div>
            <div className="space-y-2">
              <Label className="text-ivory-soft/60 text-xs">Slug *</Label>
              <Input value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))} required className="bg-matte-black border-ivory/10 text-ivory" />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-ivory-soft/60 text-xs">Excerpt</Label>
            <Input value={form.excerpt} onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))} className="bg-matte-black border-ivory/10 text-ivory" />
          </div>
          <div className="space-y-2">
            <Label className="text-ivory-soft/60 text-xs">Content *</Label>
            <Textarea value={form.content} onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))} required rows={8} className="bg-matte-black border-ivory/10 text-ivory min-h-[180px]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-ivory-soft/60 text-xs">Category</Label>
              <Select value={form.category} onValueChange={(v) => setForm((f) => ({ ...f, category: v }))}>
                <SelectTrigger className="bg-matte-black border-ivory/10 text-ivory">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-matte-black-lighter border-ivory/10">
                  {CATEGORIES.map((c) => (
                    <SelectItem key={c} value={c} className="text-ivory focus:bg-ivory/5 focus:text-ivory">{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-3 pt-6">
              <Switch checked={form.published} onCheckedChange={(v) => setForm((f) => ({ ...f, published: v }))} />
              <Label className="text-ivory-soft/60 text-xs">Published</Label>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="border-ivory/10 text-ivory-soft/60 hover:text-ivory">Cancel</Button>
            <Button type="submit" disabled={saving} className="bg-gold hover:bg-gold-light text-matte-black font-semibold">
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : isEdit ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

/* ─── Blogs Tab ─── */
function BlogsTab() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [formOpen, setFormOpen] = useState(false)
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null)

  const fetchBlogs = useCallback(async () => {
    try {
      const res = await fetch('/api/blogs?all=true&limit=100')
      const data = await res.json()
      setBlogs(data.blogs || [])
    } catch {
      // silent
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchBlogs() }, [fetchBlogs])

  const handleDelete = async (slug: string) => {
    if (!confirm('Delete this blog?')) return
    try {
      await fetch(`/api/blogs/${slug}`, { method: 'DELETE' })
      fetchBlogs()
    } catch {
      // silent
    }
  }

  const openEdit = (blog: Blog) => {
    setEditingBlog(blog)
    setFormOpen(true)
  }

  const openCreate = () => {
    setEditingBlog(null)
    setFormOpen(true)
  }

  if (loading) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="w-6 h-6 text-gold animate-spin" /></div>
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-ivory">Blogs ({blogs.length})</h2>
        <Button onClick={openCreate} size="sm" className="bg-gold hover:bg-gold-light text-matte-black font-semibold h-8 text-xs">
          <Plus className="w-3.5 h-3.5 mr-1" /> Add Blog
        </Button>
      </div>
      {blogs.length === 0 ? (
        <p className="text-ivory-soft/40 text-sm py-8 text-center">No blogs yet</p>
      ) : (
        <ScrollArea className="max-h-[60vh]">
          <Table>
            <TableHeader>
              <TableRow className="border-ivory/10 hover:bg-transparent">
                <TableHead className="text-ivory-soft/50">Title</TableHead>
                <TableHead className="text-ivory-soft/50 hidden sm:table-cell">Category</TableHead>
                <TableHead className="text-ivory-soft/50">Status</TableHead>
                <TableHead className="text-ivory-soft/50 hidden md:table-cell">Date</TableHead>
                <TableHead className="text-ivory-soft/50 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogs.map((blog) => (
                <TableRow key={blog.id} className="border-ivory/5 hover:bg-ivory/[0.02]">
                  <TableCell className="text-ivory font-medium text-sm max-w-[200px] truncate">{blog.title}</TableCell>
                  <TableCell className="text-ivory-soft/60 text-sm hidden sm:table-cell">{blog.category || '—'}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={blog.published ? 'bg-green-500/20 text-green-300 border-green-500/30' : 'bg-ivory/10 text-ivory-soft/40 border-ivory/10'}>
                      {blog.published ? 'Published' : 'Draft'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-ivory-soft/40 text-xs hidden md:table-cell">{new Date(blog.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-7 w-7 text-ivory-soft/40 hover:text-gold" onClick={() => openEdit(blog)}>
                        <Pencil className="w-3.5 h-3.5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7 text-ivory-soft/40 hover:text-red-400" onClick={() => handleDelete(blog.slug)}>
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      )}
      <BlogFormDialog blog={editingBlog} open={formOpen} onClose={() => setFormOpen(false)} onSaved={fetchBlogs} />
    </div>
  )
}

/* ─── Case Study Form Dialog ─── */
function CaseStudyFormDialog({
  cs,
  open,
  onClose,
  onSaved,
}: {
  cs: CaseStudy | null
  open: boolean
  onClose: () => void
  onSaved: () => void
}) {
  const isEdit = !!cs
  const [form, setForm] = useState({
    title: '', slug: '', client: '', industry: '', challenge: '', solution: '', results: '', metrics: '', published: false, featured: false,
  })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (cs) {
      setForm({
        title: cs.title, slug: cs.slug, client: cs.client, industry: cs.industry || '',
        challenge: cs.challenge, solution: cs.solution, results: cs.results,
        metrics: cs.metrics || '', published: cs.published, featured: cs.featured,
      })
    } else {
      setForm({ title: '', slug: '', client: '', industry: '', challenge: '', solution: '', results: '', metrics: '', published: false, featured: false })
    }
  }, [cs, open])

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

  const handleTitleChange = (title: string) => {
    setForm((f) => ({ ...f, title, slug: isEdit ? f.slug : generateSlug(title) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      const url = isEdit ? `/api/case-studies/${cs.slug}` : '/api/case-studies'
      const method = isEdit ? 'PUT' : 'POST'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: form.title, slug: form.slug, client: form.client,
          industry: form.industry || undefined, challenge: form.challenge,
          solution: form.solution, results: form.results,
          metrics: form.metrics || undefined, published: form.published, featured: form.featured,
        }),
      })
      if (res.ok) { onSaved(); onClose() }
    } catch {
      // silent
    } finally {
      setSaving(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-matte-black-lighter border-ivory/10 text-ivory max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-ivory">{isEdit ? 'Edit Case Study' : 'Add New Case Study'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-ivory-soft/60 text-xs">Title *</Label>
              <Input value={form.title} onChange={(e) => handleTitleChange(e.target.value)} required className="bg-matte-black border-ivory/10 text-ivory" />
            </div>
            <div className="space-y-2">
              <Label className="text-ivory-soft/60 text-xs">Slug *</Label>
              <Input value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))} required className="bg-matte-black border-ivory/10 text-ivory" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-ivory-soft/60 text-xs">Client *</Label>
              <Input value={form.client} onChange={(e) => setForm((f) => ({ ...f, client: e.target.value }))} required className="bg-matte-black border-ivory/10 text-ivory" />
            </div>
            <div className="space-y-2">
              <Label className="text-ivory-soft/60 text-xs">Industry</Label>
              <Select value={form.industry} onValueChange={(v) => setForm((f) => ({ ...f, industry: v }))}>
                <SelectTrigger className="bg-matte-black border-ivory/10 text-ivory">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent className="bg-matte-black-lighter border-ivory/10">
                  {INDUSTRIES.map((i) => (
                    <SelectItem key={i} value={i} className="text-ivory focus:bg-ivory/5 focus:text-ivory">{i}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-ivory-soft/60 text-xs">Challenge *</Label>
            <Textarea value={form.challenge} onChange={(e) => setForm((f) => ({ ...f, challenge: e.target.value }))} required rows={3} className="bg-matte-black border-ivory/10 text-ivory" />
          </div>
          <div className="space-y-2">
            <Label className="text-ivory-soft/60 text-xs">Solution *</Label>
            <Textarea value={form.solution} onChange={(e) => setForm((f) => ({ ...f, solution: e.target.value }))} required rows={3} className="bg-matte-black border-ivory/10 text-ivory" />
          </div>
          <div className="space-y-2">
            <Label className="text-ivory-soft/60 text-xs">Results *</Label>
            <Textarea value={form.results} onChange={(e) => setForm((f) => ({ ...f, results: e.target.value }))} required rows={3} className="bg-matte-black border-ivory/10 text-ivory" />
          </div>
          <div className="space-y-2">
            <Label className="text-ivory-soft/60 text-xs">Metrics</Label>
            <Input value={form.metrics} onChange={(e) => setForm((f) => ({ ...f, metrics: e.target.value }))} placeholder="e.g. 9x ARR Growth | 62% Lower CAC" className="bg-matte-black border-ivory/10 text-ivory" />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Switch checked={form.published} onCheckedChange={(v) => setForm((f) => ({ ...f, published: v }))} />
              <Label className="text-ivory-soft/60 text-xs">Published</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch checked={form.featured} onCheckedChange={(v) => setForm((f) => ({ ...f, featured: v }))} />
              <Label className="text-ivory-soft/60 text-xs">Featured</Label>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="border-ivory/10 text-ivory-soft/60 hover:text-ivory">Cancel</Button>
            <Button type="submit" disabled={saving} className="bg-gold hover:bg-gold-light text-matte-black font-semibold">
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : isEdit ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

/* ─── Case Studies Tab ─── */
function CaseStudiesTab() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
  const [loading, setLoading] = useState(true)
  const [formOpen, setFormOpen] = useState(false)
  const [editingCs, setEditingCs] = useState<CaseStudy | null>(null)

  const fetchCs = useCallback(async () => {
    try {
      const res = await fetch('/api/case-studies?all=true&limit=100')
      const data = await res.json()
      setCaseStudies(data.caseStudies || [])
    } catch {
      // silent
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchCs() }, [fetchCs])

  const handleDelete = async (slug: string) => {
    if (!confirm('Delete this case study?')) return
    try {
      await fetch(`/api/case-studies/${slug}`, { method: 'DELETE' })
      fetchCs()
    } catch {
      // silent
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="w-6 h-6 text-gold animate-spin" /></div>
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-ivory">Case Studies ({caseStudies.length})</h2>
        <Button onClick={() => { setEditingCs(null); setFormOpen(true) }} size="sm" className="bg-gold hover:bg-gold-light text-matte-black font-semibold h-8 text-xs">
          <Plus className="w-3.5 h-3.5 mr-1" /> Add Case Study
        </Button>
      </div>
      {caseStudies.length === 0 ? (
        <p className="text-ivory-soft/40 text-sm py-8 text-center">No case studies yet</p>
      ) : (
        <ScrollArea className="max-h-[60vh]">
          <Table>
            <TableHeader>
              <TableRow className="border-ivory/10 hover:bg-transparent">
                <TableHead className="text-ivory-soft/50">Title</TableHead>
                <TableHead className="text-ivory-soft/50 hidden sm:table-cell">Client</TableHead>
                <TableHead className="text-ivory-soft/50 hidden md:table-cell">Industry</TableHead>
                <TableHead className="text-ivory-soft/50">Status</TableHead>
                <TableHead className="text-ivory-soft/50 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {caseStudies.map((cs) => (
                <TableRow key={cs.id} className="border-ivory/5 hover:bg-ivory/[0.02]">
                  <TableCell className="text-ivory font-medium text-sm max-w-[180px] truncate">{cs.title}</TableCell>
                  <TableCell className="text-ivory-soft/60 text-sm hidden sm:table-cell">{cs.client}</TableCell>
                  <TableCell className="text-ivory-soft/60 text-sm hidden md:table-cell">{cs.industry || '—'}</TableCell>
                  <TableCell>
                    <div className="flex gap-1.5">
                      <Badge variant="outline" className={cs.published ? 'bg-green-500/20 text-green-300 border-green-500/30' : 'bg-ivory/10 text-ivory-soft/40 border-ivory/10'}>
                        {cs.published ? 'Published' : 'Draft'}
                      </Badge>
                      {cs.featured && (
                        <Badge variant="outline" className="bg-gold/20 text-gold border-gold/30">
                          <Star className="w-2.5 h-2.5 mr-0.5" /> Featured
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-7 w-7 text-ivory-soft/40 hover:text-gold" onClick={() => { setEditingCs(cs); setFormOpen(true) }}>
                        <Pencil className="w-3.5 h-3.5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7 text-ivory-soft/40 hover:text-red-400" onClick={() => handleDelete(cs.slug)}>
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      )}
      <CaseStudyFormDialog cs={editingCs} open={formOpen} onClose={() => setFormOpen(false)} onSaved={fetchCs} />
    </div>
  )
}

/* ─── Testimonial Form Dialog ─── */
function TestimonialFormDialog({
  testimonial,
  open,
  onClose,
  onSaved,
}: {
  testimonial: Testimonial | null
  open: boolean
  onClose: () => void
  onSaved: () => void
}) {
  const isEdit = !!testimonial
  const [form, setForm] = useState({
    name: '', role: '', company: '', content: '', avatar: '', rating: 5, featured: false, published: true,
  })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (testimonial) {
      setForm({
        name: testimonial.name, role: testimonial.role, company: testimonial.company,
        content: testimonial.content, avatar: testimonial.avatar || '',
        rating: testimonial.rating, featured: testimonial.featured, published: testimonial.published,
      })
    } else {
      setForm({ name: '', role: '', company: '', content: '', avatar: '', rating: 5, featured: false, published: true })
    }
  }, [testimonial, open])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      const url = isEdit ? `/api/testimonials/${testimonial.id}` : '/api/testimonials'
      const method = isEdit ? 'PUT' : 'POST'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name, role: form.role, company: form.company, content: form.content,
          avatar: form.avatar || undefined, rating: form.rating, featured: form.featured, published: form.published,
        }),
      })
      if (res.ok) { onSaved(); onClose() }
    } catch {
      // silent
    } finally {
      setSaving(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-matte-black-lighter border-ivory/10 text-ivory max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-ivory">{isEdit ? 'Edit Testimonial' : 'Add New Testimonial'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-ivory-soft/60 text-xs">Name *</Label>
              <Input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} required className="bg-matte-black border-ivory/10 text-ivory" />
            </div>
            <div className="space-y-2">
              <Label className="text-ivory-soft/60 text-xs">Role *</Label>
              <Input value={form.role} onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))} required className="bg-matte-black border-ivory/10 text-ivory" />
            </div>
            <div className="space-y-2">
              <Label className="text-ivory-soft/60 text-xs">Company *</Label>
              <Input value={form.company} onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))} required className="bg-matte-black border-ivory/10 text-ivory" />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-ivory-soft/60 text-xs">Content *</Label>
            <Textarea value={form.content} onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))} required rows={4} className="bg-matte-black border-ivory/10 text-ivory" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-ivory-soft/60 text-xs">Avatar URL</Label>
              <Input value={form.avatar} onChange={(e) => setForm((f) => ({ ...f, avatar: e.target.value }))} placeholder="https://..." className="bg-matte-black border-ivory/10 text-ivory" />
            </div>
            <div className="space-y-2">
              <Label className="text-ivory-soft/60 text-xs">Rating (1-5)</Label>
              <Select value={String(form.rating)} onValueChange={(v) => setForm((f) => ({ ...f, rating: parseInt(v) }))}>
                <SelectTrigger className="bg-matte-black border-ivory/10 text-ivory">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-matte-black-lighter border-ivory/10">
                  {[5, 4, 3, 2, 1].map((r) => (
                    <SelectItem key={r} value={String(r)} className="text-ivory focus:bg-ivory/5 focus:text-ivory">
                      {'★'.repeat(r)}{'☆'.repeat(5 - r)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Switch checked={form.published} onCheckedChange={(v) => setForm((f) => ({ ...f, published: v }))} />
              <Label className="text-ivory-soft/60 text-xs">Published</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch checked={form.featured} onCheckedChange={(v) => setForm((f) => ({ ...f, featured: v }))} />
              <Label className="text-ivory-soft/60 text-xs">Featured</Label>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="border-ivory/10 text-ivory-soft/60 hover:text-ivory">Cancel</Button>
            <Button type="submit" disabled={saving} className="bg-gold hover:bg-gold-light text-matte-black font-semibold">
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : isEdit ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

/* ─── Testimonials Tab ─── */
function TestimonialsTab() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [formOpen, setFormOpen] = useState(false)
  const [editingTest, setEditingTest] = useState<Testimonial | null>(null)

  const fetchTestimonials = useCallback(async () => {
    try {
      const res = await fetch('/api/testimonials?all=true&limit=100')
      const data = await res.json()
      setTestimonials(data.testimonials || [])
    } catch {
      // silent
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchTestimonials() }, [fetchTestimonials])

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this testimonial?')) return
    try {
      await fetch(`/api/testimonials/${id}`, { method: 'DELETE' })
      fetchTestimonials()
    } catch {
      // silent
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="w-6 h-6 text-gold animate-spin" /></div>
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-ivory">Testimonials ({testimonials.length})</h2>
        <Button onClick={() => { setEditingTest(null); setFormOpen(true) }} size="sm" className="bg-gold hover:bg-gold-light text-matte-black font-semibold h-8 text-xs">
          <Plus className="w-3.5 h-3.5 mr-1" /> Add Testimonial
        </Button>
      </div>
      {testimonials.length === 0 ? (
        <p className="text-ivory-soft/40 text-sm py-8 text-center">No testimonials yet</p>
      ) : (
        <ScrollArea className="max-h-[60vh]">
          <Table>
            <TableHeader>
              <TableRow className="border-ivory/10 hover:bg-transparent">
                <TableHead className="text-ivory-soft/50">Name</TableHead>
                <TableHead className="text-ivory-soft/50 hidden sm:table-cell">Role</TableHead>
                <TableHead className="text-ivory-soft/50 hidden md:table-cell">Company</TableHead>
                <TableHead className="text-ivory-soft/50">Rating</TableHead>
                <TableHead className="text-ivory-soft/50">Status</TableHead>
                <TableHead className="text-ivory-soft/50 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {testimonials.map((t) => (
                <TableRow key={t.id} className="border-ivory/5 hover:bg-ivory/[0.02]">
                  <TableCell className="text-ivory font-medium text-sm">{t.name}</TableCell>
                  <TableCell className="text-ivory-soft/60 text-sm hidden sm:table-cell">{t.role}</TableCell>
                  <TableCell className="text-ivory-soft/60 text-sm hidden md:table-cell">{t.company}</TableCell>
                  <TableCell className="text-gold text-sm">{'★'.repeat(t.rating)}</TableCell>
                  <TableCell>
                    <div className="flex gap-1.5">
                      <Badge variant="outline" className={t.published ? 'bg-green-500/20 text-green-300 border-green-500/30' : 'bg-ivory/10 text-ivory-soft/40 border-ivory/10'}>
                        {t.published ? 'Published' : 'Draft'}
                      </Badge>
                      {t.featured && (
                        <Badge variant="outline" className="bg-gold/20 text-gold border-gold/30">
                          <Star className="w-2.5 h-2.5 mr-0.5" /> Featured
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-7 w-7 text-ivory-soft/40 hover:text-gold" onClick={() => { setEditingTest(t); setFormOpen(true) }}>
                        <Pencil className="w-3.5 h-3.5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7 text-ivory-soft/40 hover:text-red-400" onClick={() => handleDelete(t.id)}>
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      )}
      <TestimonialFormDialog testimonial={editingTest} open={formOpen} onClose={() => setFormOpen(false)} onSaved={fetchTestimonials} />
    </div>
  )
}

/* ─── Settings Tab ─── */
function SettingsTab() {
  const [seeding, setSeeding] = useState(false)
  const [seedResult, setSeedResult] = useState<string | null>(null)

  const handleSeed = async () => {
    if (!confirm('This will add sample data to the database. Continue?')) return
    setSeeding(true)
    setSeedResult(null)
    try {
      const res = await fetch('/api/admin/seed', { method: 'POST' })
      const data = await res.json()
      if (data.success) {
        setSeedResult(`Seeded: ${data.data.blogs} blogs, ${data.data.caseStudies} case studies, ${data.data.testimonials} testimonials`)
      } else {
        setSeedResult('Seed failed — data may already exist')
      }
    } catch {
      setSeedResult('Seed request failed')
    } finally {
      setSeeding(false)
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-ivory">Settings</h2>
      <Separator className="bg-ivory/10" />
      <div className="glass rounded-xl p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center shrink-0">
            <Database className="w-5 h-5 text-violet-light" />
          </div>
          <div className="flex-1">
            <h3 className="text-ivory font-medium text-sm">Seed Database</h3>
            <p className="text-ivory-soft/40 text-xs mt-1">Populate the site with sample content (blogs, case studies, testimonials).</p>
            <Button
              onClick={handleSeed}
              disabled={seeding}
              size="sm"
              className="mt-3 bg-violet hover:bg-violet-light text-ivory font-semibold h-8 text-xs"
            >
              {seeding ? <Loader2 className="w-3.5 h-3.5 animate-spin mr-1" /> : <Database className="w-3.5 h-3.5 mr-1" />}
              {seeding ? 'Seeding...' : 'Seed Database'}
            </Button>
            {seedResult && (
              <p className="mt-2 text-xs text-green-400">{seedResult}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Main Admin Dashboard ─── */
export default function AdminDashboard() {
  const { isAdminOpen, isAuthenticated, closeAdmin, setAuthenticated, activeTab, setActiveTab, logout } = useAdminStore()

  if (!isAdminOpen) return null

  return (
    <AnimatePresence>
      {isAdminOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={closeAdmin}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-[70] h-full w-[90vw] max-w-[1200px] bg-matte-black border-l border-ivory/10 flex"
          >
            {/* Sidebar */}
            <div className="w-56 shrink-0 border-r border-ivory/10 bg-matte-black-lighter flex flex-col hidden md:flex">
              <div className="p-5 border-b border-ivory/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                    <LayoutDashboard className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ivory">AETHON</p>
                    <p className="text-[10px] text-ivory-soft/30">Admin Panel</p>
                  </div>
                </div>
              </div>
              <nav className="flex-1 p-3 space-y-1">
                {TABS.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-gold/10 text-gold'
                          : 'text-ivory-soft/50 hover:text-ivory-soft/80 hover:bg-ivory/[0.03]'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  )
                })}
              </nav>
              <div className="p-3 border-t border-ivory/10">
                <button
                  onClick={logout}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-ivory-soft/40 hover:text-red-400 hover:bg-red-500/5 transition-all duration-200 cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-ivory/10 shrink-0">
                {/* Mobile tab selector */}
                <div className="md:hidden">
                  <Select value={activeTab} onValueChange={setActiveTab}>
                    <SelectTrigger className="w-[160px] bg-matte-black-lighter border-ivory/10 text-ivory h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-matte-black-lighter border-ivory/10">
                      {TABS.map((tab) => (
                        <SelectItem key={tab.id} value={tab.id} className="text-ivory focus:bg-ivory/5 focus:text-ivory text-xs">
                          {tab.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="hidden md:block" />
                <button
                  onClick={closeAdmin}
                  className="w-8 h-8 rounded-lg bg-ivory/5 flex items-center justify-center text-ivory-soft/40 hover:text-ivory hover:bg-ivory/10 transition-all duration-200 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content area */}
              <div className="flex-1 overflow-y-auto p-6">
                {!isAuthenticated ? (
                  <PasswordGate onAuth={() => setAuthenticated(true)} />
                ) : (
                  <>
                    {activeTab === 'overview' && <OverviewTab />}
                    {activeTab === 'leads' && <LeadsTab />}
                    {activeTab === 'blogs' && <BlogsTab />}
                    {activeTab === 'case-studies' && <CaseStudiesTab />}
                    {activeTab === 'testimonials' && <TestimonialsTab />}
                    {activeTab === 'settings' && <SettingsTab />}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
