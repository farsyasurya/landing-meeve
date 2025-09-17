// app/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { Benefit } from "@/components/Benefit";
import { About } from "@/components/About";
import { Ingrediens } from "@/components/Ingrediens";
import { Values } from "@/components/Values-Section";
import BenefitSection from "@/components/Benefit-Section";
import CtaSection from "@/components/Cta-Section";
import { Certification } from "@/components/Certification";
import TestimonialHeader from "@/components/Testimoni";
import { Blog } from "@/components/Blog";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <main
        className="relative min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/10 bg-purple-900/50 to-red-900/60" />

        {/* Navbar */}
        <header className="relative z-10 flex items-center justify-between px-10 py-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <img src="/logo.png" alt="Meeve Logo" className="w-25 h-12" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-white text-sm">
            <Link href="#">Home</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Our Solutions</Link>
            <Link href="#">Products</Link>
            <Link href="#">Membership</Link>
            <Link href="#">Blogs & News</Link>
            <Link href="#">Contact Us</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 text-white">
            <button aria-label="Search">🔍</button>
            <button aria-label="Cart">🛒</button>
            <button aria-label="Profile">👤</button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 pt-28">
          <h1 className="text-4xl  font-mixed md:text-6xl font-bold leading-snug">
            Transform Your <br />
            <span className="italic font-serif">Wellness</span> Journey
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-gray-200">
            Meeve is a trusted wellness brand offering diabetic-friendly drinks,
            guided workouts, and simple glucose testing for better health.
          </p>
          <Button className="mt-8 bg-white text-purple-900 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100">
            Explore More
          </Button>
        </section>
      </main>
      <Benefit />
      <About />
      <Ingrediens />
      <Values />
      <BenefitSection />
      <CtaSection />
      <Certification />
      <TestimonialHeader />
      <Blog />
      <Contact />
    </>
  );
}
