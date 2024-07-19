import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import './App.css';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const importAll = (r) => r.keys().map(r);
  const imageFiles = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

  const images = imageFiles.map((image, index) => ({
    id: index + 1,
    src: image,
    alt: `Image ${index + 1}`
  }));

  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <ImageGallery images={images} setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          images={images}
        />
      )}
    </div>
  );
};

export default App;