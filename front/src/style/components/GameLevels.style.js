import styled from "styled-components";

export const Dot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: ${props => props.active ? 'blue' : 'transparent'};
  border: 1px solid darkBlue;
`;

export const Container = styled.div`
    width: ${props => props.size}px;
    display: flex;
    justify-content: space-around;
    margin: 20px;
`;
