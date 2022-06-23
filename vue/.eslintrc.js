module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  rules: {
    "no-multi-spaces": ["error"],
    "vue/no-multiple-template-root": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-unused-vars": "off",
  },
};
