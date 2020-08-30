module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ['google'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', { code: 100, tabWidth: 2 }],
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: false,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
  },
};
