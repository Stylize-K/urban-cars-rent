import styled from "styled-components";
import heroPicture from "../../assets/hero_pic.jpg";

export const HeroSection = styled.section`
  max-width: 100%;
  height: 400px;
  padding: 60px 20px;

  margin-left: auto;
  margin-right: auto;
  text-align: left;

  background-image: url(${heroPicture});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  /* max-width: 1600px;
    height: 600px;
    padding: 180px 200px; */
`;

export const HeroTitle = styled.h1`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  font-size: 24px;
`;

export const Button = styled.button`
  display: flex;
  width: 274px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: white;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
