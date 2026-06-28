"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import KastButton from "./components/layout/button";
import {
  Play,
  Users,
  MessageCircle,
  Globe,
  Zap,
  Shield,
  Monitor,
  Star,
  Check,
  MessageSquare,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";


interface IconProps {
  className?: string;
  size?: number;
}

export function Instagram({ className = "", size = 24 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </motion.svg>
  );
}

export function Twitter({ className = "", size = 24 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </motion.svg>
  );
}

// --- Animations ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function KastLandingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-sans selection:bg-[#EF4444]/30">
      
      {/* Floating Dark Navbar */}
     <Navbar />

      {/* Hero Section (Center Aligned, Cinematic) */}
      <section className="relative pt-48 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Glowing Background Blob */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#EF4444]/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative z-10 max-w-4xl space-y-8"
        >
       

          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black leading-tight tracking-tighter">
            Stream together.<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#EF4444] via-rose-500 to-orange-500">
              No matter where.
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Create a private theater in seconds. Invite your friends, sync your favorite shows perfectly, and react in real-time.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <KastButton size="lg" className="shadow-[0_0_40px_rgba(239,68,68,0.4)] hover:scale-105 transition-transform">
              <Play className="w-5 h-5" fill="currentColor" /> Start Watching Free
            </KastButton>
            <KastButton variant="secondary" size="lg" className="border-white/20 hover:bg-white/10">
              <Users className="w-5 h-5" fill="currentColor" /> Join a Room
            </KastButton>
          </motion.div>
        </motion.div>

        {/* Hero Image / Video Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
          className="mt-20 relative w-full max-w-5xl z-10"
        >
          <div className="absolute -inset-1 bg-linear-to-r from-[#EF4444] to-rose-600 rounded-2xl blur opacity-30" />
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            {/* Mockup Top Bar */}
            <div className="flex items-center px-4 py-3 border-b border-white/10 bg-[#111]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="mx-auto bg-white/5 rounded-md px-4 py-1 text-xs text-gray-500 flex items-center gap-2">
                <Shield className="w-3 h-3" fill="currentColor" /> kast.app/room/movie-night
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=600&fit=crop"
              alt="Platform Interface"
              className="w-full h-auto object-cover opacity-90"
            />
          </div>
        </motion.div>
      </section>

      {/* Partners Marquee */}
      <section className="py-10 border-y border-white/5 bg-white/2">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden flex flex-col items-center">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Seamlessly integrates with</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {["NETFLIX", "DISNEY+", "PRIME VIDEO", "HULU", "HBO MAX", "YOUTUBE"].map((brand) => (
              <span key={brand} className="text-xl md:text-2xl font-black tracking-tighter text-white hover:text-[#EF4444] transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Box Features */}
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Everything you need for the <br/><span className="text-[#EF4444]">perfect watch party</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">No clunky screen sharing. Just pristine, synchronized playback with built-in comms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Feature 1: Large Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EF4444]/10 rounded-full blur-3xl group-hover:bg-[#EF4444]/20 transition-all" />
            <div className="relative z-10 h-full flex flex-col justify-end">
              <div className="w-14 h-14 bg-red-500/20 text-[#EF4444] rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7" fill="currentColor" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Frame-Perfect Sync</h3>
              <p className="text-gray-400 max-w-md">When you pause to grab popcorn, it pauses for everyone. Complete synchronization ensures no one misses a reaction.</p>
            </div>
          </motion.div>

          {/* Feature 2: Small Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gradient-to-bl from-white/5 to-transparent border border-white/10 rounded-3xl p-8 flex flex-col justify-end"
          >
            <div className="w-12 h-12 bg-rose-500/20 text-rose-400 rounded-2xl flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6" fill="currentColor" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Live Chat</h3>
            <p className="text-gray-400 text-sm">Text, voice, and instant emoji reactions overlay.</p>
          </motion.div>

          {/* Feature 3: Small Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gradient-to-tr from-white/5 to-transparent border border-white/10 rounded-3xl p-8 flex flex-col justify-end"
          >
            <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6" fill="currentColor" />
            </div>
            <h3 className="text-2xl font-bold mb-2">100% Private</h3>
            <p className="text-gray-400 text-sm">Invite-only rooms with end-to-end encryption.</p>
          </motion.div>

          {/* Feature 4: Large Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-gradient-to-tl from-white/5 to-transparent border border-white/10 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="relative z-10 h-full flex flex-col justify-end">
              <div className="w-14 h-14 bg-[#EF4444]/20 text-[#EF4444] rounded-2xl flex items-center justify-center mb-6">
                <Monitor className="w-7 h-7" fill="currentColor" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Zero Downloads Required</h3>
              <p className="text-gray-400 max-w-md">Runs flawlessly in the browser. Share a link, friends click, and they are in the lobby instantly. No software bloat.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Experience (Dark split section) */}
      <section id="experience" className="py-32 bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#EF4444]/20 blur-[100px] rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=600&fit=crop" 
              alt="Friends watching together" 
              className="relative rounded-3xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Like you are sharing <br/>the same couch.
            </h2>
            <p className="text-xl text-gray-400">
              We built Kast to bridge the gap. High-fidelity video paired with crisp voice comms creates an atmosphere that feels truly intimate.
            </p>
            <ul className="space-y-5">
              {[
                "Crisp 4K and 1080p stream support",
                "Built-in Spatial Audio for voice chat",
                "Custom theater environments & lighting",
                "Support for up to 100 viewers per room"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-gray-300 font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-[#EF4444] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" fill="currentColor" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {[
            { label: "Active Watchers", value: "2M+" },
            { label: "Rooms Created", value: "15M" },
            { label: "Countries Supported", value: "150+" },
            { label: "Uptime", value: "99.9%" },
          ].map((stat, i) => (
            <div key={i} className="text-center px-4">
              <h4 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2">
                {stat.value}
              </h4>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden border border-white/10 p-16 md:p-24 text-center">
          {/* Animated Background Gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#EF4444]/30 via-[#050505] to-rose-900/30 z-0" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/20 blur-[100px] rounded-full z-0" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#EF4444]/20 blur-[100px] rounded-full z-0" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight">
              Ready for movie night?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Jump in right now. No credit card required, no messy downloads. Just you, your friends, and great cinema.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
              <KastButton size="lg" className="w-full sm:w-auto shadow-xl">
                <Sparkles className="w-5 h-5" fill="currentColor" /> Create a Room Now
              </KastButton>
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold pt-4">Free forever for up to 4 friends</p>
          </div>
        </div>
      </section>

      {/* Dark Footer */}
        <Footer />
    </div>
  );
}