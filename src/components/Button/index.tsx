import React from "react";
import * as S from "./style.ts";

const Button = ({ active }) => {
  return (
    <S.Button type="submit" active={active}>
      Subscribe to monthly newsletter
    </S.Button>
  );
};

export default Button;
