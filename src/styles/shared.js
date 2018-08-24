import { css } from "styled-components";

/**
 * z-index levels
 */
export const zindex = {
  menu: 10,
};

/**
 * application breakpoints
 */
export const breakpoints = {
  xs: 320,
  sm: 480,
  md: 980,
  lg: 1280,
  xl: 1680,
  xxl: 1920,
};

/**
 * media query strings for the breakpoints.
 *
 * Example Usage
 * ---
 * import styled from "styled-components";
 * import { media } from "../../styles";
 * const MyComponent = styled.div`
 *   ${media.lg`
 *     background: red;
 *   `}
 * `;
 */
export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => (css`
    @media (max-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `);

  return acc;
}, {});

// shared styles should be added here --
