import {access,readdir} from 'fs/promises';
import {wayToFile} from '../fileWay/waytoFile.js';
export const list = async () => {
    try {
        await access(wayToFile); 
        let res = await readdir(wayToFile, { withFileTypes: true });
        const allres = res.map((item) => {
          return {
            Name: item.name,
            Type: item.isFile() ? 'file' : 'directory',
          };
        });
        console.table(allres);
        console.log(`You are in ${wayToFile}`);
        
    } catch (err) {
        console.log('Operation failed');
    }
};
