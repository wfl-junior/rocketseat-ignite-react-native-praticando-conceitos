import { TextInput, TextInputProps } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 54px;
  margin-top: -27px;
`;

interface InputProps {
  isFocused: boolean;
}

export const Input = styled(TextInput).attrs(({ theme }): TextInputProps => {
  return {
    placeholderTextColor: theme.colors.gray[300],
  };
})<InputProps>`
  flex: 1;
  font-size: 16px;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid;

  ${({ theme, isFocused }) => css`
    background-color: ${theme.colors.gray[500]};
    color: ${theme.colors.gray[100]};
    font-family: ${theme.fonts.primary[400]};
    border-color: ${isFocused
      ? theme.colors.purple.dark
      : theme.colors.gray[500]};
  `}
`;

export const AddButton = styled.TouchableOpacity`
  width: 54px;
  height: 54px;
  margin-left: 4px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.blue.dark};
  justify-content: center;
  align-items: center;
`;
