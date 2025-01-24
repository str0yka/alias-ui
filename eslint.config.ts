import antfu, {
  OptionsConfig,
  TypedFlatConfigItem,
} from "@antfu/eslint-config";
import pluginReact from "eslint-plugin-react";

const eslint = () => {
  const settings: OptionsConfig & Omit<TypedFlatConfigItem, "files">[] = [];

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
      "alias-react/display-name": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  });

  return antfu(
    {
      ...settings,
      react: true,
      typescript: true,
      jsonc: false,
      stylistic: false,
      jsx: true,
    },
    {
      name: "alias/rewrite",
      rules: {
        "antfu/top-level-function": "off",
        "antfu/if-newline": "off",
        "antfu/curly": "off",
        "arrow-body-style": "warn",
        "perfectionist/sort-imports": "off",
        "jsonc/sort-keys": "off",
        "unused-imports/no-unused-imports": "error",

        "react-hooks/exhaustive-deps": "warn",

        "test/prefer-lowercase-title": "off",
        "node/prefer-global/process": "off",
        "perfectionist/sort-named-imports": "off",

        "no-console": "warn",
      },
    },
    ...settings
  );
};
