const numberOfVowels = (string) => {
  let number = 0
  const vowels = ['a','e','i','o','u']
  if (typeof string !== 'string') {
    return "No input detected, please input a string"
  }
  for(const letter of string) {
    if (vowels.includes(letter)){
      number++
    }
  //   // switch(letter){
  //   // case a:
  //   //   number++;
  //   //   break
  //   // }
  //   if (letter === 'a' || letter === 'e' || letter === 'i'|| letter === 'o' || letter === 'u') {
  //     number ++;
  //   }
  }
  return number


}

module.exports = numberOfVowels