import Image from "next/image";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center py-10 mt-20 text-center">
      {/* Wrapper for Image + Overlay + Content */}
      <div className="relative w-full sm:w-2/3 md:w-3/5 lg:w-10/12 rounded-xl overflow-hidden">
        {/* Background Image */}
        <Image
          src="/CTA Section.png"
          alt="Start Your Health Journey"
          width={1600}
          height={900}
          priority
          className="w-full h-auto object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-10" />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center ">
          <h2 className="mb-6 text-xl font-bold text-white sm:text-2xl md:text-4xl"></h2>
          <Link href="/join-now">
            <button className="rounded-full bg-white mt-15 px-5 py-1 text-sm font-semibold text-purple-900 shadow-lg transition-colors duration-300 hover:bg-gray-100 md:text-base ">
              Join Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
