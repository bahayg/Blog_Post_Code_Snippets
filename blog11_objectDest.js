// 1:
var colors = {
    color1: 'red',
    color2: 'blue',
    color3: 'yellow'
};

// Before ES6:
var color1 = colors.color1;
var color2 = colors.color2;
var color3 = colors.color3;

console.log(color1, color2, color3); // 'red', 'blue', 'yellow'

// After ES6:
var {color1, color2, color3} = colors;

console.log(color1, color2, color3); // 'red', 'blue', 'yellow'

// 2:
let {color1, color2, color3} = {color1: 'red', color2: 'blue', color3: 'yellow'};

console.log(color1); // 'red'
console.log(color2); // 'blue'
console.log(color3); // 'yellow'

// 3:
let colors = {
    color1: 'red',
    color2: 'blue',
    color3: 'yellow'
};

let {
    color1: firstColor,
    color2: secondColor,
    color3: thirdColor
} = colors;

console.log(firstColor); // 'red'
console.log(secondColor); // 'blue'
console.log(thirdColor); // 'yellow'

//4:
let colors = {
    color1: 'red',
    color2: 'blue'
};

// Without a default value:
let {color1, color2, color3} = colors;

console.log(color1); // 'red'
console.log(color2); // 'blue'
console.log(color3); // undefined

// With a default value:
let {
    color1 = 'purple', 
    color2 = 'green', 
    color3 = 'white'
} = colors;

console.log(color1); // 'red'
console.log(color2); // 'blue'
console.log(color3); // 'white'

//5:
let colors = {
    color1: {
        properties: {
            name: 'red',
            wavelength: '700nm'
        }
    },
    color2: 'blue',
    color3: 'yellow'
}

let { color1: { properties: { name, wavelength, saturation = '95%'} } } = colors;

console.log(name); // 'red'
console.log(wavelength); // '700nm'
console.log(saturation); // '95%'

//6:
let colors = {
    color1: 'red',
    color2: 'blue',
    color3: 'yellow'
};

let { color1, ...otherColors } = colors;

console.log(color1); // 'red'
console.log(otherColors); // { color2: 'blue', color3: 'yellow' }

//7:
printColors = ({ color1, color2, color3 }) => {
    console.log(color1);
    console.log(color2);
    console.log(color3);
}

let colors = {
    color1: 'red',
    color2: 'blue',
    color3: 'yellow'
};

printColors(colors) // 'red', 'blue', 'yellow'