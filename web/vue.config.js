const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
const path = require("path");
module.exports = {
  chainWebpack: (config) => {
    // Add file-loader for .xlsx files
    config.module
      .rule("xlsx")
      .test(/\.xlsx$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/[name].[hash:8].[ext]",
        outputPath: "assets",
      })
      .end();
  },
};
