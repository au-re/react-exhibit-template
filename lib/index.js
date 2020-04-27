'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = _interopDefault(require('styled-components'));
var React = _interopDefault(require('react'));

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

exports.Button = Button;
exports.Logo = Logo;
