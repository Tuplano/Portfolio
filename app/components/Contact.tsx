'use client'
import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, MapPin, Phone } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formsubmit.co/kevintuplano11@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: 'false'
        })
      })

      if (!response.ok) throw new Error('Form submission failed')

      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-24 px-6 border-t border-zinc-800">
      <div className="container mx-auto max-w-6xl">
        <p className="text-lime-400 font-mono text-sm mb-3">contact</p>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
          Let&apos;s work together
        </h2>
        <p className="text-zinc-400 mb-12 max-w-xl">
          Have a project in mind or just want to talk? Feel free to reach out.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-lime-400" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-zinc-300 text-sm">kevintuplano11@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-lime-400" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-zinc-300 text-sm">Cavite, Philippines</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-lime-400" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="text-zinc-300 text-sm">+63 (949) 968-2961</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-start justify-center py-8">
                <div className="w-10 h-10 rounded-full bg-lime-400/10 border border-lime-400/30 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-zinc-100 font-semibold text-lg mb-1">Message sent</h3>
                <p className="text-zinc-400 text-sm">Thanks for reaching out — I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-zinc-400 text-sm">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="bg-zinc-900 border-zinc-700 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-lime-400/30 focus-visible:border-zinc-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-zinc-400 text-sm">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="bg-zinc-900 border-zinc-700 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-lime-400/30 focus-visible:border-zinc-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="subject" className="text-zinc-400 text-sm">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="bg-zinc-900 border-zinc-700 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-lime-400/30 focus-visible:border-zinc-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-zinc-400 text-sm">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="bg-zinc-900 border-zinc-700 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-lime-400/30 focus-visible:border-zinc-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-lime-400 text-zinc-950 hover:bg-lime-300 font-semibold disabled:opacity-60"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
