module.exports = {
  apps: [
    {
      name: 'iug-design-fo',
      port: '3002',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
