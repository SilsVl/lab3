function findVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for(let letter of str.toLowerCase()) {
        if(vowels.includes(letter)) {
          count++
        }
      }
      return count
}

test = findVowels('dog')
test1 = findVowels('skate')
test2 = findVowels('drth')

console.log(test)
console.log(test1)
console.log(test2)
