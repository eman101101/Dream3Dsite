"use client";

import Link from "next/link";
import Container from "@/components/container";
import { useEffect, useRef } from "react";
import anime from "animejs";
import Image from "next/image";

export default function Home({ posts }) {
  const fadeInRef = useRef(null);

  useEffect(() => {
    if (fadeInRef.current) {
      anime({
        targets: fadeInRef.current,
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 1500,
        easing: "easeInOutQuad",
      });
    }
  }, []);

  return (
    <>
      <Container>
      <div
          ref={fadeInRef}
          className="py-40 text-white bg-cover bg-center"
          style={{ backgroundImage: "url('/images/world.gif')" }}
        >
<h1 className="text-brand-primary mb-6 mt-4 text-center text-6xl font-extrabold tracking-tight lg:text-7xl lg:leading-snug text-outline">
  Dream3D
</h1>
<p className="text-center text-2xl text-white mb-10 text-outline">
  Your Dreams Made Real
</p>
        </div>


        {/* Education in 3D Printing / Custom Designs Section */}
        <section className="py-20 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
              Become a 3D Printing expert
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  3D Printing Basics
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  Learn the fundamentals of 3D printing, including how to set up and operate a 3D printer.
                </p>
                <img src="/images/printers.webp" alt="Work 1" className="mt-4 rounded-lg shadow-lg" />

              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Advanced Techniques
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  Explore advanced 3D printing techniques to create complex objects.
                </p>
                <img src="/images/advanced.jpeg" alt="Work 1" className="mt-4 rounded-lg shadow-lg" />

              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Custom Designs
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  Learn how to create custom 3D designs tailored to your specific needs and preferences.
                </p>
                                <img src="/images/fusion360.png" alt="Work 1" className="mt-4 rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
              Your Ideas, Brought to Life
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Raptors Keychain
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                I created a custom Raptors figure and painted it with the Bambu Lab colour changing system.
                </p>
                <img src="/images/work1.jpg" alt="Work 1" className="mt-4 rounded-lg shadow-lg" />

              </div>
              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Scan and Print
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                Made a 3D Scan of a figure and made it into a custom bust with photogrammetry, ensuring accurate detail and size.
                </p>
                <img src="/images/work2.jpg" alt="Work 1" className="mt-4 rounded-lg shadow-lg" />

              </div>
              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Custom Yarn Spinners
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                I was asked to make a custom Sheep Yarn spinner and to make it a multi-colour print as well.
                </p>
                                <img src="/images/work3.jpg" alt="Work 1" className="mt-4 rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>
      </Container>

      <style jsx>{`
        .text-outline {
          text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000;
        }
        .dark .text-outline {
          text-shadow: 2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff;
        }
      `}</style>
    </>
  );
}

