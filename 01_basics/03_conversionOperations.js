let score = 33
let value = "45"
let temp = null
let adress = '616/146 B'
let un = undefined

console.log(typeof score)
console.log(typeof(value))

let valueN = Number(value)
let tempN = Number(temp)
let adressN = Number(adress)
let unN = Number(un)

console.log(typeof scoreN)
console.log(typeof tempN)
console.log(typeof adressN)

console.log("Number(value) = "+valueN,", Number(temp)= "+tempN,+", Number(adress)= "+adressN+", Number(ubdefined)= "+unN)
//Number(true) = 1 
//Number("33") = 33
//Number("33abd") = NAN(Not A Number) type is number only
//Number("Hare Krsna") = NAN

let isLoggedIn = 1
console.log(Boolean(1)+" "+Boolean("")+" "+Boolean(" "))

console.log(typeof(String(1001)))