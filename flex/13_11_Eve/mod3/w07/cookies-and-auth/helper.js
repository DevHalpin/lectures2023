const generateRandomString = () => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const findUserByUsername = (username, users) => {
  for (const userId in users) {
    const user = users[userId];
    if (user.username === username) {
      return user;
    }
  }

  return null;
}

module.exports = {generateRandomString, findUserByUsername}