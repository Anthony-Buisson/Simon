import styled from "styled-components";
import { font } from "../components/variable/common.style";
import { color } from "../components/variable/color.style";

export const LoginContainer = styled.div`
    width: 35%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin:auto;
    padding: 20px;
    font-familly: ${font};
    background-color: ${color.white};
`;

export const ButtonList = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 300px;
`

export const ButtonListRegister = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: space-around;
`