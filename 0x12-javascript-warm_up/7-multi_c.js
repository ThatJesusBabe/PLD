#!/usr/bin/node
const x = process.argv[2];
const argsCount = process.argv.length;
if (argsCount <= 2) {
  console.log('Missing number of occurrences');
} else {
  if (typeof (x) === 'string') {
    const num = parseInt(x);
    if (!num) {
      console.log('Missing number of occurrences');
    }
  }
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
