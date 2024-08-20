import { users } from "../index.js";
import assert from "assert";

assert.equal(users[0].first_name, "Timi")
assert.equal(users.length, 10)

console.log(users);