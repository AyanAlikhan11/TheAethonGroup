'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Loader2 } from 'lucide-react'

const serviceOptions = [
  'Growth Strategy',
  'Paid Media',
  'Funnel Systems',
  'AI Automation',
  'Analytics Intelligence',
  'Conversion Optimization',
  'Brand Positioning',
  'Creative Systems',
  'Full Growth Engine',
]

export default function ContactModal() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  })

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('openContactModal', handler)
    return () => window.removeEventListener('openContactModal', handler)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSuccess(true)
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: '',
        })
        setTimeout(() => {
          setOpen(false)
          setSuccess(false)
        }, 2500)
      }
    } catch {
      // Silently handle error
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-aethon-text text-xl">
            Book Your{' '}
            <span className="text-orange-gradient">Strategy Call</span>
          </DialogTitle>
          <DialogDescription className="text-aethon-text-secondary">
            Tell us about your brand and growth goals. We&apos;ll get back within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-aethon-green/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-aethon-green">&#10003;</span>
            </div>
            <h3 className="text-xl font-semibold text-aethon-text mb-2">
              Thank you!
            </h3>
            <p className="text-aethon-text-secondary text-sm">
              We&apos;ll be in touch shortly to schedule your strategy call.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-aethon-text-secondary mb-1.5 block">
                  Name *
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your full name"
                  className="bg-aethon-gray border-aethon-gray-dark/50 text-aethon-text placeholder:text-aethon-text-muted focus-visible:border-aethon-orange/50 focus-visible:ring-aethon-orange/20"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-aethon-text-secondary mb-1.5 block">
                  Email *
                </label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="you@company.com"
                  className="bg-aethon-gray border-aethon-gray-dark/50 text-aethon-text placeholder:text-aethon-text-muted focus-visible:border-aethon-orange/50 focus-visible:ring-aethon-orange/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-aethon-text-secondary mb-1.5 block">
                  Company
                </label>
                <Input
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="Company name"
                  className="bg-aethon-gray border-aethon-gray-dark/50 text-aethon-text placeholder:text-aethon-text-muted focus-visible:border-aethon-orange/50 focus-visible:ring-aethon-orange/20"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-aethon-text-secondary mb-1.5 block">
                  Phone
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+91 98765 43210"
                  className="bg-aethon-gray border-aethon-gray-dark/50 text-aethon-text placeholder:text-aethon-text-muted focus-visible:border-aethon-orange/50 focus-visible:ring-aethon-orange/20"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-aethon-text-secondary mb-1.5 block">
                Service Interest
              </label>
              <Select
                value={formData.service}
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="w-full bg-aethon-gray border-aethon-gray-dark/50 text-aethon-text focus-visible:border-aethon-orange/50 focus-visible:ring-aethon-orange/20">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-white border-aethon-gray-dark/50">
                  {serviceOptions.map((service) => (
                    <SelectItem
                      key={service}
                      value={service}
                      className="text-aethon-text-secondary focus:bg-aethon-orange/10 focus:text-aethon-orange"
                    >
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs font-medium text-aethon-text-secondary mb-1.5 block">
                Message
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell us about your growth goals..."
                className="bg-aethon-gray border-aethon-gray-dark/50 text-aethon-text placeholder:text-aethon-text-muted focus-visible:border-aethon-orange/50 focus-visible:ring-aethon-orange/20 min-h-[100px]"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-aethon-orange hover:bg-aethon-orange-dark text-white font-semibold py-6 rounded-full cursor-pointer btn-primary"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Request'
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
