import { CarListItem } from "components/ContactListItem/ContactListItem";
import { useSelector } from "react-redux";
import { selectCars, selectIsLoading, selectError } from "redux/selectors";

import css from "./ContactList.module.css";

export const CarList = () => {
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <ul className={css.list}>
      {!isLoading && !error ? (
        <p className={css.emptyMessage}>
          Sorry, there are no cars available for rental at the moment.
        </p>
      ) : (
        cars.map((car) => <CarListItem key={car.id} contact={car} />)
      )}
    </ul>
  );
};
