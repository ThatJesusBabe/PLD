#!/usr/bin/node
const str = process.argv[2];
if (typeof (str) === 'string') {
  const num = parseInt(str);
  if (num) {
    console.log('My number: ' + num);
  } else {
    console.log('Not a number');
  }
} else {
  console.log('My number: ' + str);
}
