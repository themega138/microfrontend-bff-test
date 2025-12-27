module.exports = {
  apps: [
    {
      name: 'bff',
      cwd: '/app/apps/bff',
      script: 'node',
      args: 'dist/main.js',
      env: {
        PORT: 3000,
        MONGO_URL: process.env.MONGO_URL || 'mongodb://mongo:27017/bff',
      },
    },
    {
      name: 'microfrontend',
      cwd: '/app/apps/microfrontend',
      script: 'npm',
      args: 'run start',
      env: {
        PORT: 4200,
      },
    },
  ],
};
