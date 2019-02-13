module.exports = {
  env: { browser: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    project: './tsconfig.json',
    tsconfigRootDir: './',
    extraFileExtensions: ['.vue'],
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@wordpress/eslint-plugin/recommended',
  ],
};
