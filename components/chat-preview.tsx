"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'

const chatExamples = [
  {
    question: "What chords would work well with an Am progression?",
    answer: `For an Am progression, you could try:
    
Am - Dm - G - C (Natural minor)
Am - F - C - G (Popular progression)
Am - Em - F - G (Rock style)`
  },
  {
    question: "How do I build a major seventh chord?",
    answer: "A major seventh chord consists of a root note, major third, perfect fifth, and major seventh. For example, Cmaj7 uses the notes C-E-G-B."
  },
  {
    question: "What's the circle of fifths?",
    answer: "The circle of fifths is a sequence of notes/chords arranged by intervals of perfect fifths: C → G → D → A → E → B → F# → C#/Db → Ab → Eb → Bb → F → C"
  },
  {
    question: "Suggest some jazz chord substitutions",
    answer: "Common jazz substitutions include using ii-V instead of V, tritone substitutions (replacing V7 with bII7), and secondary dominants."
  }
]

export function ChatPreview() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="w-full max-w-2xl rounded-xl bg-[#0A0A0A]/90 backdrop-blur-sm border border-white/5 overflow-hidden">
      <div className="p-4 border-b border-white/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-500">
            <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.67159 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00002 2.49999 2.00002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
            <span className="font-medium">Your Personal Assistant</span>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            {/* Dots */}
            <div className="flex gap-1.5">
              {chatExamples.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    index === selectedIndex 
                      ? 'bg-blue-500 w-3' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            
            {/* Arrow Buttons */}
            <div className="flex gap-1">
              <button
                onClick={scrollPrev}
                className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={scrollNext}
                className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {chatExamples.map((example, index) => (
            <div key={index} className="embla__slide min-w-full">
              <div className="p-6 space-y-4">
                <div className="text-white/80 text-lg">
                  {example.question}
                </div>
                <div className="bg-[#0F1117] rounded-lg p-4 text-white/70 whitespace-pre-line">
                  {example.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-white/5">
        <div className="relative">
          <Input
            className="w-full bg-[#0F1117] border-white/5 pr-12 text-white/70 placeholder:text-white/40"
            placeholder="Ask about music theory..."
          />
          <Button 
            size="icon" 
            className="absolute right-1 top-1 h-8 w-8 bg-blue-600 hover:bg-blue-700"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
