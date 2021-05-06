#!/usr/bin/env node

const os = require('os');
const path = require('path');
const chalk = require('chalk');
const {spawn} = require("child_process");

const OS_BIN_MAP = {
    "darwin": path.resolve(__dirname, 'engine/x86_64-osx/skat'),
};

function printCoolBanner() {
    console.log(chalk.rgb(216, 71, 151)(`
      /$$$$$$  /$$   /$$  /$$$$$$  /$$$$$$$$                 /$$ /$$    
     /$$__  $$| $$  /$$/ /$$__  $$|__  $$__/                | $$|__/    
    | $$  \\__/| $$ /$$/ | $$  \\ $$   | $$           /$$$$$$$| $$ /$$    
    |  $$$$$$ | $$$$$/  | $$$$$$$$   | $$          /$$_____/| $$| $$    
     \\____  $$| $$  $$  | $$__  $$   | $$         | $$      | $$| $$    
     /$$  \\ $$| $$\\  $$ | $$  | $$   | $$         | $$      | $$| $$    
    |  $$$$$$/| $$ \\  $$| $$  | $$   | $$         |  $$$$$$$| $$| $$    
     \\______/ |__/  \\__/|__/  |__/   |__/          \\_______/|__/|__/    

`));
    return Promise.resolve();
}

function getBin() {
    const platform = os.platform();
    const bin = OS_BIN_MAP[platform];
    return !bin ? Promise.reject(Error(`OS ${platform} is not supported yet!`)) : Promise.resolve(bin)
}

function run(bin) {
    const args = process.argv.slice(2);
    return new Promise((res, rej) => {
        spawn(bin, args, {stdio: 'inherit'})
            .on('error', e => rej(e))
            .on('exit', () => res());
    });
}

(function main() {
    printCoolBanner()
        .then(getBin)
        .then(run)
        .catch(console.error.bind(console));
})()
