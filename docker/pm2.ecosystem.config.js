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
      name: 'microfrontend-shell',
      cwd: '/app/apps/microfrontend',
      script: 'npm',
      args: 'run serve:shell',
      env: {
        PORT: 4200,
      },
    },
    {
      name: 'microfrontend-dashboard',
      cwd: '/app/apps/microfrontend',
      script: 'npm',
      args: 'run serve:dashboard',
      env: {
        PORT: 4201,
      },
    },
    {
      name: 'microfrontend-reports',
      cwd: '/app/apps/microfrontend',
      script: 'npm',
      args: 'run serve:reports',
      env: {
        PORT: 4202,
      },
    },
  ],
};
