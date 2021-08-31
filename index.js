const spinners = require("./spinners.json");
import spinners from "./spinners";

module.exports = () => {
  console.log("here");
  const randomIndex = Math.floor(Math.random() * Object.keys(spinners).length);
  const spinner = Object.keys(spinners)[randomIndex];
  console.log("spinner", spinners[spinner]);
  return spinners[spinner];
};
