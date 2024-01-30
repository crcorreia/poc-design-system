/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  /*refs: {
    'design-system': {
      title: 'My design system',
      //👇 The url provided by Chromatic when it was deployed
      url: 'https://www.chromatic.com/library?appId=65b7dbec56834291ff65d904&branch=main',
    },
  },*/
};
export default config;
