import {writeFile} from "fs/promises";
import {wayToFile} from '../fileWay/waytoFile.js';
import {list} from './list.js'
export const create = async (data) => {
    let createFile = await data.trim().replace('add ', '');
    try{
        await writeFile(`${wayToFile}/${createFile}`,import.meta.url);
        console.log(`You are in ${wayToFile}`);
        list()
    }
    catch(err){
// console.log(err)
console.log('Operation failed');
list()
    }
};