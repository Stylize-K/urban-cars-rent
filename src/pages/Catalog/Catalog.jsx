import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectCars } from "../../redux/cars/selectors";
import { fetchCars } from "../../redux/cars/operations";
import { CarsList } from "../../components/CarsList/CarsList";
import { LoadMoreButton } from "../../components/LoadMoreButton/LoadMoreButton.styled";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();

  const isEndCollection = cars.length % 12 !== 0;

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const handleClickMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <CarsList cars={cars} />
      {!isEndCollection && (
        <LoadMoreButton type="button" onClick={handleClickMore}>
          Load More
        </LoadMoreButton>
      )}
    </>
  );
};

export default Catalog;
