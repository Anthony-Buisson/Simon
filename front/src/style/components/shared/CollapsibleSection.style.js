import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid black;
`;

export const Title = styled.h2`
    color: black;
    text-decoration: underline;
    margin: 0;
    background-color: ${props => props.active ? 'lightblue' : 'transparent'};
`;
