import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";

import Button from "./Button";

describe("Button", () => {

  it("renders without props", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
