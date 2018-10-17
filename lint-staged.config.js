module.exports = {
  linters: {
    '*.js': ['npm run prettier --', 'git add'],
    '.emdaer/**/*.md': ['npm run documentation --', 'git add *.md'],
  },
};
