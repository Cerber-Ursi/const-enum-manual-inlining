/// <reference path="enum.d.ts" />

import { val1, val2 } from "./import";

let valid = true;

if (val1 === 1) {
    console.log('First value is valid: ', Enum.Field1);
} else {
    console.log('First value is invalid: ', val1);
    valid = false;
}
if (val2 === "2") {
    console.log('Second value is valid: ', Enum.Field2);
} else {
    console.log('Second value is invalid: ', val2);
    valid = false;
}

if (!valid) {
    process.exit(1);
}
