import { find_user } from "../index.js";
import assert from "assert";

assert.equal(find_user(1).id, 1)
assert.equal(find_user('2').id, 2)
assert.equal(find_user(11), null)