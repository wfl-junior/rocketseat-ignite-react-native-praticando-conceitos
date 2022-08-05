import { useMemo } from "react";
import { FlatList, Image } from "react-native";
import clipboard from "~/assets/clipboard.png";
import { CreateTaskBar } from "~/components/CreateTaskBar";
import { Header } from "~/components/Header";
import { TaskItem } from "~/components/TaskItem";
import { useTasksContext } from "~/contexts/TasksContext";
import {
  CompletedTasksTitle,
  Container,
  Content,
  CreatedTasksTitle,
  Loading,
  NoTasks,
  NoTasksSubTitle,
  NoTasksTitle,
  Tasks,
  TasksHeader,
  TasksHeaderAmount,
  TasksHeaderBadge,
  TasksHeaderGroup,
} from "./styles";

export const Home: React.FC = () => {
  const { tasks, isInitialTasksLoading } = useTasksContext();

  const completedTasksAmount = useMemo(() => {
    return tasks.filter(task => task.completed).length;
  }, [tasks]);

  return (
    <Container>
      <Header />

      <Content>
        <CreateTaskBar />

        {isInitialTasksLoading ? (
          <Loading />
        ) : (
          <Tasks>
            <TasksHeader>
              <TasksHeaderGroup>
                <CreatedTasksTitle>Criadas</CreatedTasksTitle>
                <TasksHeaderBadge>
                  <TasksHeaderAmount>{tasks.length}</TasksHeaderAmount>
                </TasksHeaderBadge>
              </TasksHeaderGroup>

              <TasksHeaderGroup>
                <CompletedTasksTitle>Concluídas</CompletedTasksTitle>
                <TasksHeaderBadge>
                  <TasksHeaderAmount>{completedTasksAmount}</TasksHeaderAmount>
                </TasksHeaderBadge>
              </TasksHeaderGroup>
            </TasksHeader>

            <FlatList
              data={tasks}
              keyExtractor={task => task.id}
              renderItem={({ item }) => <TaskItem task={item} />}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 12 }}
              ListEmptyComponent={() => (
                <NoTasks>
                  <Image source={clipboard} />

                  <NoTasksTitle>
                    Você ainda não tem tarefas cadastradas
                  </NoTasksTitle>

                  <NoTasksSubTitle>
                    Crie tarefas e organize seus itens a fazer
                  </NoTasksSubTitle>
                </NoTasks>
              )}
            />
          </Tasks>
        )}
      </Content>
    </Container>
  );
};
