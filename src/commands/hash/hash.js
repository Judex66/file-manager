import {readFile} from 'fs/promises'
import {createHash} from 'crypto'
import * as path from 'path';
import {wayToFile} from '../fileWay/waytoFile.js';
export const calculateHash = async (data) => {
    let hashfile = await data.trim().replace('hash ', '');
    let fileWay = path.isAbsolute(hashfile) ? hashfile : path.join(wayToFile, `${hashfile}`); 
    try{
        const content =await readFile(`${fileWay}`,'utf-8',import.meta.url)
        const data = createHash('sha256').update(content)
        console.log(`Files hash ${data.digest('hex')}`)
        console.log(`You are in ${wayToFile}`);
    }
    catch (err) {
        console.log('Operation failed');
    }
}