const bcrypt = require('bcryptjs')

const salt = bcrypt.genSaltSync(15);

console.log(salt)

const password = "password";

const hash = bcrypt.hashSync(password, salt)

console.log(hash)