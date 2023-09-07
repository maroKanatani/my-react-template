/** @typedef {import('eslint').ESLint.ConfigData} ConfigData */

/** @type {ConfigData} */
const config = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "!.storybook"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "simple-import-sort", "import"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/newline-after-import": "error",
    "import/no-default-export": "error",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports" },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
  },
  overrides: [
    {
      files: [
        // ディレクトリ直下は設定ファイルが多いので許容する
        "!src/**",
        // Storybookも default export が必要なので許容する
        "**/*.stories.{tsx,ts}",
      ],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
};

module.exports = config;
