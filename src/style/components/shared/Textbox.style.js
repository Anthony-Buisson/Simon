import styled from "styled-components";
import { font } from "../variable/common.style";
import { color } from "../variable/color.style";

export const TextboxTag = styled.input`
    background-color: ${color.grey1};
    min-width: 100px;
    width: ${props => props.boxWidth + 'px'};
    padding: 15px 15px 15px 18px;
    outline:none;
    border-radius: 5px;
    border: 0;
    box-shadow: inset 0px 1px 1px rgba(71, 77, 107, 0.15), inset 0px -1px 0px #FFFFFF;
    margin:10px;
`;

export const TextboxTitle = styled.span`
${console.log(props => props.isWhite)}
    color: ${props => props.isWhite ? color.white : color.darkGrey1};
    font-family: ${font};
`;
