import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 36px;
  font-family: ${({ theme }) => theme.fonts.primary[700]};
`;
