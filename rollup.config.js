import path from "path";
import fs from "fs";
import resolve from "@rollup/plugin-node-resolve";
import commonJs from "@rollup/plugin-commonjs";
import { swc } from "rollup-plugin-swc3";

const resolveApp = (relativePath) => path.resolve(__dirname, relativePath);
const appBase = resolveApp("src");
const APP_BASE_PATH_NODE_MODULES = resolveApp("../../node_modules");

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
    commonJs(),
    resolve({
      moduleDirectories: ["node_modules", APP_BASE_PATH_NODE_MODULES],
      extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
    }),
    swc({
      include: /\.[jt]sx?$/, // default
      exclude: /node_modules/, // default
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
        // Requires v1.2.50 or upper and requires target to be es2016 or upper.
        keepClassNames: false,
      },
    }),
  ],
};
