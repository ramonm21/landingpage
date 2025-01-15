'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const FAQ_ITEMS = [
  {
    category: "Getting Started",
    question: "How do I get started?",
    answer: "Getting started is easy! Simply sign up for an account and follow our quick setup guide. We'll walk you through each step of the process."
  },
  {
    category: "Billing",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners."
  },
  {
    category: "Pricing",
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial."
  },
  {
    category: "Support",
    question: "How can I contact support?",
    answer: "Our support team is available 24/7 through our help center, email support, or live chat. We typically respond within 2 hours."
  }
]

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background Image - Fixed */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/bg-dark.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Gradient Overlays */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/10 via-black/50 to-black pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-0 inset-x-0 z-50 h-16 flex items-center border-b border-white/5 bg-transparent backdrop-blur-sm">
          <div className="w-full max-w-[1400px] mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold">
                  PianoLabs
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" className="hidden sm:inline-flex rounded-xl">Compose</Button>
                <Button variant="ghost" className="hidden sm:inline-flex rounded-xl">Learn</Button>
                <Button variant="ghost" className="hidden sm:inline-flex rounded-xl">Updates</Button>
                <Button onClick={() => window.location.href = "/#waitlist"} className="bg-white text-black hover:bg-white/90 rounded-xl transition-colors">
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About PianoLabs</h1>
              <p className="text-xl text-white/60 mb-12">
                Revolutionizing piano education through AI-powered learning
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] rounded-xl overflow-hidden border border-white/5"
              >
                <Image
                  src="/aicomposer-pic-01.png"
                  alt="PianoLabs Interface"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg text-white/60">
                  At PianoLabs, we believe that learning piano should be accessible, engaging, and tailored to each individual. Our AI-powered platform combines cutting-edge technology with proven teaching methods to create a unique learning experience.
                </p>
                <p className="text-lg text-white/60">
                  We're dedicated to helping both beginners and advanced players unlock their full musical potential through interactive lessons, real-time feedback, and personalized guidance.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white/5">
          <div className="max-w-[1400px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-white/60">
                  Find answers to common questions about our services
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {FAQ_ITEMS.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="mb-4 rounded-xl bg-black/50 border border-white/10"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <div className="flex flex-col gap-2">
                        <Badge
                          variant="secondary"
                          className="w-fit text-xs font-normal bg-white/10 text-white"
                        >
                          {item.category}
                        </Badge>
                        <h3 className="text-lg font-medium text-white">
                          {item.question}
                        </h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pt-4 pb-6">
                      <p className="text-white/60 leading-relaxed">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-12 text-center">
                <p className="text-white/60 mb-4">Still have questions?</p>
                <Button 
                  onClick={() => window.location.href = "mailto:support@pianolabs.ai"}
                  className="bg-white text-black hover:bg-white/90"
                >
                  Contact Support
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  )
}
