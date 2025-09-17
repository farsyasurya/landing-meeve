export default function TestimonialHeader() {
  return (
    <>
      <section className="flex flex-col md:flex-row mt-20 items-start justify-between px-6 md:px-16 py-12">
        <div>
          <p className="text-sm font-medium text-white/80">Testimonial</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Happy Customers
          </h2>
        </div>

        <div className="mt-4 md:mt-0 max-w-md text-white/80 text-sm leading-relaxed">
          <p>
            We're proud to walk beside you on every wellness journey. <br />
            Here's how Meeve has made an impact for others.
          </p>
        </div>
      </section>
      <img
        src="/testimoni.png"
        alt="testimoni Meeve"
        className="w-[100%] sm:w-4/5 md:w-3/5 lg:w-15/16 h-auto"
      />
    </>
  );
}
