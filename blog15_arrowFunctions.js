//1: Normal function declaration 1
function favoriteColor(color) {
    return `My favorite color is ${color}`
}

favoriteColor("purple") // "My favorite color is purple"

//2: Normal function declaration 2
let favoriteColor = function (color) {
    return `My favorite color is ${color}`
}

favoriteColor("purple") // "My favorite color is purple"

//3: Arrow function 
let favoriteColor = (color) => {
    return `My favorite color is ${color}`
}

favoriteColor("purple") // "My favorite color is purple"

//4: One parameter
let favoriteColor = color => {
    return `My favorite color is ${color}`
}

favoriteColor("purple") // "My favorite color is purple"

//5: Multiple parameters
let favoriteColors = (color1, color2) => {
    return `My favorite colors are ${color1} and ${color2}`
}

favoriteColors("purple", "orange") // "My favorite colors are purple and orange"

//6: No parameter
let favoriteColor = () => {
    return "My favorite color is purple"
}

favoriteColor() // "My favorite color is purple"

//7: One expression long function body 

// Function body in a block with return keyword
let favoriteColor = color => {
    return `My favorite color is ${color}`
}

// One line code
let favoriteColor = color => { return `My favorite color is ${color}` }

// Implicit return with removed curly brackets
let favoriteColor = color => `My favorite color is ${color}`

favoriteColor("purple") // "My favorite color is purple"

//8: Iteration:(Easy array mapping)
let numbers = [1, 2, 3]

let addFive = numbers.map(item => item + 5)
 
console.log(addFive);// [6, 7, 8]

//9: Object literals
let favoriteColor = () => {
    color: "purple"
}

console.log(favoriteColor().color) // Uncaught TypeError

let favoriteColor = () => ({
    color: "purple"
})

console.log(favoriteColor().color) // purple


// let favoriteColor = color => {
//     "My favorite color is " + color
// }

// favoriteColor("purple") // undefined

// let favoriteColor = color => (
//     `My favorite color is ${color}`
// )
// favoriteColor("purple") // "My favorite color is purple"

// let favoriteColors = color1, color2 => `My favorite colors are ${color1} and ${color2}`
// favoriteColors("purple", "orange") // Uncaught SyntaxError: Unexpected token '=>'
