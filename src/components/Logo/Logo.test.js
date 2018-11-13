import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";

import Logo from "./Logo";

describe("Logo", () => {

  it("renders without props", () => {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
