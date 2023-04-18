// src/components/ImageSection/ImageSection.jsx
import { useState, useEffect } from 'react';
import './ImageSection.styles';
import {
    Image,
    ImageContainer
  } from "./ImageSection.styles";

function getRandomImage() {
  const randomNum = Math.floor(Math.random() * 30) + 1;
  return `../src/assets/meals/meal-${randomNum}.jpeg`;
}

function ImageSection() {
  const [randomImageUrl, setRandomImageUrl] = useState('');

  useEffect(() => {
    const updateRandomImage = () => {
      setRandomImageUrl(getRandomImage());
    };
    updateRandomImage();
  }, []);

  return (
    <ImageContainer>
      <img style={{width:'100%',height:'100%',objectFit:'cover'}} src={randomImageUrl} alt="Random meal" />
    </ImageContainer>
  );
}

export default ImageSection;
