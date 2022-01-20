import styled from "styled-components";

export const Container = styled.div<{ columns?: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: 30px;
`;