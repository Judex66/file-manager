import os from 'os';
import { EOL } from 'os';
import { homedir } from 'os';
const osComands = (data) => {
    const osrep = data.replace('os ', '').trim();

    switch(osrep) {
        case '--EOL':
            console.log('EOL: ' + JSON.stringify(EOL));
            break;
        case '--cpus':
            console.table(os.cpus());
            break;
        case '--homedir':
            console.log('Home directory: ' + homedir);
            break;
        case '--username':
            console.log('Username: ' +os.userInfo().username);
            break;
        case '--architecture':
            console.log('Architecture: ' + os.arch());
            break;
        default:
            console.log('Operation failed');
            break;
            
    }
};


