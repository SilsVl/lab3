function random(min, max) {
    return Math.random()*(max-min) + min 
}

test = random(1,5)
test1 = random(1,"w")//сломать
console.log(test)
console.log(test1)
