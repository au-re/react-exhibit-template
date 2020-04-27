import styled from 'styled-components';
import React from 'react';

/** A simple Button using styled components */
const Button = styled.button `
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

const Logo = (props) => (React.createElement("div", { className: "Exhibit__Logo__Box Box--Outer" },
    React.createElement("div", { className: "Exhibit__Logo__Box Box--Inner" }),
    React.createElement("div", { className: "Exhibit__Logo__Circle Circle--Top" })));

export { Button, Logo };
