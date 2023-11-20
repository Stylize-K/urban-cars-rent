import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "../../components/Loader/Loader";
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
