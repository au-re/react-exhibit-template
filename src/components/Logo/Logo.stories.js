import { storiesOf } from "@storybook/react";
import React from "react";
import { withDocs } from "storybook-readme";

import Logo from "./Logo";

import readme from "./README.md";

storiesOf("Logo", module)
  .addDecorator(withDocs(readme))
  .add("project logo", () => <Logo />);
