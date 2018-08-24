import { injectGlobal } from "styled-components";

import { media } from "./shared";

/*
  use the component based API for global styling when it is done
  https://github.com/styled-components/styled-components/issues/1333
 */

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,600,700');

  html,
  body,
  #root {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: sans-serif;
    font-size: 20px;
    line-height: 1.5rem;

    ${media.xxl`
      font-size: 18px;
    `}

    ${media.xl`
      font-size: 16px;
    `}

    ${media.xs`
      font-size: 14px;
    `}
  }
`;
