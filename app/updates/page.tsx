'use client'

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Updates() {
  return (
    <main className="relative min-h-screen bg-black">
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

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-16">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Latest Updates
        </h1>

        {/* Message */}
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
          <p className="text-xl text-white/60">
            Nothing to see here yet
          </p>
        </div>
      </div>
    </main>
  )
}
