import nkzw from '@nkzw/eslint-config';

export default [
  ...nkzw,
  {
    ignores: ['dist/', 'vite.config.ts.timestamp-*'],
  },
];
