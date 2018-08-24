import styled from "styled-components";

const Button = styled.button`
  text-align: center;
  line-height: 2.5rem;
  font-size: 1rem;
  font-family: sans-serif;
  font-weight: 700;
  padding: 0 12px;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  color: white;
  background: palevioletred;

  :hover {
    background: blueviolet;
  }
`;

export default Button;
