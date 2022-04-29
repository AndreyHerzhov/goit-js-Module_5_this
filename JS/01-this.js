
function hello() {
    console.log(this)
}



const person = {
    name: 'Poly',
    age: 20,
    sayHallo: hello,
    sayHalloWindow: hello.bind(window),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Job is ${phone}`)
        console.groupEnd()
    }
}

// console.log(person)
person.sayHallo()
person.sayHalloWindow()

const elena = {
    name: 'Lena',
    age: 18,
}

person.logInfo.bind(elena, 'pilot','9379992')()
person.logInfo.call(elena, 'pilot','9379992')
person.logInfo.apply(elena, ['pilot','9379992'])


const arra = [1, 2, 3, 4, 5];

// const mltplNumbers = function(arr, n){
//     return    arr.map(el => el * n)
// }


// console.log(mltplNumbers(array, 2))


Array.prototype.multBy = function(n){
    return this.map(el => el * n)
}

console.log(arra.multBy(2))