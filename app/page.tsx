'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Play, Music, Wand2, ArrowRight, Sparkles, MessageSquare, BookOpen, Check } from 'lucide-react'
import { XLogo } from '@/components/ui/x-logo'
import { VisualIcon } from '@/components/ui/visual-icon'
import { PianoIcon } from '@/components/ui/piano-icon'
import { PianoKeysIcon } from '@/components/ui/piano-keys-icon'
import { LightbulbIcon } from '@/components/ui/lightbulb-icon'
import { ColumnsIcon } from '@/components/ui/columns-icon'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
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
  const [showAlert, setShowAlert] = useState(false)

  const handleWaitlistClick = () => {
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000) // Hide after 3 seconds
  }

  return (
    <main className="relative min-h-screen bg-black">
      {/* Alert */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showAlert ? 1 : 0, y: showAlert ? 0 : 20 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-xl px-4"
      >
        <Alert className="rounded-xl bg-black/90 border border-white/10 backdrop-blur-sm text-white">
          <Check className="h-4 w-4" />
          <AlertTitle className="text-white">Awesome! You're in!</AlertTitle>
          <AlertDescription className="text-white/80">
            Feel free to follow my X for live development updates
          </AlertDescription>
        </Alert>
      </motion.div>

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
      <div className="relative z-10 mx-auto max-w-[1400px]">
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
                <Button onClick={handleWaitlistClick} className="bg-white text-black hover:bg-white/90 rounded-xl transition-colors">
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-48 pb-16 px-6">
          <div className="w-full relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-3xl mx-auto text-center mb-8 relative"
              >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-3xl scale-110" />
                <div className="relative">
                  <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-4 tracking-tight relative">
                    <span className="relative inline-block">
                      Learn piano with<br className="hidden sm:block" /> natural&nbsp;language
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-500 to-fuchsia-500 blur-[50px] opacity-30 scale-150" />
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 blur-xl opacity-10" />
                    </span>
                  </h1>
                  <p className="text-xl sm:text-2xl text-white/60 max-w-2xl mx-auto">
                    Your AI-assisted theory teacher<br className="hidden sm:block" /> and&nbsp;composer
                  </p>
                </div>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl sm:text-2xl text-white/60 max-w-2xl mx-auto mb-8"
              >
                Transform your musical ideas into compositions through human language. Learn piano and music theory with your personal AI-powered teacher.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 mb-8 sm:mb-16 px-4 sm:px-0"
              >
                <Input placeholder="Enter your email" type="email" className="h-12 bg-white/5 border-white/5 focus:border-white/10 focus:ring-1 focus:ring-white/10 rounded-xl text-white placeholder:text-white/40" />
                <Button onClick={handleWaitlistClick} className="h-12 px-8 bg-white text-black hover:bg-white/90 rounded-xl transition-colors whitespace-nowrap">
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

        {/* Main Preview Section */}
        <section className="py-8 relative px-6">
          <div className="relative z-10">
            <motion.div 
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [0, 0.15],
                  [0, 1]
                ),
                filter: useTransform(
                  scrollYProgress,
                  [0, 0.15],
                  ["brightness(0.3)", "brightness(1)"]
                )
              }}
              transition={{ 
                duration: 2.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden border border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
              <Image
                src="/placeholder.svg?height=1200&width=2400&text=&fontsize=0&bg=0f172a&colors[]=6366f1,a855f7,ec4899"
                alt="PianoLabs Interface Preview"
                fill
                className="object-cover"
              />
              <motion.div 
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0.05, 0.15],
                    [0, 1]
                  ),
                  y: useTransform(
                    scrollYProgress,
                    [0.05, 0.15],
                    [20, 0]
                  )
                }}
                transition={{ 
                  duration: 2.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="absolute bottom-6 md:bottom-8 left-6 md:left-8 max-w-xl"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Intuitive Composition Interface</h2>
                <p className="text-base md:text-lg text-muted-foreground">
                  A powerful yet simple interface that lets you focus on creativity while AI handles the complexity.
                </p>
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
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1400px] mx-auto px-6"
            >
              {/* Smart Chord Suggestions */}
              <div className="group relative bg-black/30 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:bg-black/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                    <PianoKeysIcon className="w-6 h-6 text-white/60" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Smart Chord Suggestions</h3>
                </div>
                <p className="text-white/60 text-base leading-relaxed">
                  Get intelligent chord recommendations based on what you play live.
                </p>
              </div>

              {/* Music Theory Learning */}
              <div className="group relative bg-black/30 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:bg-black/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                    <LightbulbIcon className="w-6 h-6 text-white/60" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Music Theory Learning</h3>
                </div>
                <p className="text-white/60 text-base leading-relaxed">
                  Learn music theory concepts through interactive lessons and real-time feedback.
                </p>
              </div>

              {/* Melody Generation */}
              <div className="group relative bg-black/30 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:bg-black/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                    <Music className="w-6 h-6 text-white/60" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Melody Generation</h3>
                </div>
                <p className="text-white/60 text-base leading-relaxed">
                  Create unique melodies that complement your chord progressions.
                </p>
              </div>

              {/* Harmony Analysis */}
              <div className="group relative bg-black/30 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:bg-black/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                    <VisualIcon className="w-6 h-6 text-white/60" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Harmony Analysis</h3>
                </div>
                <p className="text-white/60 text-base leading-relaxed">
                  Understand the theory behind your compositions with detailed harmonic analysis.
                </p>
              </div>

              {/* Rhythm Patterns */}
              <div className="group relative bg-black/30 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:bg-black/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                    <ColumnsIcon className="w-6 h-6 text-white/60" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Rhythm Patterns</h3>
                </div>
                <p className="text-white/60 text-base leading-relaxed">
                  Explore different rhythm patterns and learn how they affect your music.
                </p>
              </div>

              {/* Song Structure */}
              <div className="group relative bg-black/30 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:bg-black/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                    <Wand2 className="w-6 h-6 text-white/60" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Song Structure</h3>
                </div>
                <p className="text-white/60 text-base leading-relaxed">
                  Learn about song structure and how to arrange your compositions effectively.
                </p>
              </div>
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
              <Button onClick={handleWaitlistClick} className="h-12 px-8 bg-white text-black hover:bg-white/90 rounded-xl transition-colors whitespace-nowrap">
                Join Waitlist
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/5 py-16 mt-32">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 gap-y-8">
              {/* Logo and description */}
              <div className="md:col-span-6">
                <Link href="/" className="text-xl font-bold flex items-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                  PianoLabs
                </Link>
                <p className="text-white/60 max-w-md">
                  Transform your musical ideas into compositions through natural language. Learn piano and music theory with your personal AI-powered teacher.
                </p>
              </div>
              
              {/* Navigation */}
              <div className="md:col-span-2 md:text-right">
                <h3 className="font-semibold mb-4 text-white">Product</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/compose" className="text-white/60 hover:text-white transition-colors cursor-pointer">
                      Compose
                    </Link>
                  </li>
                  <li>
                    <Link href="/learn" className="text-white/60 hover:text-white transition-colors cursor-pointer">
                      Learn
                    </Link>
                  </li>
                  <li>
                    <Link href="/updates" className="text-white/60 hover:text-white transition-colors cursor-pointer">
                      Updates
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div className="md:col-span-2 md:text-right">
                <h3 className="font-semibold mb-4 text-white">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/about" className="text-white/60 hover:text-white transition-colors cursor-pointer">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-white/60 hover:text-white transition-colors cursor-pointer">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-white/60 hover:text-white transition-colors cursor-pointer">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Social */}
              <div className="md:col-span-2 md:text-right">
                <h3 className="font-semibold mb-4 text-white">Follow</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="https://x.com/pianolabs_ai" className="text-white/60 hover:text-white transition-colors cursor-pointer flex items-center gap-2 justify-end">
                      <XLogo className="w-4 h-4" />
                      Twitter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
