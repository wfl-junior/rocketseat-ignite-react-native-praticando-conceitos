import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[600]};
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Tasks = styled.View`
  flex: 1;
  margin-top: 32px;
`;

export const TasksHeader = styled.View`
  margin-bottom: 20px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TasksHeaderGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CreatedTasksTitle = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.colors.blue.light};
    font-family: ${theme.fonts.primary[700]};
  `}
`;

export const TasksHeaderBadge = styled.View`
  padding: 2px 8px;
  background-color: ${({ theme }) => theme.colors.gray[400]};
  margin-left: 8px;
  border-radius: 999px;
`;

export const TasksHeaderAmount = styled.Text`
  font-size: 12px;

  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
    font-family: ${theme.fonts.primary[700]};
  `}
`;

export const CompletedTasksTitle = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.colors.purple.light};
    font-family: ${theme.fonts.primary[700]};
  `}
`;

export const NoTasks = styled.View`
  padding: 48px 20px;
  align-items: center;
  border-style: solid;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.gray[400]};
`;

export const NoTasksTitle = styled.Text`
  margin-top: 16px;
  font-size: 14px;
  line-height: 19.6px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary[700]};
    color: ${theme.colors.gray[300]};
  `}
`;

export const NoTasksSubTitle = styled.Text`
  font-size: 14px;
  line-height: 19.6px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary[400]};
    color: ${theme.colors.gray[300]};
  `}
`;
