import antfu from "@antfu/eslint-config";
import pluginReact from "eslint-plugin-react";

const eslint = (...[options = {}, ...configs]: Parameters<typeof antfu>) => {
  const settings = [...configs];

  if (options?.react) {
    settings.unshift({
      name: "alias/react",
      plugins: {
        "alias-react": pluginReact,
      },
      rules: {
        ...Object.entries(pluginReact.configs.recommended.rules).reduce(
          (acc, [key, value]) => {
            acc[key.replace("react", "alias-react")] = value;
            return acc;
          },
          {}
        ),
        "alias-react/function-component-definition": [
          "error",
          {
            namedComponents: ["arrow-function"],
            unnamedComponents: "arrow-function",
          },
        ],
        "alias-react/prop-types": "off",
        "alias-react/react-in-jsx-scope": "off",
      },
      settings: {
        react: {
          version: "detect",
        },
      },
    });
  }

  return antfu(options, ...settings);
};

export default eslint({
  react: true,
  typescript: true,
  jsonc: false,
  stylistic: false,
  jsx: true,
});
