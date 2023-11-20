export const FilterSelectStyles = {
  control: (styles) => {
    return {
      ...styles,
      backgroundColor: "#F7F7FB",
      border: "1px solid transparent",
      borderRadius: "14px",
      color: "#121417",
      fontFamily: "Manrope",
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "20px",
      padding: "5px 18px",
      width: "100%",
      cursor: "pointer",
    };
  },
  option: (styles, { isDisabled, isSelected }) => {
    return {
      ...styles,
      color: isDisabled
        ? "#fff"
        : isSelected
        ? "#121417"
        : "rgba(18, 20, 23, 0.20)",
      fontSize: isDisabled ? "16px" : "18px",
    };
  },
  singleValue: (styles) => {
    return {
      ...styles,
      color: "#121417",
      fontSize: "18px",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    color: "#121417",
    fontSize: "18px",
  }),
};
