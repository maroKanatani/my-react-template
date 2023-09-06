module.exports = {
  "**/*.{ts,tsx}": ["npm run lint:es"],
  "src/**/*.{css,scss}": ["npm run lint:style"],
  "**/*": [`prettier "**/*" --write --ignore-unknown`],
};
