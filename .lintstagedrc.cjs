module.exports = {
  "**/*.{ts,tsx}": ["npm run lint:es"],
  "**/*": [`prettier "**/*" --write --ignore-unknown`],
};
