import React from "react";
import * as S from "./style.ts";

const Button = ({ active, text }) => {
  return (
    <S.Button type="submit" active={active}>
      {text}
    </S.Button>
  );
};

export default Button;
