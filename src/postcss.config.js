module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue() {
        return 75;
      },
      propList: ['*'],
    },
  },
};
