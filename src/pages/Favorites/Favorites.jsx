import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectFavoritesCars } from "../../redux/favorites/selectors";
import { CarsList } from "../../components/CarsList/CarsList";

const Favorites = () => {
  const favorites = useSelector(selectFavoritesCars);

  return (
    <>
      {favorites.length === 0 && <p>Oops, you don't have favorite cars</p>}
      <CarsList cars={favorites} />
    </>
  );
};

export default Favorites;
