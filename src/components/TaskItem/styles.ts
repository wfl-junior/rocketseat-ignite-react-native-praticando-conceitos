import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

interface SharedProps {
  completed: boolean;
}

export const Container = styled(TouchableOpacity)<SharedProps>`
  width: 100%;
  padding: 12px;
  border: 1px solid;
  border-radius: 8px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;

  ${({ theme, completed }) => css`
    background-color: ${theme.colors.gray[500]};
    border-color: ${theme.colors.gray[completed ? 500 : 400]};
  `}
`;

export const CheckBoxContainer = styled.View`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

export const CheckBox = styled.View<SharedProps>`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  border: 2px solid;

  ${({ theme, completed }) => {
    if (completed) {
      return css`
        border-color: ${theme.colors.purple.dark};
        background-color: ${theme.colors.purple.dark};
      `;
    }

    return css`
      border-color: ${theme.colors.blue.light};
    `;
  }}
`;

export const Title = styled.Text<SharedProps>`
  font-size: 14px;
  margin: 0 8px;
  flex: 1;

  ${({ theme, completed }) => css`
    font-family: ${theme.fonts.primary[400]};
    color: ${theme.colors.gray[completed ? 300 : 100]};
    text-decoration: ${completed ? "line-through" : "none"};
  `}
`;

export const TrashContainer = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;
