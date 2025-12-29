module.exports = {
  name: 'reports',
  exposes: {
    './Module': './apps/reports/src/app/remote-entry/entry.module.ts',
  },
};
