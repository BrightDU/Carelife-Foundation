'use client';

import React, { useState } from 'react';
import type { StaticImageData } from 'next/image';
import favicon from '../app/public/favicon.ico'; // Explicit import for favicon
import Head from 'next/head'; // Import the Head component

import 'tailwindcss/tailwind.css'; // This should be in your globals or _app.js
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import HeroSection from '../app/components/Hero2';
import Image from 'next/image';
import cardImage1 from '../app/public/gcard1.jpg';
import whiteimg1 from '../app/public/whitehero1.jpg';
import cardImage2 from '../app/public/gcard2.jpg';
import cardImage3 from '../app/public/gcard3.jpg';
import cardImage4 from '../app/public/gcard4.jpg';
import cardImage5 from '../app/public/gcard5.jpg';
import cardImage6 from '../app/public/gcard6.jpg';
import cardImage7 from '../app/public/gcard7.jpg';
import cardImage8 from '../app/public/gcard8.jpg';
import cardImage9 from '../app/public/gcard9.jpg';
import cardImage10 from '../app/public/gcard10.jpg';
import cardImage11 from '../app/public/gcard11.jpg';
import cardImage12 from '../app/public/gcard12.jpg';
import whiteimg2 from '../app/public/whitehero2.jpg';
import whiteimg3 from '../app/public/whitehero3.jpg';
import headerimage5 from '../app/public/headerimage5.png'
import headerimage4 from '../app/public/headerimage4.png'
import headerimage6 from '../app/public/headerimage6.png'
import missionImg from '../app/public/aboutpageimg.jpg'; // Ensure the path to the image is correct ttt
import Skill1 from '../app/public/lifeskill.jpg';
import Skill2 from '../app/public/skiller.jpg';
import community from '../app/public/communityimg.jpg';
import community2 from '../app/public/community.jpg';
import education from '../app/public/educationimg.jpg';
import Education from '../app/public/education.jpg';
import healtha from '../app/public/healtha.jpg';
import healthb from '../app/public/healthb.jpg';
import Adcocacy from '../app/public/advocacy.jpg';
import btsabout from '../app/public/btsaboutsection.jpg'; // Ensure the path to the image is correct

