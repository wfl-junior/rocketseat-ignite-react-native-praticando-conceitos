import { Check, Trash } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import {
  CheckBox,
  CheckBoxContainer,
  Container,
  Title,
  TrashContainer,
} from "./styles";

export interface Task {
  title: string;
  completed: boolean;
}

interface TaskItemProps extends Task {}

export const TaskItem: React.FC<TaskItemProps> = ({ title, completed }) => {
  const { colors } = useTheme();

  return (
    <Container completed={completed}>
      <CheckBoxContainer>
        <CheckBox completed={completed}>
          {completed && <Check size={12} color="white" />}
        </CheckBox>
      </CheckBoxContainer>

      <Title completed={completed}>{title}</Title>

      <TrashContainer>
        <Trash color={colors.gray[300]} size={18} />
      </TrashContainer>
    </Container>
  );
};
