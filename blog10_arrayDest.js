// 1:
let colors = ['red', 'blue', 'yellow'];
let [color1, color2, color3] = colors;

console.log(color1); // 'red'
console.log(color2); // 'blue'
console.log(color3); // 'yellow'

// 2:
let colors = ['red', 'blue'];
let [color1, color2, color3] = colors;

console.log(color1); // 'red'
console.log(color2); // 'blue'
console.log(color3); // 'undefined'

let colors = ['red', 'blue'];
let [color1 = 'green', color2 = 'pink', color3 = 'yellow'] = colors;

console.log(color1); // 'red'
console.log(color2); // 'blue'
console.log(color3); // 'yellow'

// 3:
let colors = ['red', 'blue', 'yellow'];
let [color1, , color3] = colors;

console.log(color1); // 'red'
console.log(color3); // 'yellow'

// 4:
let colors = ['red', 'blue', 'yellow', 'green'];
let [color1, color2, ...colorRest] = colors;

console.log(color1); // 'red'
console.log(color2); // 'blue'
console.log(colorRest); // ['yellow', 'green']

// 5:
let color1 = 'red';
let color2 = 'blue';
[color1, color2] = [color2, color1]

console.log(color1); // 'blue'
console.log(color2); // 'red'

//6:
colors = () => {
    return ['red', 'blue', 'yellow']
}

let [color1, color2, color3] = colors()
console.log(color1); // 'red'
console.log(color2); // 'blue'
console.log(color3); // 'yellow'