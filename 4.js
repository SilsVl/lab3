function palindrome(str) {
    str = str.toLowerCase()
    strReverse = str.split('').reverse().join('')
    return str === strReverse
}

test = palindrome("racecar")
test1 = palindrome("table")
test2 = palindrome("ba b")
test3 = palindrome("ba ab")
test4 = palindrome("Anna")
test5 = palindrome("An,na")

console.log(test)
console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)
console.log(test5)
