module.exports = {
  devServer: {
    disableHostCheck: true, // 关闭host检查
    headers: {
      "Access-Control-Allow-Origin": "*", // 防止加载时跨域
    },
  },
  configureWebpack: {
    output: {
      library: "qiankunVue",
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
    },
  },
};
