#!/usr/bin/node
const count = process.argv.length;
const str = process.argv[2];

if (count <= 2) {
  console.log('Missing size');
} else {
  if (typeof (str) === 'string') {
    const num = parseInt(str);
    if (!num) {
      console.log('Missing size');
    }
  }

  let i = 0;
  while (i < str) {
    let line = '';
    for (let j = 0; j < str; j++) {
      line += 'X';
    }
    console.log(line);
    i++;
  }
}
