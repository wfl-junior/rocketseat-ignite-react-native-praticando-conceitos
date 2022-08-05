import { PlusCircle } from "phosphor-react-native";
import { useState } from "react";
import { Alert } from "react-native";
import { useTasksContext } from "~/contexts/TasksContext";
import { AddButton, Container, Input } from "./styles";

export const SearchBar: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [newTask, setNewTask] = useState("");
  const { createTask } = useTasksContext();

  function handleSubmit() {
    const newTaskTitle = newTask.trim();

    if (!newTaskTitle) {
      return Alert.alert("Tarefa", "Informe o título da tarefa.");
    }

    createTask(newTaskTitle);
    setNewTask("");
  }

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
        value={newTask}
        onChangeText={setNewTask}
      />

      <AddButton activeOpacity={0.75} onPress={handleSubmit}>
        <PlusCircle size={16} color="white" />
      </AddButton>
    </Container>
  );
};
