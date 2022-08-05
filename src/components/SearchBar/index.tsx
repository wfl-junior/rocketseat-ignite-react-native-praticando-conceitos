import { PlusCircle } from "phosphor-react-native";
import { AddButton, Container, Input } from "./styles";

export const SearchBar: React.FC = () => {
  function handleSubmit() {}

  return (
    <Container>
      <Input
        placeholder="Adicione uma nova tarefa"
        autoCapitalize="sentences"
        autoComplete="off"
        onSubmitEditing={handleSubmit}
      />

      <AddButton activeOpacity={0.5} onPress={handleSubmit}>
        <PlusCircle size={16} color="white" />
      </AddButton>
    </Container>
  );
};
