async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject('Arguments must be of type number')
    } else {
        return a + b
    }
}

async function asyncSubtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject('Arguments for subtraction must be of type number')
    } else {
        return a - b
    }
}

const sumResult = asyncSum(50, 33)
const subResult = asyncSubtract(50, null)

Promise.all([ sumResult, subResult ]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})

