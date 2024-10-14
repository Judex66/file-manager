import os from 'os';


export const getOsUsername = () => {

    console.log('Username: ' +os.userInfo().username);

}
getOsUsername()