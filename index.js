const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function ls() {
    const { stdout, stderr } = await exec('npm test');
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
}

var cron = require('node-cron');
ls();
cron.schedule('*/5 * * * *', () => {
    console.log('running a task every 5 minutes');
    ls();
});