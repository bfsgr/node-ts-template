module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['prettier'],
      plugins: ['prettier'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'prettier/prettier': ['error'],
      },
    },
    {
      files: ['*.js', '*.cjs'],
      extends: ['prettier'],
      plugins: ['prettier'],
      rules: {
        'prettier/prettier': ['error'],
      },
    },
  ],
}
