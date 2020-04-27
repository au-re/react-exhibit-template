import typescriptPlugin from "rollup-plugin-typescript2";
import typescript from "typescript";
import { terser } from "rollup-plugin-terser";
import sourcemaps from "rollup-plugin-sourcemaps";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import pkg from "./package.json";

const snakeToCamel = (str) => str.replace(
  /([-_][a-z])/g,
  (group) => group.toUpperCase()
    .replace("-", "")
    .replace("_", ""),
);

export default {
  input: "src/index.ts",
  output: [
    // ready to use in node projects
    {
      file: pkg.main,
      format: "cjs",
    },
    // ready to use in frontend projects through npm
    {
      file: pkg.module,
      format: "es",
    },
    // minified and ready for use through a cdn
    {
      file: "./lib/index.min.js",
      format: "iife",
      name: snakeToCamel(pkg.name),
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  external: [
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    postcss({
      extract: "./lib/styles.min.css",
      minimize: true,
      sourceMap: true,
      use: ["sass"],
    }),
    peerDepsExternal(),
    sourcemaps(),
    typescriptPlugin({
      typescript,
    }),
  ],
};
