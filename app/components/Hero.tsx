// components/Hero.tsx
"use client";
import { useState, useEffect } from "react";

const roles = ["Full Stack Developer", "UI/UX Designer", "Tech Enthusiast"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentWord = roles[currentRole];

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{" "}
<span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
  Kevin Tuplano
</span>
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span className="border-r-2 border-purple-400 pr-2 animate-pulse">
              {displayText}
              <span className="animate-blink">|</span>
            </span>
          </div>
        </div>

        <p className="text-xl text-gray-100 mb-12 leading-relaxed max-w-2xl mx-auto">
          I’m a developer who enjoys building clean, functional, and
          user-friendly web experiences. Whether it’s crafting responsive
          interfaces or working behind the scenes on logic and data, I’m all
          about creating solutions that actually work — and look good doing it.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
className="bg-gradient-to-r from-emerald-600 to-lime-500 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-700 hover:to-lime-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
          >
            View My Work
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-full font-semibold hover:bg-emerald-400 hover:text-white transform hover:scale-105 transition-all duration-200"
          >
            Let's Talk
          </button>
        </div>

        {/* Floating animation elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </section>
  );
}
