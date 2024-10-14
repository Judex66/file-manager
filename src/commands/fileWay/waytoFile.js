
export const startFile = () => {
    return process.env.HOME || process.env.USERPROFILE;
}
export let wayToFile = startFile();

export let setWaytoFile = (path) => {
    wayToFile = path;
}
