import { PacmanLoader } from "react-spinners";
import { colors } from "../../styles/GlobalStyles";
import { LoaderContainer } from "./LoaderStyled";

const Loader = () => (
  <LoaderContainer>
    <PacmanLoader color={colors.green} />
  </LoaderContainer>
);

export default Loader;
