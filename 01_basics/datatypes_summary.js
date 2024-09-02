// primitive datatypes(call by value)
/*string
number
boolean
null
undefined
symbol
BigInt
*/

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id=== anotherId)// false
const bigNumber = 37643763463648736873n //BigInt

//javascript is dynamically typed

//non primitive(refrence type)
/*Arrays
Objects//master it
Functions
*/

const devotees = ["animesh","umang","manish","utkarsh","taresh","yash","himanshu"]
let myObj = {
    name:"Krsna",
    age:23
}


//variable type function
const myFunction = function(){
    console.log('Hare Krsna')
}

console.log(typeof bigNumber )//bigint
console.log(typeof myFunction )//function object
console.log(typeof devotees) //object
console.log(typeof id ) //symbole

/*
Premitive Datatypes

                  Type                               typeof

i)            Number                               number
ii)           String                               string
iii)          Boolean                              boolean
iv)           Bigint                                bigint
v)            Symbol                                symbol
vi)           Null                                  object
vii)          Undefined                             undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object)
*/

