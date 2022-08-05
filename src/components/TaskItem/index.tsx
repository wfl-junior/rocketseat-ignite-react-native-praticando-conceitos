import { Check, Trash } from "phosphor-react-native";
import { Alert } from "react-native";
import { useTheme } from "styled-components/native";
import { Task, useTasksContext } from "~/contexts/TasksContext";
import {
  CheckBox,
  CheckBoxContainer,
  Container,
  Title,
  TrashContainer,
} from "./styles";

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task: { title, completed, id },
}) => {
  const { colors } = useTheme();
  const { toggleTaskCompleted, deleteTask } = useTasksContext();

  function handleToggleCompleted() {
    toggleTaskCompleted(id);
  }

  function handleDelete() {
    Alert.alert("Tarefa", "Tem certeza que deseja remover esta tarefa?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        style: "destructive",
        onPress: () => {
          deleteTask(id);
        },
      },
    ]);
  }

  return (
    <Container completed={completed} onPress={handleToggleCompleted}>
      <CheckBoxContainer>
        <CheckBox completed={completed}>
          {completed && <Check size={12} color="white" />}
        </CheckBox>
      </CheckBoxContainer>

      <Title completed={completed}>{title}</Title>

      <TrashContainer onPress={handleDelete}>
        <Trash color={colors.gray[300]} size={18} />
      </TrashContainer>
    </Container>
  );
};
