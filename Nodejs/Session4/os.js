const os= require('os');

console.log('Architecture:',os.arch());
console.log('Free Memory:',os.freemem());
console.log('Total Memory:',os.totalmem());
console.log('HostName:',os.hostname());
console.log('Platform:',os.platform());
const cpus= os.cpus();
console.log(cpus[0].model,cpus[0].speed);
console.log(os.userInfo());