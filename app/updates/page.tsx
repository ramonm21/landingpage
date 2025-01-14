import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Updates() {
  return (
    <main className="relative min-h-screen bg-black">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
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

        {/* Updates List */}
        <div className="space-y-8">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/10 px-3 py-1 rounded-full text-sm text-white/60">
                January 2025
              </div>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Beta Testing Phase Begins
            </h2>
            <p className="text-white/60 leading-relaxed">
              We&apos;re excited to announce that PianoLabs is entering its beta testing phase. 
              Early access will be granted to waitlist members in waves. Stay tuned for your invitation!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
