require('dotenv').config();

const chalk = require('chalk');
const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASS,
  host: process.env.FTP_HOST,
  port: process.env.FTP_PORT,
  localRoot: __dirname + '/dist/',
  remoteRoot: '/',
  include: ['*', '**/*', '.htaccess'],
  exclude: ['**/*.map'],
  deleteRemote: false,
  forcePasv: true
};

ftpDeploy.deploy(config)
  .then(() => {
    if (process.env.SITE_URL) 
      console.log(`${chalk.black.bgGreen(' DONE ')} Deployment complete. Check website at ${chalk.cyan(process.env.SITE_URL)}`);
    else 
      console.log(`${chalk.black.bgGreen(' DONE ')} Deployment complete.`);
  })
  .catch(err => console.log(`${chalk.black.bgRed(' ERROR ')} ${chalk.red(err)}. Verify .env variables.`));

ftpDeploy.on('uploading', data => console.log(chalk.green(`Uploading ${data.filename} (${data.transferredFileCount + 1}/${data.totalFilesCount})`)));