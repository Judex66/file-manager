import * as path from 'path';
import {access, rm} from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';
import {wayToFile} from '../fileWay/waytoFile.js';
import {list} from './list.js'
export const move = async (data) => {
    const commandCopy =  data.trim().replace('mv ', '');
    const [ fileCopy, newDir ] = commandCopy.split(' ');

    try {
        let wayofFile = path.isAbsolute(fileCopy) ? fileCopy : path.join(wayToFile, `${fileCopy}`);

        let fileName = path.basename(wayofFile);

        let wayToCopy = path.isAbsolute(newDir) ? path.join(`${newDir}`, `${fileName}`) : path.join(wayToFile, `${newDir}`, `${fileName}`);

        await access(wayofFile);

        let readStream = createReadStream(wayofFile);
        let writeStream = createWriteStream(wayToCopy);

        readStream.pipe(writeStream);
        await rm(wayofFile);
        console.log(`You are in ${wayToFile}`);
        list()
   }
   catch(err){
   // console.log(err)
    console.log('Operation failed');
   }
};