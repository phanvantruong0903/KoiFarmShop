import React from "react";
import { Carousel } from "antd";
import "./Slideshow.css"; // Ensure your CSS is included

const images = [
  "src/assets/koi1.jpg",
  "src/assets/koi2.jpg",
  "src/assets/koi3.webp",
  "src/assets/koi4.avif",
  "src/assets/koi5.jpg",
  // Add more image paths here
];

export default function Slideshow() {
  return (
    <div className="slideshow-container">
      <Carousel autoplay dots>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="slideshow-image"
              style={{
                marginTop: "80px",
                width: "100%",
                height: "70vh",
                margin: "0 auto",
              }} // Ensure images are responsive
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
