import { useState } from "react";

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative">
        <div className="carousel-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentImage ? "active" : ""
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <button
            className="carousel-control prev"
            onClick={() =>
              handleSlideChange(
                currentImage === 0 ? images.length - 1 : currentImage - 1
              )
            }
          >
            <span className="carousel-control-icon">&lt;</span>
          </button>
          <button
            className="carousel-control next"
            onClick={() =>
              handleSlideChange(
                currentImage === images.length - 1 ? 0 : currentImage + 1
              )
            }
          >
            <span className="carousel-control-icon">&gt;</span>
          </button>
        </div>
      </div>
      <div className="carousel-indicators flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator mx-1 ${
              index === currentImage ? "active" : ""
            }`}
            onClick={() => handleSlideChange(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
