import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images, setSelectedImage }) => {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          onClick={() => setSelectedImage(image)}
          className="gallery-image"
        />
      ))}
    </div>
  );
};

export default ImageGallery;