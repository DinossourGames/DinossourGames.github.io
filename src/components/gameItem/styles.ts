import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  aspect-ratio: 1;
  width: 160px;
  overflow: hidden;
  border-radius: 6px;
  background-color: #212121;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const Title = styled.p`
  color: white;
  text-align: center;
  width: 100%;
`;

export const ImageContainer = styled.div<{ img: string }>`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;  
  background-image: url(${props => props.img});
  background-size: cover;

  :hover {
    opacity: 0.4;
    cursor: pointer;
  }
`;
