import {
  CarsItem,
  PhotoWrapper,
  Photo,
  MainInfo,
  AdiitionalInfo,
  Span,
  ButtonMore,
} from "./CarsListItem.styled";

export const CarsListItem = ({ car }) => {
  return (
    <CarsItem>
      <PhotoWrapper>
        <Photo src={car.img} alt={`Image ${car.make} ${car.model} `} />
      </PhotoWrapper>

      <MainInfo>
        <p>
          {car.make} <Span>{car.model}</Span>, {car.year}
        </p>
        <span>{car.rentalPrice}</span>
      </MainInfo>
      <AdiitionalInfo>
        {car.address.split(",")[1]} | {car.address.split(",")[2]} |{" "}
        {car.rentalCompany} | {car.type} | {car.model} | {car.mileage} |{" "}
        {car.accessories[0]}
      </AdiitionalInfo>
      <ButtonMore type="button">Learn more</ButtonMore>
    </CarsItem>
  );
};
