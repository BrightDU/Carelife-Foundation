'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import cardImage1 from '../public/gcard1.jpg';
import whiteimg1 from '../public/whitehero1.jpg';
import cardImage2 from '../public/gcard2.jpg';
import cardImage3 from '../public/gcard3.jpg';
import cardImage4 from '../public/gcard4.jpg';
import cardImage5 from '../public/gcard5.jpg';
import cardImage6 from '../public/gcard6.jpg';
import cardImage7 from '../public/gcard7.jpg';
import cardImage8 from '../public/gcard8.jpg';
import cardImage9 from '../public/gcard9.jpg';
import cardImage10 from '../public/gcard10.jpg';
import cardImage11 from '../public/gcard11.jpg';
import cardImage12 from '../public/gcard12.jpg';
import whiteimg2 from '../public/whitehero2.jpg';
import whiteimg3 from '../public/whitehero3.jpg';
import headerimage5 from '../public/headerimage5.png'
import headerimage4 from '../public/headerimage4.png'
import headerimage6 from '../public/headerimage6.png'


import missionImg from '../public/aboutpageimg.jpg'; // Ensure the path to the image is correct ttt
import Skill1 from '../public/lifeskill.jpg';
import Skill2 from '../public/skiller.jpg';
import community from '../public/communityimg.jpg';
import community2 from '../public/community.jpg';
import education from '../public/educationimg.jpg';
import Education from '../public/education.jpg';
import healtha from '../public/healtha.jpg';
import healthb from '../public/healthb.jpg';
import Adcocacy from '../public/advocacy.jpg';
import btsabout from '../public/btsaboutsection.jpg'; // Ensure the path to the image is correct


import white4 from '../public/white4.jpg'; // Ensure the path to the image is correct
import white5 from '../public/white5.jpg'; // Ensure the path to the image is correct
import white6 from '../public/white6.jpg'; // Ensure the path to the image is correct
import white7 from '../public/white7.jpg'; // Ensure the path to the image is correct
import white8 from '../public/white8.jpg'; // Ensure the path to the image is correct
import white9 from '../public/white9.jpg'; // Ensure the path to the image is correct

import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const Gallery = () => {
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
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);
  const cardsPerPage = 1;

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
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    const currentIndex = cardData.findIndex((card) => card.image === selectedImage);
    if (currentIndex < cardData.length - 1) {
      setSelectedImage(cardData[currentIndex + 1].image);
    }
  };

  const handlePrevImage = () => {
    const currentIndex = cardData.findIndex((card) => card.image === selectedImage);
    if (currentIndex > 0) {
      setSelectedImage(cardData[currentIndex - 1].image);
    }
  };

  const visibleCards = cardData.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section id="gallary" className="relative py-12 px-6 sm:px-12 md:px-24 lg:px-48 sm:mb-auto mb-[50px] sm:mt-[-80px] sm:h-[500px] h-[500px] mt-[20px] bg-white flex flex-col items-center justify-start">
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={handleCloseModal}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-white text-3xl" onClick={handleCloseModal}>
              <FaTimes />
            </button>
            <Image src={selectedImage} alt="Enlarged View" width={800} height={800} className="object-contain max-w-full max-h-full" />
            <button className="absolute left-4 text-white text-3xl top-1/2 transform -translate-y-1/2" onClick={handlePrevImage}>
              <FaArrowLeft />
            </button>
            <button className="absolute right-4 text-white text-3xl top-1/2 transform -translate-y-1/2" onClick={handleNextImage}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl w-full mx-auto text-center mb-8" style={{ marginTop: '-80px' }}>
        <h3 className="font-roboto font-bold text-xl sm:text-2xl md:text-[32px] leading-tight text-[#6A6969] mb-4">
          Gallery
        </h3>
        <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mb-2">
          Each image is a testament to the collective efforts of our dedicated volunteers, partners, and supporters.
        </p>
        <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mb-4">
          Explore these glimpses of our journey and join us in our mission to create a better world.
        </p>
      </div>

      <div className="flex justify-center items-center mb-6">
        {visibleCards.map((card) => (
          <div key={card.id} className="bg-white border border-gray-200 rounded-lg shadow-lg w-[330px] h-[315px] overflow-hidden cursor-pointer" onClick={() => setSelectedImage(card.image)}>
            <Image src={card.image} alt={`Card ${card.id}`} width={230} height={315} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <button onClick={handlePrev} className="text-[#141b34] hover:text-gray-600 p-3 rounded-full bg-white hover:bg-gray-300 transition duration-200" disabled={startIndex === 0}>
          <FaArrowLeft size={20} />
        </button>
        <button onClick={handleNext} className="text-[#141b34] hover:text-gray-600 p-3 rounded-full bg-white hover:bg-gray-300 transition duration-200" disabled={startIndex + cardsPerPage >= cardData.length}>
          <FaArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Gallery;











