import { styled } from "styled-components";

interface ButtonProps {
  active: boolean;
}

export const Button = styled.button<ButtonProps>`
  margin-top: 30px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: ${(props) => (props.active ? "#ff6257" : "#242742")};
  cursor: ${(props) => (props.active ? "pointer" : "default")};
  color: white;
  font-family: "Roboto-Regular";
  ${(props) => !props.active && "pointer-events: none"}
`;
