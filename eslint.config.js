module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['svelte'],
  extends: ['eslint:recommended', 'plugin:svelte/recommended'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    // Add your custom rules here
  },
};
