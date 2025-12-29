module.exports = {
  name: 'shell',
  remotes: [
    ['dashboard', 'http://localhost:4201/remoteEntry.js'],
    ['reports', 'http://localhost:4202/remoteEntry.js'],
  ],
};
