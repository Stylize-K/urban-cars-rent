import { Button, HeroSection, HeroTitle, BackgroundImage } from "./Home.styled";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };

  return (
    <main>
      <HeroSection>
        <BackgroundImage />
        <HeroTitle>One click. Long trip</HeroTitle>
        <Button onClick={handleClick}>Start</Button>
      </HeroSection>
    </main>
  );
};

export default Home;
