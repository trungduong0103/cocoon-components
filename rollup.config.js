import path from "path";
import fs from "fs";
import { swc } from "rollup-plugin-swc3";

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
    swc({
      // All options are optional
      include: /\.[jt]sx?$/, // default
      exclude: /node_modules/, // default
      jsc: {},
    }),
  ],
};
