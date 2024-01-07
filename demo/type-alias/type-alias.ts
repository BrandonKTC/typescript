/* eslint-disable */
import { strict as assert } from "assert";

type PersonName = string;

const myName: PersonName = "Brandon";
const alsoMyName: PersonName = "Brandon";

function print(thing: string) {
  console.log(`My name is ${thing}`);
}
print("a house");

function printName(name: PersonName) {
  console.log(`Name is ${name}`);
}
printName("Brandon");
