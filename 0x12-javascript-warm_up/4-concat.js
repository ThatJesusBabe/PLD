#!/usr/bin/node
const argsCount = process.argv.length;
if (argsCount <= 2) {
  console.log('undefined is undefined');
} else {
  console.log(process.argv[2] + ' is ' + process.argv[3]);
}
