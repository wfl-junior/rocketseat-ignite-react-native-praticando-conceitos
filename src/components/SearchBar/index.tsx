import { PlusCircle } from "phosphor-react-native";
import { useState } from "react";
import { AddButton, Container, Input } from "./styles";

export const SearchBar: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  function handleSubmit() {}

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <Container>
      <Input
        placeholder="Adicione uma nova tarefa"
        autoCapitalize="sentences"
        autoComplete="off"
        onSubmitEditing={handleSubmit}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFocused={isFocused}
      />

      <AddButton activeOpacity={0.5} onPress={handleSubmit}>
        <PlusCircle size={16} color="white" />
      </AddButton>
    </Container>
  );
};
