import {access,stat} from 'fs/promises';
import * as path from 'path';
import {wayToFile} from './waytoFile.js';
export const wayToDir = async (data) => {
    const newWay = data.trim().replace('cd ', '');
    let dirWay = path.isAbsolute(newWay) ? newWay : path.join(wayToFile, `${newWay}`)
    try {
        const stats = await stat(dirWay);
        if (stats.isFile()) {
            throw err;
        }
        await access(dirWay);
        return dirWay;
    } catch (err) {
        console.log('Operation failed');
    }
};
