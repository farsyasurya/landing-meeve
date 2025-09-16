import Image from "next/image";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center px-6 py-16 mt-20 text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Overlay */}
        <div className="absolute inset-0 rounded-xl" />
        <Image
          src="/CTA Section.png"
          alt="Start Your Health Journey"
          fill
          priority
          className="rounded-xl object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h2 className="mb-6 text-2xl font-bold text-white md:text-4xl"></h2>
        <Link href="/join-now">
          <button className="rounded-full mt-35 bg-white px-8 py-2 text-sm font-semibold text-purple-900 shadow-lg transition-colors duration-300 hover:bg-gray-100 md:text-base">
            Join Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
