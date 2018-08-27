interface Logger {
    log: (...args: string[]) => void;
}
// the only exception for the console.*
// tslint:disable-next-line:no-console
export default { log: console.log } as Logger;
