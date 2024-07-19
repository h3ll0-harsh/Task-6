import React from 'react';
import './Modal.css';

const Modal = ({ selectedImage, setSelectedImage, images }) => {
  const handleClose = () => setSelectedImage(null);

  const handlePrev = () => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  return (
    <div className="modal" onClick={handleClose}>
      <span className="close" onClick={handleClose}>&times;</span>
      <img
        src={selectedImage.src}
        alt={selectedImage.alt}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      />
      <div className="navigation">
        <button onClick={handlePrev}>&lt; Prev</button>
        <button onClick={handleNext}>Next &gt;</button>
      </div>
    </div>
  );
};

export default Modal;