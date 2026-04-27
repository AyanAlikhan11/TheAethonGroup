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
      <DialogContent className="bg-matte-black-light border-ivory/10 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-ivory text-xl">
            Book Your{' '}
            <span className="text-gold-gradient">Strategy Call</span>
          </DialogTitle>
          <DialogDescription className="text-ivory-soft/50">
            Tell us about your brand and growth goals. We&apos;ll get back within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="py-12 text-center">
            <div className="text-4xl mb-4">&#10003;</div>
            <h3 className="text-xl font-semibold text-ivory mb-2">
              Thank you!
            </h3>
            <p className="text-ivory-soft/50 text-sm">
              We&apos;ll be in touch shortly to schedule your strategy call.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-ivory-soft/60 mb-1.5 block">
                  Name *
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your full name"
                  className="bg-matte-black-lighter border-ivory/10 text-ivory placeholder:text-ivory-soft/25 focus-visible:border-gold/30"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-ivory-soft/60 mb-1.5 block">
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
                  className="bg-matte-black-lighter border-ivory/10 text-ivory placeholder:text-ivory-soft/25 focus-visible:border-gold/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-ivory-soft/60 mb-1.5 block">
                  Company
                </label>
                <Input
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="Company name"
                  className="bg-matte-black-lighter border-ivory/10 text-ivory placeholder:text-ivory-soft/25 focus-visible:border-gold/30"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-ivory-soft/60 mb-1.5 block">
                  Phone
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+91 98765 43210"
                  className="bg-matte-black-lighter border-ivory/10 text-ivory placeholder:text-ivory-soft/25 focus-visible:border-gold/30"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-ivory-soft/60 mb-1.5 block">
                Service Interest
              </label>
              <Select
                value={formData.service}
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="w-full bg-matte-black-lighter border-ivory/10 text-ivory focus-visible:border-gold/30">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-matte-black-light border-ivory/10">
                  {serviceOptions.map((service) => (
                    <SelectItem
                      key={service}
                      value={service}
                      className="text-ivory-soft/70 focus:bg-violet/10 focus:text-ivory"
                    >
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs font-medium text-ivory-soft/60 mb-1.5 block">
                Message
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell us about your growth goals..."
                className="bg-matte-black-lighter border-ivory/10 text-ivory placeholder:text-ivory-soft/25 focus-visible:border-gold/30 min-h-[100px]"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gold hover:bg-gold-light text-matte-black font-semibold py-6 cursor-pointer"
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
