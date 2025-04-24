import { useEffect, useState, useRef } from "react";

// Image URLs consolidated in this file
const BACKGROUND_IMAGE_URL =
  "https://s3-alpha-sig.figma.com/img/421e/dcaa/aae1f0c8bd511f108c719cda60c9e383?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eiy0QnF32pyduKwX3y3XinxKq3uKrw80soFObZCINGhATWUii8~kpAx~QmFSX~2uy0shG~5x49oKOE9nkLsOTOTFSTrSLFh98rjZ2c62Vz4av7tEgMyvQZUH-BzQE7BYK7lO6hcF4L44uquGwCMQ8fv2yK4nGRH6AFvfunaiyMOG2Aap7bVUc~ZR0yZwBmCBoVNJpyY7DY7WjFrL3M6PgGM~nHUYwVFHvZzEwjT1qbQyvHTrH~~TFMf7-WXqKjWzOjAByqtyNyv4ESAQes81evtPObnWBpPllwN0nhYFnDb6ZENo3RUd4y7~RxYszE-KH~U2dlEZCci4yBrcwUBdNw__";
const RIGHT_SIDE_IMAGE_URL =
  "https://s3-alpha-sig.figma.com/img/173d/ae96/0718cf3da6efdf0a3668c8dad076ca2e?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WtqPRwtRnuTfkKCeiJoMSPKrlqTkQjS2GPwa49zIGkPvW8IxkdUUKtaQkuCNxdD-jKWhW6c2B8evuJrIT3PgDXMK9TeIKwIREFHayid-cg8thawR5JVt79If4pUq1~oKpLKQ6OGi5LJK4a9YwLAe-m~zUeXkn5t26HiLjy9gmVyjXAL7Ni5WINevV~ci6ksxOVQI4xZIDFIpE5K2HngARMvuCTEMqA5UwkBm2vr5Jv-7Vy8KsNXWQ7f7ryMkuh6yuwr5cJyjmCYSvf90rj8fq8CgiZZlIcgPUjHorcnarDtRnitFgpzEedGtrBKSH7iQlVAL9Bom1G2NgxW58N-NFw__";

export default function PurposeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Create an Intersection Observer to detect when the section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // If the section is intersecting (visible in the viewport)
        if (entry.isIntersecting) {
          // Trigger the animation with a small delay
          setTimeout(() => {
            setIsVisible(true);
          }, 100);
          // Once triggered, we don't need to observe anymore
          observer.unobserve(entry.target);
        }
      },
      {
        // Trigger when at least 10% of the element is visible
        threshold: 0.1,
        // Start observing slightly before the element comes into view
        rootMargin: "0px 0px -50px 0px"
      }
    );

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up the observer when component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative max-w-6xl mx-auto mt-10 mb-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={BACKGROUND_IMAGE_URL || "/placeholder.svg"}
          alt="Background texture"
          className="object-cover w-full h-full"
          loading="eager"
        />
      </div>

      {/* Content Container */}
      <div className="relative p-6 md:p-10">
        <div
          className={`bg-white p-8 border border-amber-100 shadow-sm mx-auto max-w-5xl transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Text Content */}
            <div
              className={`transition-all duration-1000 delay-300 ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="inline-block relative mb-4">
                <h2 className="text-2xl font-bold text-stone-900 pb-2">PURPOSE</h2>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-1000 delay-700 ease-out ${
                    isVisible ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>

              <h3 className="text-lg font-medium text-stone-800 mb-4 mt-4">
                Empowering Digital Evolution, Creating
                <br />
                Human-Centered Impact
              </h3>

              <p className="text-sm text-stone-700 leading-relaxed">
                At Imperative, we are committed to transforming businesses with intuitive solutions while unifying
                people and communities. We harness the power of technology—AI, automation, and secure platforms—to help
                organizations grow faster, operate smarter, and make a meaningful difference. Every solution we build is
                designed not just for digital success, but for inclusive, lasting value.
              </p>
            </div>

            {/* Right Column - New Image */}
            <div
              className={`flex items-center justify-center transition-all duration-1000 delay-500 ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-sm">
                <div
                  className={`transition-all duration-1500 ease-out ${
                    imageLoaded && isVisible ? "scale-100 blur-0" : "scale-105 blur-sm"
                  }`}
                >
                  <img
                    src={RIGHT_SIDE_IMAGE_URL || "/placeholder.svg"}
                    alt="Imperative visual"
                    className="w-full h-auto object-cover"
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}