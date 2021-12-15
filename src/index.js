#! /usr/bin/env node

const { execSync } = require('child_process')
const path = require('path')
const chalk = require('chalk')

function main() {
    console.log(chalk.bold(`JS FOREACH-FOLDER - v${process.env.npm_package_version}`))
    let args = process.argv.splice(2)
    if (args.length < 1) {
        console.log('Usage: ', chalk.greenBright('forfo "<command>"'))
        console.log(chalk.red('Error: '), '<command> missing!')
    } else if (args.length > 1) {
        console.log('Usage: ', chalk.greenBright('forfo "<command>"'))
        console.log(chalk.red('Error:'), 'too much arguments!')
    } else {
        proceed(args[0])
    }
}

function proceed(command) {
    let containerFolder = process.cwd()
    console.log('')
    console.log('current folder: ')
    console.log(chalk.blueBright(containerFolder))
    let subfolders = getSubfolders(containerFolder)
    console.log('subfolders: ')
    for (let folder of subfolders.map(f => `'${f}'`)) {
        console.log(chalk.cyanBright(folder))
    }
    console.log('')
    for (let dirName of subfolders) {
        exec(containerFolder, dirName, command)
    }
}

function getSubfolders(folder) {
    process.chdir(folder)
    let subfoldersBuffer = execSync('ls -ap | grep "/$"')
    let subfolderArray = subfoldersBuffer.toString().split('\n')
    let subfolders = subfolderArray.slice(2, subfolderArray.length - 1)
    return subfolders
}

function exec(folder, dirName, command) {
    let dirPath = path.join(folder, dirName)
    console.log(chalk.cyanBright(dirPath))
    process.chdir(dirPath)
    try {
        let outputBuffer = execSync(command)
        var output = outputBuffer.toString()
        if (output.length > 1 && output[output.length - 1] === '\n')
            output = output.substr(0, output.length - 1)
        console.log(output)
        console.log(chalk.greenBright('done'))
    } catch (err) {
        console.log(chalk.red(err))
    }
    console.log('')
}

main()
