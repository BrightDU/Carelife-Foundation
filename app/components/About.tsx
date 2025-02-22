'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import missionImg from '../public/abtimage.png'; // Ensure the path to the image is correct

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const currentRef = aboutRef.current; // Store the current reference value

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Update state based on intersection
      },
      { threshold: 0.5 } // Trigger animation when 50% of the section is in view
    );

    if (currentRef) {
      observer.observe(currentRef); // Observe using the stored ref
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Cleanup using the stored ref
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative py-12 px-6 sm:px-12 md:px-24 lg:px-48  h-[650px]  sm:min-h-screen bg-white flex justify-center items-center overflow-x-hidden"
    >
      {/* Container for content */}
      <div className="max-w-7xl mt-[-480px] sm:mb-auto mb-[-550px]  sm:mt-auto w-full">
        {/* Title */}
        <h2 className="font-roboto text-center  font-bold text-sm sm:text-base tracking-[2px] text-[#1D2130] mx-auto mb-6">
          Mission and Vision
        </h2>

        {/* Mission and Vision Content */}
        <div className="flex flex-col md:flex-row mb-[680px] sm:mb-auto justify-between sm:items-center items-start gap-10">
          {/* Mission Section */}
          <div
            className={`flex-1 text-left transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <h3 className="font-roboto text-lg  sm:text-xl font-bold text-[#003771] mb-4">
              Our Mission
            </h3>
            <p className="font-roboto font-normal  text-sm sm:text-base leading-relaxed text-[#525560]">
            Our mission is to empower every child by improving maternal and child health, nutrition, and early childhood development. We strive to promote maternal literacy, advocacy, education, and digital empowerment for young individuals while implementing research-driven interventions to foster a virtuous society.
            </p>
          </div>

          {/* Vertical Border */}
          <div className="hidden sm:block w-[2px] h-24 sm:h-40 bg-[#E5E5E5]"></div>

          {/* Vision Section */}
          <div
            className={`flex-1 text-left transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <h3 className="font-roboto text-lg sm:text-xl font-bold text-[#003771] mb-4">
              Our Vision
            </h3>
            <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560]">
              Our vision is to foster a safe and supportive environment for every child, empowering them to get the future they deserve.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full max-w-[1200px] sm:h-auto  mb-auto h-[-800] mt-[-650px]  sm:mt-20 sm:mt-12 mx-auto">
          <Image
            src={missionImg}
            alt="Relevant Image"
            layout="responsive"
            width={1200}
            height={656}
            style={{ objectFit: 'cover' }}
            className="rounded-lg h-[350px] sm:h-[450px] md:h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;














