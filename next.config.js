require('dotenv').config();
const withImages = require('next-images');
const webpack = require('webpack');

module.exports = withImages({
  webpack: (config) => {
    const env = {WEATHER_API_KEY: JSON.stringify(process.env.WEATHER_API_KEY)};
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  }
})