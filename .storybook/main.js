const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  features: {
    storyStoreV7: true,
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(png|svg|gif|jpe?g|mp3|ttf|eot|woff|woff2|webm|mp4|wasm)$/,
      type: 'asset/resource',
    });

    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              config: path.resolve(__dirname, '..', '.postcssrc'),
            },
          },
        },
      ],
    });

    return config;
  },
};
