import { TextInput, TextInputProps } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 54px;
  margin-top: -27px;
`;

export const Input = styled(TextInput).attrs(({ theme }): TextInputProps => {
  return {
    placeholderTextColor: theme.colors.gray[300],
  };
})`
  flex: 1;
  font-size: 16px;
  padding: 16px;
  border-radius: 6px;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray[500]};
    color: ${theme.colors.gray[100]};
    font-family: ${theme.fonts.primary[400]};
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
