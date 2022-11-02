let str = "xxxxwqe"

function checkSpam(str) {
    strUp = str.toUpperCase()
    strXXX = strUp.includes("XXX")
    strViagra = strUp.includes("VIAGRA")
    return strXXX || strViagra
}

console.log(checkSpam(str))
