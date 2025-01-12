'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Play, Music, Wand2, Keyboard, ArrowRight, Sparkles, MessageSquare, Lightbulb, BookOpen, Piano, Twitter } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden" ref={targetRef}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/50 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                PianoLabs
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="hidden sm:inline-flex">About</Button>
              <Button className="gradient-button">Join Waitlist</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with updated background and animations */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-16 px-4 relative">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMTExMTExIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxNTE1MTUiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center relative"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 leading-tight"
          >
            Compose with AI.
            <br className="hidden sm:inline" />
            No theory required.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0"
          >
            Transform your musical ideas into complete compositions with AI-powered assistance. 
            Just play and let PianoLabs do the rest.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 mb-8 sm:mb-16 px-4 sm:px-0"
          >
            <Input placeholder="Enter your email" type="email" className="h-12 bg-white/5 border-white/5 focus:border-white/10 focus:ring-1 focus:ring-white/10 rounded-lg text-white placeholder:text-white/40" />
            <Button className="h-12 px-8 bg-white text-black hover:bg-white/90 rounded-lg transition-colors whitespace-nowrap">
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
              className="mb-16"
              onClick={() => window.open('https://x.com/pianolabs_ai', '_blank')}
            >
              <Twitter className="w-4 h-4 mr-2" />
              Follow Development Journey
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Product Preview Section with animations */}
      <section className="py-16 sm:py-24 px-4 relative">
        <motion.div 
          style={{ opacity, scale }}
          className="max-w-7xl mx-auto grid gap-16"
        >
          {/* First Preview */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden border border-border"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
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
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
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
                Revolutionizing Music Creation
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8">
                PianoLabs combines cutting-edge AI technology with intuitive design to empower musicians of all levels. 
                Whether you're a beginner or a seasoned pro, our platform adapts to your skill set, 
                helping you create professional-quality music with ease.
              </p>
              <Button variant="outline" size="lg">
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
            className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden border border-border"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
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
      </section>

      {/* Features Grid with animations */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group p-6 sm:p-8 bg-secondary/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all"
            >
              <Music className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Smart Chord Suggestions</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Get intelligent chord progressions that match your melody and style, 
                with options to explore different harmonies.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group p-6 sm:p-8 bg-secondary/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all"
            >
              <Wand2 className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">AI-Powered Creativity</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Let artificial intelligence enhance your creative process with 
                intelligent suggestions and musical variations.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group p-6 sm:p-8 bg-secondary/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all"
            >
              <Keyboard className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Visual Learning</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                See exactly how to play each chord with our interactive keyboard 
                visualization and real-time feedback.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Learning Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side: Chat Interface Preview */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-xl overflow-hidden border border-border bg-black/50"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span className="text-sm text-primary">AI Music Theory Assistant</span>
                </div>
                <div className="flex-1 overflow-auto space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-sm">What chords would work well with an Am progression?</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm">For an Am progression, you could try:</p>
                    <ul className="mt-2 space-y-2 text-sm">
                      <li>Am - Dm - G - C (Natural minor)</li>
                      <li>Am - F - C - G (Popular progression)</li>
                      <li>Am - Em - F - G (Rock style)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Input placeholder="Ask about music theory..." className="bg-white/5 border-0" />
                  <Button variant="secondary" size="icon">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Right side: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:pl-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Learn Music Theory, Naturally.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Chat with our AI to understand music theory concepts, get chord suggestions, and see them visualized in real-time. No more struggling with complex theory books.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Piano className="w-6 h-6 text-primary" />
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offset Features Grid */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Feature 1 - Positioned normally */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-primary/50 transition-all"
            >
              <Lightbulb className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Smart Suggestions</h3>
              <p className="text-muted-foreground">
                Get intelligent chord progressions and melody ideas based on your playing style and preferences.
              </p>
            </motion.div>

            {/* Feature 2 - Offset up */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-primary/50 transition-all lg:-mt-12"
            >
              <BookOpen className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Theory Assistant</h3>
              <p className="text-muted-foreground">
                Learn music theory concepts through natural conversation and interactive demonstrations.
              </p>
            </motion.div>

            {/* Feature 3 - Offset down */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-primary/50 transition-all lg:mt-12"
            >
              <Piano className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Visual Learning</h3>
              <p className="text-muted-foreground">
                See chord shapes and progressions visualized on an interactive piano keyboard in real-time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Diagonal Feature Section */}
      <section className="py-24 px-4 relative">
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
                    <Piano className="w-6 h-6 text-primary" />
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
                    <h3 className="font-semibold mb-2">AI-Powered Suggestions</h3>
                    <p className="text-muted-foreground">
                      Get personalized chord and melody suggestions based on your 
                      playing style and the emotion you want to convey.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with animations */}
      <section className="py-16 sm:py-24 px-4 relative">
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
            <Input placeholder="Enter your email" type="email" className="h-12 bg-white/5 border-white/5 focus:border-white/10 focus:ring-1 focus:ring-white/10 rounded-lg text-white placeholder:text-white/40" />
            <Button className="h-12 px-8 bg-white text-black hover:bg-white/90 rounded-lg transition-colors whitespace-nowrap">
              Join Waitlist
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
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
      </footer>
    </div>
  )
}
