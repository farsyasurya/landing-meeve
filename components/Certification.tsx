"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export const Certification = () => {
  return (
    <>
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-16 text-center">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-white/70">certification</p>
          <h2 className="mt-2 text-4xl font-bold text-white">
            Certified Safe, Backed by Experts
          </h2>
          <div className="mt-12 flex flex-col items-center justify-center gap-8 lg:flex-row">
            <img
              src="/Items.png"
              alt=""
              className="w-[90%] sm:w-4/5 md:w-3/5 lg:w-5/6 h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};
