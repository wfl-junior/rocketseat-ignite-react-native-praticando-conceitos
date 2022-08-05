import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[600]};
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
`;
