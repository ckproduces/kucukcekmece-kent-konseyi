"use client"; // Eğer Next.js 13 App Router kullanıyorsan

import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function ImageGallery() {
  const images = [
    "https://picsum.photos/1920/1080",
    "https://picsum.photos/1920/1080",
    "https://picsum.photos/1920/1080",
    "https://picsum.photos/1920/1080",
    "https://picsum.photos/1920/1080",
    "https://picsum.photos/1920/1080",
    "https://picsum.photos/1920/1080",
    "https://picsum.photos/1920/1080",
    "https://picsum.photos/1920/1080",
    "https://picsum.photos/1920/1080",
    "https://picsum.photos/1920/1080",
    "https://picsum.photos/1920/1080",
    "https://picsum.photos/1920/1080",
    "https://picsum.photos/1920/1080",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="w-full h-full min-h-screen">
      <div className="p-12 w-[80%] mx-auto">
        <h1 className="text-5xl font-semibold w-[80%] mb-5">Galeri</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <img
              key={`i-${index}`}
              src={src}
              alt={`Image ${index}`}
              className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
}
