import { useEffect } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

import {
  Overlay,
  ModalStyled,
  InfoWrap,
  Image,
  TitleWrap,
  Title,
  Span,
  DetailsList,
  DetailsItem,
  Description,
  InfoTitle,
  ConditionItem,
  ConditionList,
  SpanCondition,
  Button,
  iconStyles,
} from "./Modal.styled";

const modalRoot = document.getElementById("modal-root");

export const Modal = ({ car, onClose }) => {
  const {
    id,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    accessories,
    mileage,
    img,
    fuelConsumption,
    engineSize,
    description,
    functionalities,
    rentalConditions,
  } = car;

  const city = address.split(",")[1];
  const country = address.split(",")[2];

  const getAge = (rentalConditions) => {
    const result = {};
    const ageCondition = rentalConditions.split("\n")[0];
    const words = ageCondition.split(" ");
    result.conditionText = words.slice(0, 2).join(" ");
    result.minAge = words[words.length - 1];
    return result;
  };

  const ageCondition = getAge(rentalConditions);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [onClose]);

  const handleClickBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <Overlay onClick={handleClickBackdrop}>
      <ModalStyled>
        <IoMdClose style={iconStyles} onClick={onClose} />
        <Image src={img} alt={make} loading="lazy" width="469" height="314" />
        <InfoWrap>
          <TitleWrap>
            <Title>
              {make} <Span>{model}, </Span>
              {year}
            </Title>
          </TitleWrap>
          <DetailsList>
            <DetailsItem>{city}</DetailsItem>
            <DetailsItem>{country}</DetailsItem>
            <DetailsItem>Id: {id}</DetailsItem>
            <DetailsItem>Year: {year}</DetailsItem>
            <DetailsItem>Type: {type}</DetailsItem>
          </DetailsList>
          <DetailsList>
            <DetailsItem>Fuel Consumption: {fuelConsumption}</DetailsItem>
            <DetailsItem>Engine Size: {engineSize}</DetailsItem>
          </DetailsList>
          <Description>{description}</Description>
          <InfoTitle>Accessories and functionalities:</InfoTitle>
          <DetailsList>
            {accessories.map((item) => (
              <DetailsItem key={item}>{item}</DetailsItem>
            ))}
          </DetailsList>
          <DetailsList>
            {functionalities.map((item) => (
              <DetailsItem key={item}>{item}</DetailsItem>
            ))}
          </DetailsList>
          <InfoTitle>Rental Conditions:</InfoTitle>
          <ConditionList>
            <ConditionItem>
              <p>
                {ageCondition.conditionText}
                <SpanCondition> {ageCondition.minAge}</SpanCondition>
              </p>
            </ConditionItem>
            <ConditionItem>{rentalConditions.split("\n")[1]}</ConditionItem>
            <ConditionItem>{rentalConditions.split("\n")[2]}</ConditionItem>
            <ConditionItem>
              Mileage:{" "}
              <SpanCondition>{mileage.toLocaleString("en-US")}</SpanCondition>
            </ConditionItem>
            <ConditionItem>
              Price: <SpanCondition>{rentalPrice}</SpanCondition>
            </ConditionItem>
          </ConditionList>
        </InfoWrap>
        <Button href="tel:+380730000000">Rental car</Button>
      </ModalStyled>
    </Overlay>,
    modalRoot
  );
};
