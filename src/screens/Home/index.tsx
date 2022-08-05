import { Image } from "react-native";
import clipboard from "~/assets/clipboard.png";
import { Header } from "~/components/Header";
import { SearchBar } from "~/components/SearchBar";
import {
  CompletedTasksTitle,
  Container,
  Content,
  CreatedTasksTitle,
  NoTasks,
  NoTasksSubTitle,
  NoTasksTitle,
  Tasks,
  TasksHeader,
  TasksHeaderAmount,
  TasksHeaderBadge,
  TasksHeaderGroup,
} from "./styles";

export const Home: React.FC = () => (
  <Container>
    <Header />

    <Content>
      <SearchBar />

      <Tasks>
        <TasksHeader>
          <TasksHeaderGroup>
            <CreatedTasksTitle>Criadas</CreatedTasksTitle>
            <TasksHeaderBadge>
              <TasksHeaderAmount>0</TasksHeaderAmount>
            </TasksHeaderBadge>
          </TasksHeaderGroup>

          <TasksHeaderGroup>
            <CompletedTasksTitle>Concluídas</CompletedTasksTitle>
            <TasksHeaderBadge>
              <TasksHeaderAmount>0</TasksHeaderAmount>
            </TasksHeaderBadge>
          </TasksHeaderGroup>
        </TasksHeader>

        <NoTasks>
          <Image source={clipboard} />

          <NoTasksTitle>Você ainda não tem tarefas cadastradas</NoTasksTitle>

          <NoTasksSubTitle>
            Crie tarefas e organize seus itens a fazer
          </NoTasksSubTitle>
        </NoTasks>
      </Tasks>
    </Content>
  </Container>
);
