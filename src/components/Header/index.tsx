import { HeaderContainer } from "./styles";

import Cover from "../../assets/Cover.png";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Cover} alt="Header Cover" />
    </HeaderContainer>
  );
};
