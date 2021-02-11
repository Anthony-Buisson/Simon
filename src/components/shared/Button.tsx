/*
- text
- action
- buttonStyle (primary, secondary, ...)
 */

import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
  DisableButton,
  SearchButton
} from "../../style/components/shared/Button.style";

interface Props {
  text: string;
  action?: any;
  buttonStyle?: 'primary' | 'secondary' | 'search' | 'disable';
  disabled?: 'disabled' | '';
}
const Button = (props: Props) => {
  const { text, action, buttonStyle, disabled } = props;

  let ButtonTag;
  switch (buttonStyle) {
    case "primary":
      ButtonTag = PrimaryButton;
      break;
    case "secondary":
      ButtonTag = SecondaryButton;
      break;
    case "search":
      ButtonTag = SearchButton;
      break;
    case "disable":
      ButtonTag = DisableButton;
      break;
    default:
      ButtonTag = PrimaryButton;
      break;
  }

  return <ButtonTag disabled={disabled ?? ''} onClick={action}>{text}</ButtonTag>;
};

export default Button;
