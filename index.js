#!/usr/bin/env node
const cmd = require('commander');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const ProgressBar = require('progress');

// package.json
const pkg = require(path.resolve(__dirname, './package.json'));

cmd.version(pkg.version, '-v, --version');

// .option方法 如果有 <name> 则获取参数，否则为布尔值
cmd.command('init <tempName>')
    .description('生成webpack模板，tempName为生成后的目录名')
    .action((tempName, cmd) => {
        const templatePath = path.resolve(__dirname, './template');
        const curPath = process.cwd();
        canMkdir(`${curPath}/${tempName}`);
        const files = getFiles(templatePath, tempName);
        const len = files.length;
        const bar = new ProgressBar(
            chalk.blueBright('文件写入中: [:bar] :current/:total'),
            {
                total: len,
                incomplete: ' ',
                complete: '█',
                width: 20,
                renderThrottle: 0
            }
        );
        for (let i = 0; i < len; i++) {
            // 目标目录路径
            const targetPath = getTargetPath(files[i], tempName);
            const content = fs.readFileSync(files[i], { encoding: 'utf8' });

            fs.writeFileSync(targetPath, content);
            bar.tick();
        }

        if (bar.complete) {
            console.log(chalk.greenBright('done!'));
        }
    });

function getFiles(pathValue, tempName) {
    const res = [];
    const files = fs.readdirSync(pathValue);
    for (let i = 0, len = files.length; i < len; i++) {
        const fileName = files[i];
        const filePath = path.resolve(pathValue, fileName);
        const targetPath = getTargetPath(filePath, tempName);
        const isDir = fs.lstatSync(filePath).isDirectory();
        if (isDir) {
            canMkdir(targetPath);
            res.push(...getFiles(filePath, tempName));
        } else {
            // 操作文件
            res.push(filePath);
        }
    }
    return res;
}

function getTargetPath(filePath, tempName) {
    const curPath = process.cwd();
    return filePath.replace(
        path.resolve(__dirname, 'template'),
        path.resolve(curPath, tempName)
    );
}

function canMkdir(path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
}

cmd.command('*').action(function(env) {
    console.log('非法指令，请重试');
});

cmd.parse(process.argv);
if (!cmd.args.length) cmd.help();

// 当未传入参数的时候报错
if (!process.argv.slice(2).length) {
    program.outputHelp(make_red);
}
function make_red(txt) {
    return txt;
}
