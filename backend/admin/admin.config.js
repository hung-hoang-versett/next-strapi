module.exports = {
  webpack: (config, webpack) => {
    // Add your variable using the DefinePlugin
    config.plugins.push(
      new webpack.DefinePlugin({
        //All your custom ENVs that you want to use in frontend
        CUSTOM_VARIABLES: {
          SUBMITTABLE_API_KEY: JSON.stringify(process.env.SUBMITTABLE_API_KEY),
          SUBMITTABLE_API_URL: JSON.stringify(process.env.SUBMITTABLE_API_URL),
        },
      })
    );
    // Important: return the modified config
    return config;
  },
};
