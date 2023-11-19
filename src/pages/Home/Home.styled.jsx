import styled from "styled-components";
import heroPicture from "../../assets/hero_pic.jpg";

export const HeroSection = styled.section`
  max-width: 100%;
  height: 400px;
  padding: 60px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 100px;
  left: 0px;
  height: 100vh;
  width: 100%;
  background-image: url(${heroPicture});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -10;
`;

export const HeroTitle = styled.h1`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  font-size: 36px;
  color: #fff;
`;

export const Button = styled.button`
  display: flex;
  width: 274px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
