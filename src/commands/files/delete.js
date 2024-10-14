import {rm} from 'fs/promises';
import * as path from 'path';
import {wayToFile} from '../fileWay/waytoFile.js';
import {list} from './list.js'
export const remove = async (data) => {
    let removeFile = await data.trim().replace('rm ', '');
    let fileWay = path.isAbsolute(removeFile) ? removeFile : path.join(wayToFile, `${removeFile}`); 
    try{
        await rm(fileWay);

        console.log(`You are in ${wayToFile}`);
        list()
    }
    catch (err) {
        console.log('Operation failed');
        list()
    }
}

