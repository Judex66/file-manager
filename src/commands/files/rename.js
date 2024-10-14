import {rename} from 'fs/promises';
import * as path from 'path';
import {wayToFile} from '../fileWay/waytoFile.js';
import {list} from './list.js'
export const renameFile = async (data) => {
    let renameTheFile = await data.trim().replace('rn ', '');
    const [ oldName, newName ] = renameTheFile.split(' ');
   try{
    let oldWay = path.isAbsolute(oldName) ? oldName : path.join(wayToFile, `${oldName}`);
    let newWay = path.isAbsolute(newName) ? newName : path.join(wayToFile, `${newName}`);

        await rename(oldWay, newWay);

        console.log(`You are currently in ${wayToFile}`);
        list()
   }
   catch(err){
    // console.log(err)
    console.log('Operation failed');
    list()
   }
};