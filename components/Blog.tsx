"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export const Blog = () => {
  return (
    <>
      <section className="relative z-10 flex flex-col mt-12 items-center justify-center px-6 pt-16 text-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mt-2 text-4xl font-bold text-white">
            Wellness Starts with Knowledge
          </h2>
          <p className="text-sm font-semibold text-white/70">
            From nutrition and fitness to everyday wellness habits, discover
            simple knowledge that empowers your journey.
          </p>
          <div className=" flex flex-col items-center justify-center gap-8 lg:flex-row">
            <img
              src="/Blog.png"
              alt=""
              className="w-[90%] sm:w-4/5 md:w-3/5 lg:w-5/6 h-auto"
            />
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <Link href="/shop" passHref>
          <button className="rounded-full bg-white px-8 py-3 font-semibold text-purple-700 shadow-md shadow-purple-500 transition duration-300 hover:bg-purple-700 hover:text-white">
            Explore All Articles
          </button>
        </Link>
      </div>
    </>
  );
};
