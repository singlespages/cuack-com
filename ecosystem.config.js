module.exports = {
  apps: [
    {
      name: 'cuack-com',
      script: 'server.ts',
      watch: false,
      // Delay between restart
      watch_delay: 1000,
      ignore_watch: ['node_modules', './server/db'],
      env: {
        PORT: 4000,
        NODE_ENV: 'production',
      },
    },
  ],
};