import white4 from '../app/public/white4.jpg'; // Ensure the path to the image is correct
import white5 from '../app/public/white5.jpg'; // Ensure the path to the image is correct
import white6 from '../app/public/white6.jpg'; // Ensure the path to the image is correct
import white7 from '../app/public/white7.jpg'; // Ensure the path to the image is correct
import white8 from '../app/public/white8.jpg'; // Ensure the path to the image is correct
import white9 from '../app/public/white9.jpg'; // Ensure the path to the image is correct
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Gallary = () => {
  const cardData = [
    { id: 1, image: cardImage1 },
    { id: 2, image: whiteimg1 },
    { id: 3, image: cardImage2 },
    { id: 4, image: cardImage3 },
    { id: 5, image: cardImage4 },
    { id: 6, image: cardImage5 },
    { id: 7, image: cardImage6 },
    { id: 8, image: cardImage7 },
    { id: 9, image: cardImage8 },
    { id: 10, image: cardImage9 },
    { id: 11, image: cardImage10 },
    { id: 12, image: cardImage11 },
    { id: 13, image: cardImage12 },
    { id: 14, image: whiteimg2 },
    { id: 15, image: whiteimg3 },
    { id: 16, image: headerimage5 },
    { id: 17, image: headerimage4 },
    { id: 18, image: headerimage6 },
    { id: 19, image: missionImg },
    { id: 20, image: Skill1 },
    { id: 21, image: Skill2 },
    { id: 22, image: community },
    { id: 23, image: community2 },
    { id: 24, image: education },
    { id: 25, image: Education },
    { id: 26, image: healtha },
    { id: 27, image: healthb},
    { id: 28, image: Adcocacy },
    { id: 29, image: btsabout },

    { id: 30, image: white4 },

    { id: 31, image: white5 },
    { id: 32, image: white6 },
    { id: 33, image: white7 },
    { id: 34, image: white8 },
    { id: 35, image: white9 },

  ];

  const [startIndex, setStartIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null); // Type added here
  const cardsPerPage = 1; // For mobile view, show 1 card at a time

  const handleNext = () => {
    if (startIndex + cardsPerPage < cardData.length) {
      setStartIndex(startIndex + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - cardsPerPage >= 0) {
      setStartIndex(startIndex - cardsPerPage);
    }
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Close the modal when clicking the overlay
  };

  const handleNextImage = () => {
    const currentIndex = cardData.findIndex((card) => card.image === selectedImage);
    if (currentIndex < cardData.length - 1) {
      setSelectedImage(cardData[currentIndex + 1].image); // Show the next image
    }
  };

  const handlePrevImage = () => {
    const currentIndex = cardData.findIndex((card) => card.image === selectedImage);
    if (currentIndex > 0) {
      setSelectedImage(cardData[currentIndex - 1].image); // Show the previous image
    }
  };

  const visibleCards = cardData.slice(startIndex, startIndex + cardsPerPage);

  return (
    <>
     {/* Add Favicon and Title */}
     <Head>
        {/* Add global favicon link for SSR */}
        <link rel="icon" href={favicon.src} type="image/x-icon" sizes="any" />
        <meta name="description" content="NGO, Charity, Support, Intervention programs, Nigeria, UK." />
        <title>Gallery</title>
      </Head>
      <Navbar />
      <section
        id="gallary"
        className="relative py-12 px-6 sm:px-12 md:px-24 lg:px-48 h-[600px] bg-white mt-[200px] flex flex-col items-center justify-start"
      >
        {/* Modal for Enlarged Image */}
        {selectedImage && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleCloseModal} // Close modal when clicking outside the image
          >
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            >
              <button
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={handleCloseModal}
              >
                <FaTimes />
              </button>
              <Image
                src={selectedImage}
                alt="Enlarged View"
                width={800}
                height={800}
                className="object-contain max-w-full max-h-full"
              />
              {/* Modal Navigation Arrows */}
              <button
                className="absolute left-4 text-white text-3xl top-1/2 transform -translate-y-1/2"
                onClick={handlePrevImage}
                disabled={cardData.findIndex((card) => card.image === selectedImage) === 0}
              >
                <FaArrowLeft />
              </button>
              <button
                className="absolute right-4 text-white text-3xl top-1/2 transform -translate-y-1/2"
                onClick={handleNextImage}
                disabled={cardData.findIndex((card) => card.image === selectedImage) === cardData.length - 1}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* Content Container with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl w-full mx-auto text-center mb-8"
          style={{ marginTop: '-80px' }}
        >
          <h3 className="font-roboto font-bold text-[16px] mb-8 tracking-[2px] text-[#1D2130]">
            Gallery
          </h3>
          <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mb-2">
            Each image is a testament to the collective efforts of our dedicated volunteers, partners, and supporters.
          </p>
          <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mb-4">
            Explore these glimpses of our journey and join us in our mission to create a better world.
          </p>
        </motion.div>

        {/* Cards Section for Mobile with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center mb-6"
        >
          {visibleCards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg w-[350px] h-[325px] overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(card.image)}
            >
              <Image
                src={card.image}
                alt={`Card ${card.id}`}
                width={230}
                height={315}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Pagination Buttons for Mobile */}
        <div className="flex justify-center gap-2">
          <button
            onClick={handlePrev}
            className="text-[#141b34] hover:text-gray-600 p-3 rounded-full bg-white hover:bg-gray-300 transition duration-200"
            disabled={startIndex === 0}
          >
            <FaArrowLeft size={15} />
          </button>
          <button
            onClick={handleNext}
            className="text-[#141b34] hover:text-gray-600 p-3 rounded-full bg-white hover:bg-gray-300 transition duration-200"
            disabled={startIndex + cardsPerPage >= cardData.length}
          >
            <FaArrowRight size={15} />
          </button>
        </div>
      </section>
      <HeroSection />
      <Footer />
    </>
  );
};

export default Gallary;










