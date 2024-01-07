/* eslint-disable */
import { strict as assert } from "assert";
const myName = "Brandon";
const amount = 2 + 2;
const hello = `Hello ${myName}`;
const powerLevel = 9000n + 1n;
const yes = true;

function sum(lhs: number, rhs: number): number {
  return lhs + rhs;
}

const one = sum(1, 0);
console.log(one);

const two = sum(1, 1);
console.log(two);
