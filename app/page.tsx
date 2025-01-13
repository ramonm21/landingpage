'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Play, Music, Wand2, ArrowRight, Sparkles, MessageSquare, BookOpen } from 'lucide-react'
import { XLogo } from '@/components/ui/x-logo'
import { VisualIcon } from '@/components/ui/visual-icon'
import { PianoIcon } from '@/components/ui/piano-icon'
import { PianoKeysIcon } from '@/components/ui/piano-keys-icon'
import { LightbulbIcon } from '@/components/ui/lightbulb-icon'
import { ColumnsIcon } from '@/components/ui/columns-icon'
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ChatPreview } from "@/components/chat-preview"
import "@/styles/embla.css"

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <main className="relative min-h-screen bg-black">
      {/* Background Image - Fixed */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/gradient-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(25px) brightness(0.9)',
          transform: 'scale(1.1)'
        }}
      />

      {/* Gradient Overlays */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/10 via-black/50 to-black pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Navbar */}
        <nav className="fixed top-0 inset-x-0 z-50 h-16 flex items-center border-b border-white/5 bg-transparent backdrop-blur-sm">
          <div className="w-full max-w-[1400px] mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary" />
                  PianoLabs
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" className="hidden sm:inline-flex rounded-xl">About</Button>
                <Button className="gradient-button rounded-xl">Join Waitlist</Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center py-12 px-6">
          <div className="w-full relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 relative">
                <span className="relative inline-block text-white">
                  Compose and learn with AI.
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-violet-500 blur-2xl opacity-20" />
                </span>
                <br />
                <span className="relative text-white">
                  No music theory required.
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-violet-500 blur-xl opacity-20" />
                </span>
              </h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0"
              >
                Transform your musical ideas into compositions through human language.
                Learn piano and music theory with your personal AI-powered teacher.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 mb-8 sm:mb-16 px-4 sm:px-0"
              >
                <Input placeholder="Enter your email" type="email" className="h-12 bg-white/5 border-white/5 focus:border-white/10 focus:ring-1 focus:ring-white/10 rounded-xl text-white placeholder:text-white/40" />
                <Button className="h-12 px-8 bg-white text-black hover:bg-white/90 rounded-xl transition-colors whitespace-nowrap">
                  Join Waitlist
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Button 
                  variant="outline" 
                  className="mb-16 rounded-xl"
                  onClick={() => window.open('https://x.com/pianolabs_ai', '_blank')}
                >
                  <XLogo className="w-4 h-4 mr-2" />
                  Follow Development Journey
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Preview Section */}
        <section className="py-8 relative px-6">
          <div className="relative z-10">
            <motion.div 
              style={{ opacity, scale }}
              className="grid gap-16"
            >
              {/* First Preview */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden border border-border"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                <Image
                  src="/placeholder.svg?height=1200&width=2400&text=&fontsize=0&bg=0f172a&colors[]=6366f1,a855f7,ec4899"
                  alt="PianoLabs Interface Preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 max-w-lg">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Intuitive Composition Interface</h2>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    A powerful yet simple interface that lets you focus on creativity while AI handles the complexity.
                  </p>
                </div>
              </motion.div>

              {/* Second Preview - Offset for visual interest */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden border border-border ml-0 sm:ml-[5%] md:ml-[10%]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                <Image
                  src="/placeholder.svg?height=1200&width=2400&text=&fontsize=0&bg=18181b&colors[]=4ade80,22d3ee,60a5fa"
                  alt="Chord Progression Interface Preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 max-w-lg text-right">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Smart Chord Progression</h2>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Let AI suggest the perfect chords for your melody, with visual guidance on how to play them.
                  </p>
                </div>
              </motion.div>

              {/* New Text Section with animation */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative py-16 sm:py-24 px-4"
              >
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                    Bring your musical ideas to life
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8">
                    PianoLabs understand your musical ideas when you describe them in natural language.
                    As you compose, you'll learn piano and music theory naturally, 
                    with personalized guidance from your AI teacher.    
                  </p>
                  <Button variant="outline" size="lg" className="rounded-xl">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>

              {/* Third Preview */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden border border-border mb-8"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                <Image
                  src="/placeholder.svg?height=1200&width=2400&text=&fontsize=0&bg=1e1b4b&colors[]=c084fc,f472b6,fb7185"
                  alt="AI Composition Assistant Preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 max-w-lg">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">AI Composition Assistant</h2>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Direct your music with natural language. Tell the AI exactly what you want to achieve.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-8 relative px-6">
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* Feature 1 */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/5 hover:border-primary/50 transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <PianoKeysIcon className="w-10 h-10 text-white mb-4 relative z-10" />
                <h3 className="text-lg font-bold mb-2 relative z-10">Smart Chord Suggestions</h3>
                <p className="text-sm text-muted-foreground relative z-10">
                  Get intelligent chord recommendations based on what you play live.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/5 hover:border-primary/50 transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <LightbulbIcon className="w-10 h-10 text-white mb-4 relative z-10" />
                <h3 className="text-lg font-bold mb-2 relative z-10">No More Creative Blocks</h3>
                <p className="text-sm text-muted-foreground relative z-10">
                  Simply ask "What's next?" when you're stuck, and let AI provide
                  intelligent suggestions and musical variations.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/5 hover:border-primary/50 transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Music className="w-10 h-10 text-white mb-4 relative z-10" />
                <h3 className="text-lg font-bold mb-2 relative z-10">Live Chord Display</h3>
                <p className="text-sm text-muted-foreground relative z-10">
                  See exactly how to play each chord with our interactive keyboard 
                  visualization and real-time feedback.
                </p>
              </motion.div>

              {/* Feature 4 */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/5 hover:border-primary/50 transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <VisualIcon className="w-10 h-10 text-white mb-4 relative z-10" />
                <h3 className="text-lg font-bold mb-2 relative z-10">Visual Learning</h3>
                <p className="text-sm text-muted-foreground relative z-10">
                  See chord shapes and progressions on an interactive keyboard 
                  visualization and real-time feedback.
                </p>
              </motion.div>

              {/* Feature 5 */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/5 hover:border-primary/50 transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <ColumnsIcon className="w-10 h-10 text-white mb-4 relative z-10" />
                <h3 className="text-lg font-bold mb-2 relative z-10">Interactive Chord Sequencer</h3>
                <p className="text-sm text-muted-foreground relative z-10">
                  Arrange suggested chords into your perfect progression. Export as MIDI and bring your composition into any DAW.
                </p>
              </motion.div>

              {/* Feature 6 */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/5 hover:border-primary/50 transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Wand2 className="w-10 h-10 text-white mb-4 relative z-10" />
                <h3 className="text-lg font-bold mb-2 relative z-10">Context-Aware Suggestions</h3>
                <p className="text-sm text-muted-foreground relative z-10">
                  Get Advice from AI about what chords to play next, based on the context of your current composition.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Learning Section */}
        <section className="py-16 relative px-6">
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <ChatPreview />
              <div className="lg:w-1/2 space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
                  Learn Music Theory, Naturally.
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Chat with our AI to understand music theory concepts, get chord suggestions, and see them visualized in real-time. No more struggling with complex theory books.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <PianoIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Visual Learning</h3>
                      <p className="text-sm text-muted-foreground">See chord shapes and progressions on an interactive keyboard</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Natural Dialogue</h3>
                      <p className="text-sm text-muted-foreground">Ask questions in plain English and get clear explanations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diagonal Feature Section */}
        <section className="py-24 relative px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] rounded-xl overflow-hidden border border-white/5"
              >
                <Image
                  src="/placeholder.svg?height=800&width=600&text=Interactive+Piano&fontsize=32&bg=000000"
                  alt="Interactive Piano Interface"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>

              {/* Right side content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:pl-8"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Interactive Learning Experience
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Ask Anything</h3>
                      <p className="text-muted-foreground">
                        "What chords work well in a jazz progression?" 
                        "How do I create tension in my melody?"
                        Get instant, practical answers.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <PianoIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">See It In Action</h3>
                      <p className="text-muted-foreground">
                        Watch as chord progressions and scales come to life on our 
                        interactive piano. Perfect for visual learners.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Wand2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Understand Theory</h3>
                      <p className="text-muted-foreground">
                        Learn about music theory concepts like chords, keys and scales.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section with animations */}
        <section className="py-16 sm:py-24 relative px-6">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=&fontsize=0&bg=0f172a&colors[]=6366f1,a855f7,ec4899"
            alt="Abstract gradient background"
            fill
            className="object-cover opacity-20"
          />
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center relative"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 px-4 sm:px-0">
              Be the first to experience
              <br className="hidden sm:inline" />
              the future of music creation
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 px-4 sm:px-0">
              Join our waitlist to get early access and exclusive updates about PianoLabs.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 px-4 sm:px-0"
            >
              <Input placeholder="Enter your email" type="email" className="h-12 bg-white/5 border-white/5 focus:border-white/10 focus:ring-1 focus:ring-white/10 rounded-xl text-white placeholder:text-white/40" />
              <Button className="h-12 px-8 bg-white text-black hover:bg-white/90 rounded-xl transition-colors whitespace-nowrap">
                Join Waitlist
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 relative px-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center gap-2 text-xl font-bold mb-4 sm:mb-0">
                <Sparkles className="w-6 h-6 text-primary" />
                PianoLabs
              </div>
              <div className="flex gap-4 sm:gap-8">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
