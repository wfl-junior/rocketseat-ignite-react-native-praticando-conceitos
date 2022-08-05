import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export function useAsyncStorageState<T>(
  key: string,
  initialState: T | (() => T),
) {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    AsyncStorage.getItem(key)
      .then(data => {
        if (data) {
          setState(JSON.parse(data));
        }
      })
      .catch(error => {
        console.warn(error);

        Alert.alert(
          "Tarefas",
          "Não foi possível buscar as tarefas do banco de dados local.",
        );
      })
      .finally(() => setIsLoading(false));
  }, [key]);

  useEffect(() => {
    AsyncStorage.setItem(key, JSON.stringify(state)).catch(error => {
      console.warn(error);

      Alert.alert(
        "Tarefas",
        "Não foi possível persistir as tarefas no banco de dados local.",
      );
    });
  }, [key, state]);

  return [state, setState, isLoading] as const;
}
