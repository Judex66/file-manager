import readline from 'readline';
//import { remove } from './src/commands/files/delete.js';
import { list } from './src/commands/files/list.js';
import { read } from './src/commands/files/read.js';
import { setWaytoFile, wayToFile } from './src/commands/fileWay/waytoFile.js';
import { upDir } from './src/commands/fileWay/upDir.js';
import { wayToDir } from './src/commands/fileWay/enterDir.js';
import { renameFile } from './src/commands/files/rename.js';
import { create } from './src/commands/files/create.js';
import { copy } from './src/commands/files/copy.js';
import { move } from './src/commands/files/move.js';
import { remove } from './src/commands/files/delete.js';
import {calculateHash} from './src/commands/hash/hash.js';
import {compress} from './src/commands/zip/compress.js';
import {decompress} from './src/commands/zip/decompress.js';
const control = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
list()
control.on('line', async (line) => {
    const command = line.trim().split(' ')[0];
    switch (command) {
        case 'up':
            let wayToUpDir = await upDir();
            setWaytoFile(wayToUpDir);
            console.log(`\nYou are currently in ${wayToFile}\n`);
            list()
            break;
        case 'cd':
            let wayDir = await wayToDir(line);
            if (wayDir) {
                setWaytoFile(wayDir);
                console.log(`\nYou are currently in ${wayToFile}\n`);
                list()
            }
            break;
        case 'ls':
            await list();
            break;
        case 'cat':
            await read(line);
            break;
            case 'rm':
                await remove(line);
                break;
        case 'rn':
            await renameFile(line);
            break;
        case 'add':
            await create(line);
            break;
        case 'cp':
            await copy(line);
            break;
            case 'mv':
                await move(line);
                break;
        case 'hash':
            await calculateHash(line);
            break;
        case 'comp':
            await compress(line);
            break;
        case 'dec':
            await decompress(line);
            break;
        default:
            console.log('Invalid input');
            break;
    }
});