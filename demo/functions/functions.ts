/* eslint-disable */
import { strict as assert } from "assert";

function sayHello() {
  console.log("hello");
}

sayHello();

function sum(lhs, rhs) {
  return lhs + rhs;
}

const answer = sum(2, 2);
console.log(answer);

const answer2 = sum(answer, 2);
assert.equal(answer2, 6);

const answer3 = sum(sum(1, 1), sum(2, 2));
assert.equal(answer3, 6);
