import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Terms() {
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
          Terms of Service
        </h1>

        {/* Terms Content */}
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Terms</h2>
            <p className="text-white/60 leading-relaxed">
              By accessing the website at PianoLabs, you are agreeing to be bound by these terms of service, 
              all applicable laws and regulations, and agree that you are responsible for compliance with any 
              applicable local laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-white/60 leading-relaxed">
              Permission is granted to temporarily access the materials (information or software) on PianoLabs&apos;s 
              website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
            <p className="text-white/60 leading-relaxed">
              The materials on PianoLabs&apos;s website are provided on an &apos;as is&apos; basis. PianoLabs makes no 
              warranties, expressed or implied, and hereby disclaims and negates all other warranties including, 
              without limitation, implied warranties or conditions of merchantability, fitness for a particular 
              purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
