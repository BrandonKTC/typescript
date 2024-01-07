/* eslint-disable */
import { strict as assert } from "assert";

const answer = 2 + 2;
assert.equal(answer, 4);

if (answer > 4) {
  console.log("<4");
} else {
  console.log("!4");
}

if (answer > 4) {
  console.log("<4");
} else if (answer > 4) {
  console.log("!4");
} else {
  console.log("<4");
}

const hasTheskills = true;
const isTuesday = "tuesday";
const hoursWorked = 9;
const totalOvertime = 0.5;
const holidaySeason = false;

function approveWork() {
  if (!hasTheskills) return; // go home
  const canWorkOvertime = hasOvertimeHours(hoursWorked, totalOvertime);
  if (!canWorkOvertime) return; // go home
  if (isBusyDay(isTuesday, holidaySeason)) {
    // approve work
  } else {
    // go home
  }
}

function hasOvertimeHours(hoursWorked: number, totalOvertime: number): boolean {
  return hoursWorked > 8 && totalOvertime < 1;
}

function isBusyDay(day: string, holidaySeason: boolean): boolean {
  return day === "tuesday" || holidaySeason;
}
