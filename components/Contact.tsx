import React from "react";

const Contact = () => {
  return (
    <footer className="text-white mt-35 px-6 md:px-16 py-10">
      <div className="flex flex-col lg:flex-row justify-between border-b border-gray-600 pb-10 gap-10">
        {/* Kiri - Logo dan Newsletter */}
        <div className="max-w-md">
          <img src="/logo.png" className="text-2xl font-semibold mb-4" />
          <p className="mb-4 text-sm">
            Stay up to date with our latest features and releases by joining our
            newsletter.
          </p>
          <form className="flex w-full max-w-md mb-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-full outline-none bg-white text-black"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-2 rounded-r-full font-medium hover:bg-yellow-500 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-300">
            By subscribing, you agree to our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and consent to receive updates from our company.
          </p>
        </div>

        {/* Kanan - Links */}
        <div className="flex flex-wrap gap-10">
          <div className="flex flex-col text-sm space-y-2 min-w-[120px]">
            <p className="font-semibold mb-1 text-amber-400">About Us</p>
            <a href="#">Our Solutions</a>
            <a href="#">Products</a>
            <a href="#">Membership</a>
            <a href="#">Blogs & News</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="flex flex-col text-sm space-y-2 min-w-[120px]">
            <p className="font-semibold mb-1  text-amber-400">Help</p>
            <a href="#">Location</a>
            <a href="#">Achievements</a>
          </div>
          <div className="flex flex-col text-sm space-y-2 min-w-[120px]">
            <p className="font-semibold mb-1  text-amber-400">Follow us</p>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">X</a>
            <a href="#">LinkedIn</a>
            <a href="#">Youtube</a>
          </div>
        </div>
      </div>

      {/* Bawah */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 pt-6 gap-4">
        <p>© 2025 Meeve. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Cookies Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
