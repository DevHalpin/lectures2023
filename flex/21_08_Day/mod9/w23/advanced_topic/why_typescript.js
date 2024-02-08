"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_json_1 = __importDefault(require("./users.json"));
const getUserFullNameByEmail = (email) => {
    const user = users_json_1.default.find((user) => user.email === email);
    if (user === undefined) {
        return undefined;
    }
    if (typeof user.last_name !== "string") {
        return user.first_name;
    }
    return user.first_name.concat(" ", user.last_name);
};
// test cases
console.assert(getUserFullNameByEmail("nibh.vulputate.mauris@outlook.ca") === "Upton Santos");
console.assert(getUserFullNameByEmail("pretium.aliquet.metus@hotmail.com") ===
    "Kimberley Fletcher");
// user does not exist
// console.assert(getUserFullNameByEmail("me@jakerobins.com") === "Jake Robins");
// User has null last name
console.log(getUserFullNameByEmail("aliquet.libero@outlook.ca"));
