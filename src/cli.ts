#!/usr/bin/env node
import commander = require("commander");
import { translate } from "./main";

const program = new commander.Command();

program
    .version('0.0.1')
    .name('fy')
    .usage('<English>')
    .arguments('<english>')
    .action(function (english) {
        translate(english)
    });


program.parse(process.argv);