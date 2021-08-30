import test from "ava";
import cliSpinners from ".";

console.log("Spinner count:", Object.keys(cliSpinners).length);

test("main", (t) => {
  console.log("test starts");
  t.is(typeof cliSpinners, "object");
  t.is(cliSpinners.dots.interval, 80);
  t.true(Array.isArray(cliSpinners.dots.frames));
});
