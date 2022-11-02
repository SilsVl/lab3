function FizzBuzz(n) {
    let i = 1
    for (i; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        }
        else if (i % 3 === 0) {
            console.log('fizz')
        }
        else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
    return "end"
}

test = FizzBuzz(15)

console.log(test)
