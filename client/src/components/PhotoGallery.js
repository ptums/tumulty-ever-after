import React from 'react';
import ImageGallery from 'react-image-gallery';
import SliderImages from '../media/slider/';

const PhotoGallery = () => {
  return (
    <ImageGallery
      items={SliderImages.sort(() => Math.random() - 0.5)}
      sizes={200}
      lazyLoad
      autoPlay
      showFullscreenButton={false}
      showPlayButton={false}
    />
  );
};

export default PhotoGallery;
