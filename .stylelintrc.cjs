/** @typedef {import('stylelint').Config} ConfigData */

/** @type {ConfigData} */
const config = {
  extends: ["stylelint-config-standard-scss"],
  overrides: [
    {
      files: ["src/**/*.tsx", "src/**/*.ts"],
      customSyntax: "@stylelint/postcss-css-in-js",
    },
  ],
};

module.exports = config;
