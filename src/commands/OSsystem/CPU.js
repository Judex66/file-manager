import os from 'os';

export const getOsCPUS = () => {
    console.table(os.cpus());
}
getOsCPUS()