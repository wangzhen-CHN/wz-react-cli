module.exports = {
  apps: [
    {
      name: 'match',
      script: './index.js',
      args: 'start',
      cwd: `${__dirname}`,
      instances: 2,
      instance_var: 'INSTANCE_ID',
      exec_mode: 'cluster',
      error_file: '../../weblogs/pms.pangmao.match.ui/pm2/error/error.log',
      out_file: '../../weblogs/pms.pangmao.match.ui/pm2/out/out.log',
      pid_file: '../../weblogs/pms.pangmao.match.ui/pm2/pid/pm2.pid',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      wait_ready: true,
      listen_timeout: 5000,
      max_memory_restart: '1024M',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
