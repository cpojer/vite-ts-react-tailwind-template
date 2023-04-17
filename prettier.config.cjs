module.exports = {
  importOrderSortSpecifiers: true,
  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  singleQuote: true,
  trailingComma: 'all',
};
