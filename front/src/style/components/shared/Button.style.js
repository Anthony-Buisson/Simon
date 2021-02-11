import { font } from "../variable/common.style";
import { color } from "../variable/color.style";
import styled from "styled-components";

const variable = `
  padding: 10px 25px 10px 25px;
  border: 0px;
  border-radius: 5px;
  font-family: ${font};
  outline:none;
  height: 45px;
`;

export const PrimaryButton = styled.button`
  ${variable}
  cursor: pointer;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
  background-color: ${color.white};

  &:hover {
    background-color: ${color.grey1};
  }
  &:active {
    background-color: ${color.grey2};
  }
`;

export const SecondaryButton = styled.button`
  ${variable}
  cursor: pointer;
  padding: 0;
  position: relative;
  background-color: transparent;
  border: 0;

  position: relative;
  text-decoration: none;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${color.grey5};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

export const SearchButton = styled.button`
  ${variable}
  cursor: pointer;
  display: flex;
  margin: 0 auto;
  margin-bottom: 30px;
  border-radius: 15px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
  background-color: ${color.white};

  &:hover {
    background-color: ${color.grey3};
  }
  &:active {
    background-color: ${color.grey2};
  }
`;

export const DisableButton = styled.button`
  ${variable}
  background-color: ${color.grey1};
  color: ${color.grey1};
  cursor: not-allowed;
  background-color: ${color.grey3};
`;
