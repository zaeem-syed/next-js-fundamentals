"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/app/ui/styles/home.module.css";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="flex min-h-screen">
      {/* LEFT SECTION - White ~70% */}
      <section className="flex-[0.7] bg-gray-50 flex items-center justify-center p-8">
        <div className="max-w-md">
          <h1 className={`text-4xl font-bold mb-4 ${styles.text_emerald}`}>
            Welcome to the blog
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Massa urna magnis dignissim id euismod porttitor vitae etiam viverra
            nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus
            pharetra, ac porttitor orci.
          </p>
        
          <a
            href="/blog/posts"
            className={`outline outline-1 outline-offset-2 border-emerald-700 text-emerald-700 hover:text-white py-2 px-4 rounded hover:bg-emerald-800 w-fit ${styles.fit_content}`}
          >
            Read
          </a>
        </div>
      </section>

      {/* RIGHT SECTION - Purple ~30% */}
      <section className={`flex-[0.3] ${styles.bg_emerald} flex items-center justify-center relative`}>
        {isDesktop ? (
          <div className="relative w-full aspect-[1000/760]">
            <Image
              src="/images/image-desktop.jpeg"
              alt="Dashboard desktop"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        ) : (
          <div className="relative w-full aspect-[560/620]">
            <Image
              src="/images/image-mobile.jpeg"
              alt="Dashboard mobile"
              fill
              className="object-contain rounded-md"
            />
          </div>
        )}
      </section>
    </main>
  );
}
