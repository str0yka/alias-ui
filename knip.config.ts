import { KnipConfig } from 'knip';

const config: KnipConfig = {
  project: ['src/**/*.{js,jsx,ts,tsx}'],
  ignore: ['src/components/index.ts'],
  ignoreDependencies: [
    'tailwindcss',
    '@antfu/eslint-config',
    '@eslint-react/eslint-plugin',
    '@storybook/blocks',
    'eslint-plugin-react',
    'globals',
    'typescript-eslint'
  ]
};

export default config;
