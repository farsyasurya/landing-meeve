import { Button } from "./ui/button";

export function Benefit() {
  return (
    <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-10 py-20">
      {/* Left Text */}
      <div className="flex flex-col space-y-6">
        <p className="uppercase text-sm tracking-widest text-gray-300">
          Why Choose Meeve?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Workout Programs</h2>
        <ul className="space-y-3 text-gray-400 font-medium">
          <li>Blood Track Online</li>
          <li>Drink Side-Effect Free</li>
        </ul>
        <Button className="w-fit bg-white text-purple-900 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-100">
          Explore More
        </Button>
      </div>

      {/* Right Image */}
      <div className="relative flex justify-center">
        <div className="overflow-hidden rounded-full w-[380px] h-[260px] md:w-[480px] md:h-[320px] shadow-lg">
          <img
            src="/rectangle.png"
            alt="Workout Program"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="absolute -bottom-20 max-w-xs text-center text-sm text-gray-200">
          Access workout programs with step-by-step video guidance to keep you
          on track with your fitness goals.
        </p>
      </div>
    </section>
  );
}
