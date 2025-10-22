"use client";
import AboutSection from "@/components/AboutSection";

export default function AboutPage() {
  return (
    <>
      {/* Dummy Hero Section */}
      <section className="min-h-screen snap-start flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-700 text-white text-5xl font-semibold">
        Hero Section
      </section>

      {/* About Section kamu */}
      <AboutSection />

      {/* Dummy Footer Section */}
      <section className="min-h-screen snap-start flex items-center justify-center bg-gradient-to-br from-green-400 to-teal-600 text-white text-5xl font-semibold">
        Footer Section
      </section>
    </>
  );
}