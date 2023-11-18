import { Outlet } from "react-router-dom";
import { Suspense } from "react";
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
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
