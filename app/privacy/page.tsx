'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Privacy() {
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
                <Button variant="ghost" className="hidden sm:inline-flex rounded-xl">Learn</Button>
                <Button 
                  variant="ghost" 
                  className="hidden sm:inline-flex rounded-xl"
                  onClick={() => {
                    window.location.href = '/#interactive-learning'
                  }}
                >
                  Compose
                </Button>
                <Button variant="ghost" className="hidden sm:inline-flex rounded-xl">Updates</Button>
                <Button 
                  onClick={() => window.location.href = '/#waitlist'} 
                  className="bg-white text-black hover:bg-white/90 rounded-xl transition-colors"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Privacy Policy Content */}
        <div className="max-w-[1000px] mx-auto px-6 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-white/60 mb-12">
                Last updated: January 15, 2025
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="text-white/60 mb-4">
                  At PianoLabs, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our AI-powered piano learning platform.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <h3 className="text-xl font-medium mb-3">Personal Information</h3>
                <p className="text-white/60 mb-4">
                  We may collect personal information that you voluntarily provide when using our service, including:
                </p>
                <ul className="list-disc pl-6 text-white/60 mb-6 space-y-2">
                  <li>Name and email address</li>
                  <li>Account credentials</li>
                  <li>Payment information</li>
                  <li>User-generated content and compositions</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">Usage Information</h3>
                <p className="text-white/60 mb-4">
                  We automatically collect certain information when you visit our website:
                </p>
                <ul className="list-disc pl-6 text-white/60 mb-6 space-y-2">
                  <li>Device and browser information</li>
                  <li>IP address and location data</li>
                  <li>Usage patterns and preferences</li>
                  <li>Learning progress and performance data</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <p className="text-white/60 mb-4">
                  We use the collected information for various purposes:
                </p>
                <ul className="list-disc pl-6 text-white/60 mb-6 space-y-2">
                  <li>To provide and maintain our service</li>
                  <li>To personalize your learning experience</li>
                  <li>To improve our AI algorithms and teaching methods</li>
                  <li>To communicate with you about updates and offers</li>
                  <li>To process payments and prevent fraud</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                <p className="text-white/60 mb-4">
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                <p className="text-white/60 mb-4">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-white/60 mb-6 space-y-2">
                  <li>Access and update your information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-white/60 mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-white/60">
                  <a href="mailto:privacy@pianolabs.ai" className="text-blue-400 hover:text-blue-300">
                    privacy@pianolabs.ai
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
