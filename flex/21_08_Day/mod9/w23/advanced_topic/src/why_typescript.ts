import users from"./users.json";

// let getUserFullNameByEmail: (email: string) => string;

// type User = {
//   dob: string;
//   first_name: string;
//   last_name: string | null;
//   email: string
// }

interface User {
  first_name: string;
  last_name: string | null;
  dob: string;
}

interface UserWithEmail extends User {
  email: string;
}

const getUserFullNameByEmail = (email: string | null) => {
  const user = users.find((user: UserWithEmail) => user.email === email);
  if (user === undefined) {
    return undefined;
  }

  if (typeof user.last_name !== "string") {
    return user.first_name;
  }

  return user.first_name.concat(" ", user.last_name);
};

// test cases
console.assert(
  getUserFullNameByEmail("nibh.vulputate.mauris@outlook.ca") === "Upton Santos"
);
console.assert(
  getUserFullNameByEmail("pretium.aliquet.metus@hotmail.com") ===
    "Kimberley Fletcher"
);
// user does not exist
// console.assert(getUserFullNameByEmail("me@jakerobins.com") === "Jake Robins");

// User has null last name
console.log(
  getUserFullNameByEmail("aliquet.libero@outlook.ca")
);