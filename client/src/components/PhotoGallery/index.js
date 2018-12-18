import React from "react";
import ImageGallery from "react-image-gallery";
import SliderImages from "../media/slider/";
import "./index.css";

const PhotoGallery = () => {
  return (
    <ImageGallery
      items={SliderImages.sort(() => Math.random() - 0.5)}
      autoPlay
      showFullscreenButton={false}
      showPlayButton={false}
    />
  );
};

export default PhotoGallery;
