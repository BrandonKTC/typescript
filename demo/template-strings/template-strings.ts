/* eslint-disable */
import { strict as assert } from "assert";

const greet = (msg) => {
  console.log(`Hello ${msg}`);
};

greet("Typescript");

const kids = 2;
const adults = 4;
const totalAttending = kids + adults;
const message = `There are ${totalAttending} ${
  totalAttending > 2 ? "peoples" : "people"
}`;

console.log(`${message} to seat at the restaurant.`);
