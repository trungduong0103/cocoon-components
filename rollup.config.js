import path from "path";
import fs from "fs";
import { swc } from "rollup-plugin-swc3";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";
import postcss from "postcss";
import resolve from "@rollup/plugin-node-resolve";
import sass from "rollup-plugin-sass";
import postcssModules from "postcss-modules";
import replace from "@rollup/plugin-replace";
// import embedCSS from "rollup-plugin-embed-css";
import commonjs from "@rollup/plugin-commonjs";

const resolveApp = (relativePath) => path.resolve(__dirname, relativePath);
const appBase = resolveApp("src");

function getEntries() {
  const entries = {};
  const basePath = path.join(appBase);
  const componentsList = fs.readdirSync(basePath);

  componentsList.forEach((folder) => {
    const indexFile = path.join(basePath, `${folder}/index.js`);
    entries[`${folder}`] = indexFile;
  });

  return entries;
}

export default {
  input: getEntries(),
  output: {
    dir: "dist",
    entryFileNames: "[name].js",
    format: "es",
  },
  plugins: [
    resolve(),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: false,
    }),
    swc({
      include: /\.[jt]sx?$/,
      exclude: /node_modules/,
      jsc: {
        parser: {
          syntax: "ecmascript",
          jsx: true,
          preserveAllComments: false,
        },
        transform: null,
        target: "es2015",
        loose: false,
        externalHelpers: false,
      },
    }),

    sass({
      processor: (css) =>
        postcss([autoprefixer, postcssPresetEnv])
          .process(css, { from: undefined })
          .then((result) => {
            console.log(result);
            return `{${result.css}}`;
          }),
    }),
    // embedCSS(),
  ],
  external: [],
};
