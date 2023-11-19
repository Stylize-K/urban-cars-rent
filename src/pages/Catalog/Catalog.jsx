import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectCars } from "../../redux/selectors";
import { fetchCars } from "../../redux/operations";
import { CarsList } from "../../components/CarsList/CarsList";

const Catalog = () => {
  const [page, setPage] = useState(1);
  // const page = 1;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars(page));
  }, [page]);
  const handleClickMore = () => {
    setPage(page + 1);
  };
  const cars = useSelector(selectCars);
  return (
    <div>
      <CarsList cars={cars} />
      {/* <LoadMoreButton type="button" onClick={handleClickMore}>
        Load More
      </LoadMoreButton> */}
    </div>
  );
};

export default Catalog;
