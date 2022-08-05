import { createContext, useCallback, useContext } from "react";
import { useAsyncStorageState } from "~/hooks/useAsyncStorageState";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TasksContextData {
  tasks: Task[];
  createTask: (title: Task["title"]) => void;
  toggleTaskCompleted: (id: Task["id"]) => void;
  deleteTask: (id: Task["id"]) => void;
  isInitialTasksLoading: boolean;
}

const TasksContext = createContext({} as TasksContextData);

export const useTasksContext = () => useContext(TasksContext);

interface TasksContextProviderProps {
  children: React.ReactNode;
}

export const TasksContextProvider: React.FC<TasksContextProviderProps> = ({
  children,
}) => {
  const [tasks, setTasks, isInitialTasksLoading] = useAsyncStorageState<Task[]>(
    "@todo-list:tasks-v1.0.0",
    [],
  );

  const createTask: TasksContextData["createTask"] = useCallback(title => {
    setTasks(tasks => [
      ...tasks,
      {
        id: Date.now().toString(),
        title,
        completed: false,
      },
    ]);
  }, []);

  const toggleTaskCompleted: TasksContextData["toggleTaskCompleted"] =
    useCallback(id => {
      setTasks(tasks => {
        return tasks.map(task => {
          if (task.id === id) {
            return {
              ...task,
              completed: !task.completed,
            };
          }

          return task;
        });
      });
    }, []);

  const deleteTask: TasksContextData["deleteTask"] = useCallback(id => {
    setTasks(tasks => {
      return tasks.filter(task => task.id !== id);
    });
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        toggleTaskCompleted,
        deleteTask,
        isInitialTasksLoading,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
