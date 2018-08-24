import { storiesOf } from "@storybook/react";
import React, { Fragment } from "react";
import { withDocs } from "storybook-readme";

import Button from "./Button";
import readme from "./README.md";

storiesOf("Button", module)
  .addDecorator(withDocs(readme))
  .add("a simple button", () =>
    <Fragment>
      <Button>default</Button>
    </Fragment>);
