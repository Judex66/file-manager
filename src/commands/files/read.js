import {readFile} from "fs/promises";
import * as path from 'path';
import {wayToFile} from '../fileWay/waytoFile.js';
export const read = async (data) => {
    const readfile = data.trim().replace('cat ', '');
    let wayReadFile = path.isAbsolute(readfile) ? readfile : path.join(wayToFile, `${readfile}`)
   try{     
    const readingContent = await readFile(wayReadFile, 'utf-8',import.meta.url);
    console.log(readingContent);}
   catch{console.log("FS operation failed");}
  
};
