"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-creme">
        {/* Subtle texture or parallax layer can be added here */}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        <motion.div 
          className="flex flex-col gap-6 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-serif text-olive leading-tight">
            <span className="text-5xl md:text-7xl block">Nivati</span>
            <span className="text-xl md:text-3xl italic relative inline-block mt-1">
              The Flame Craft
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-1.5 bg-sage/30 -z-10"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </h1>
          <h2 className="text-base md:text-lg text-olive/80 font-sans font-light leading-relaxed max-w-lg">
            Scented Handmade Candles
          </h2>
          
          <div className="flex gap-3 pt-2">
            <Link 
              href="/shop"
              className="px-5 py-3 md:px-8 md:py-4 bg-olive text-creme rounded-full tracking-wide hover:bg-olive/90 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex justify-center text-sm md:text-base"
            >
              Shop Collection
            </Link>
            <Link 
              href="#workshops"
              className="px-5 py-3 md:px-8 md:py-4 border border-olive text-olive rounded-full tracking-wide hover:bg-sage/10 transition-all inline-flex justify-center text-sm md:text-base"
            >
              Workshops
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="relative h-[60vh] lg:h-[80vh] w-full rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          {/* Use a placeholder image from generic high quality sources */}
          <div className="absolute inset-0 bg-sage/20 mix-blend-multiply z-10" style={{ transform: "translateZ(0)" }} />
          <img 
            src="/images/hero_candle.png" 
            alt="Hand-poured Nivati candle with dried botanicals"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
