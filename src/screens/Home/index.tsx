import { Header } from "~/components/Header";
import { SearchBar } from "~/components/SearchBar";
import { Container, Content } from "./styles";

export const Home: React.FC = () => (
  <Container>
    <Header />

    <Content>
      <SearchBar />
    </Content>
  </Container>
);
