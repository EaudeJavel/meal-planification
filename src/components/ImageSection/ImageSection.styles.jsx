import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 50%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to left, black, #FBD7C16D);
    opacity: 0.2;
    z-index: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 0;
`;