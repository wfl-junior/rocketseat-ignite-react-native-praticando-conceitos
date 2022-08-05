import { Header } from "~/components/Header";
import { SearchBar } from "~/components/SearchBar";
import {
  CompletedTasksTitle,
  Container,
  Content,
  CreatedTasksTitle,
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
      </Tasks>
    </Content>
  </Container>
);
