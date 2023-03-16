#!/usr/bin/node
const argsCount = process.argv.slice(2);
if (argsCount <= 2) {
  console.log('No argument');
} else {
  console.log(process.argv[2]);
}
