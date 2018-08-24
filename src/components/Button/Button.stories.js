import { storiesOf } from "@storybook/react";
import React, { Fragment } from "react";
import { withDocs } from "storybook-readme";

import Button from "./Button";
import readme from "./README.md";

storiesOf("Button", module)
  .addDecorator(withDocs(readme))
  .add("without a Theme", () =>
    <Fragment>
      <Button>default</Button>
      <Button nature="primary">primary</Button>
      <Button nature="danger">danger</Button>
      <Button ghost>ghost</Button>
      <Button loading>loading</Button>
      <Button disabled>disabled</Button>
      <Button loading disabled>loading disabled</Button>
    </Fragment>);
