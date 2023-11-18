import { Outlet } from "react-router-dom";
import { Header, StyledLink, Navigation } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </Navigation>
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
