import { Image } from "react-native";
import logo from "~/assets/logo.png";
import { Container } from "./styles";

export const Header: React.FC = () => (
  <Container>
    <Image source={logo} />
  </Container>
);
