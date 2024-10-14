import * as path from 'path';
import {createReadStream, createWriteStream} from 'fs'
import {pipeline} from 'stream/promises'
import {wayToFile} from '../fileWay/waytoFile.js';
import { list } from '../files/list.js';
import { createGunzip } from 'zlib';
export const decompress = async (data) => {
    let renameTheFile = await data.trim().replace('rm ', '');
    const oldName = renameTheFile.split(' ')[1];
    const newName= renameTheFile.split(' ')[2];
    console.log(oldName)
    console.log(newName)
   try{
    let oldWay = path.isAbsolute(oldName) ? oldName : path.join(wayToFile, `${oldName}`);
    let newWay = path.isAbsolute(newName) ? newName : path.join(wayToFile, `${newName}`);
    await pipeline(createReadStream(oldWay), createGunzip(),createWriteStream(newWay))
        console.log(`You are currently in ${wayToFile}`);
   }
   catch(err){
    console.log(err)
    console.log('Operation failed');
   }
   list()
};





