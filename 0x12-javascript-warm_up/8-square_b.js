#!/usr/bin/node

let value = process.argv[2];
if (isNaN(size) || size <= 0) {
  console.log('Missing size');
} else {
  value = 'X'.repeat(size);
  let i
