#!/usr/bin/node
const callMeMoby = require('./101-call_me_moby').callMeMoby;
callMeMoby(3, function () {
  console.log('C is fun');
});

console.log('\n');
callMeMoby(5, function () {
  console.log('Where I am!');
});

console.log('\n');
callMeMoby(1, function () {
  console.log('Where I am!');
});

console.log('\n');
callMeMoby(-5, function () {
  console.log('Where I am!');
});
