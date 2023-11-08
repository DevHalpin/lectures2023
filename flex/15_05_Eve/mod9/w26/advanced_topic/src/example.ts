// const users = require('./users.json')
// import users from './users.json'

type LastName = string | null

interface User {
  first_name: string,
  last_name: LastName,
  dob : string,
  email: string,
}



const users: User[] = [
  {
    "first_name": "Upton",
    "last_name": "Santos",
    "email": "nibh.vulputate.mauris@outlook.ca",
    "dob": "1965-12-13"
  },
  {
    "first_name": "Kimberley",
    "last_name": "Fletcher",
    "email": "pretium.aliquet.metus@hotmail.com",
    "dob": "1961-57-27"
  },
  {
    "first_name": "Bradley",
    "last_name": null,
    "email": "aliquet.libero@outlook.ca",
    "dob": "1976-38-13"
  }]



const getUserFullNameByEmail = (email: string) => {
  const user  = users.find(user => user.email === email)
  if(!user) return undefined
  if(typeof user.last_name !== 'string') return user.first_name
  return user.first_name.concat("",user.last_name)
}

// console.log(getUserFullNameByEmail("mauris@aol.ca"))

console.assert(
  getUserFullNameByEmail("nibh.vulputate.mauris@outlook.ca") === "Upton Santos"
);
console.assert(
  getUserFullNameByEmail("pretium.aliquet.metus@hotmail.com") ===
    "Kimberley Fletcher"
);
console.log(getUserFullNameByEmail("aliquet.libero@outlook.ca"))
console.assert(getUserFullNameByEmail("aliquet.libero@outlook.ca") === undefined)
// console.assert(getUserFullNameByEmail([]) === undefined);
// console.assert(getUserFullNameByEmail("notarealemail@email.com") === undefined);

