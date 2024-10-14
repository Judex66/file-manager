import os from 'os';


export const getOsArchitecture = () => {

    console.log('Architecture: ' + os.arch());

}
getOsArchitecture()