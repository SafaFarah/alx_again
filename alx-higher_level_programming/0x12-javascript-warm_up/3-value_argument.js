#!/bin/bash/node
const process = require('process');
const args = process.argv;
if (args[1] === undefined) {
        console.log('No argument;);
} else {
        console.log(args[1])
}
