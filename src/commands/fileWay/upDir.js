import * as path from 'path';
import { wayToFile, startFile } from './waytoFile.js';

export const upDir = async () => {
    if (wayToFile == startFile) {
        return wayToFile;
    } else {
        const wayUpDir = path.dirname(wayToFile);
        return wayUpDir;
    }
};
