import { styled } from "styled-components";

interface ButtonProps {
  active: boolean;
}

export const Button = styled.button<ButtonProps>`
  margin-top: 30px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: ${(props) => (props.active ? "linear-gradient(0.25turn,#FF5479, #FF693E);" : "#242742")};
  cursor: ${(props) => (props.active ? "pointer" : "default")};
  color: white;
  font-family: "Roboto-Regular";
  ${(props) => !props.active && "pointer-events: none"}
  box-shadow: 0px 8px 16px ${(props) => (props.active ? "rgba(255, 84, 121, 0.5)" : "rgba(36, 39, 66, 0.5)")};
`;
