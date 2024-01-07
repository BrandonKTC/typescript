/* eslint-disable */
import { strict as assert } from "assert";

let someNumber = parseInt("10");
const sample: string = "sample";
const someString = `${sample}`;

switch (someString) {
  case "test":
    // A
    break;
  case "sample":
    // B
    break;
  case "c":
    // C
    break;
  default:
    break;
}
