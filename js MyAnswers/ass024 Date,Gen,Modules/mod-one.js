import { a, b, c } from "./mod-Two.js";

export default function (x, y, z) {
   return x + y + z;
}

export { a as numOne, b as numTwo, c as numThree }