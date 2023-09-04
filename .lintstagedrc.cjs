module.exports = {
  "**/*.{js,jsx,ts,tsx}": ["eslint src/ --fix"],
  "**/*": [`prettier "**/*" --write --ignore-unknown`],
};
