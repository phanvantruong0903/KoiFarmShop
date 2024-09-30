import React, { useState, useEffect } from "react";
import "./Slideshow.css"; // Để thêm CSS cho animation

const images = [
  "src/assets/koi1.jpg",
  "src/assets/koi2.jpg",
  "src/assets/koi3.webp",
  "src/assets/koi4.avif",
  "src/assets/koi5.jpg",

  // Thêm các đường dẫn ảnh khác ở đây
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Thay đổi ảnh mỗi 3 giây

    return () => clearInterval(intervalId); // Dọn dẹp khi component unmount
  }, []);

  return (
    <div className="slideshow-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="slideshow-image"
      />
    </div>
  );
}
