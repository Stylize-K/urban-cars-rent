import { LoaderContainer } from "./Loader.styled";
import { ColorRing } from "react-loader-spinner";

export const Loader = () => {
  return (
    <LoaderContainer>
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#3470FF", "#fff", "#0B44CD", "#fff", "#3470FF"]}
      />
    </LoaderContainer>
  );
};
