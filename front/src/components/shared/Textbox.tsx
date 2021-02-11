import React from "react";
import {
  TextboxTag,
  TextboxTitle,
} from "../../style/components/shared/Textbox.style";

const Textbox = (props: any) => {
  const { title, type, placeHolder, action, boxWidth, isWhite } = props;
  return (
    <>
      <TextboxTitle isWhite={isWhite}>{title}</TextboxTitle>
      <TextboxTag
        type={type}
        onInput={action}
        boxWidth={boxWidth}
        placeholder={placeHolder}
      />
    </>
  );
};

export default Textbox;
