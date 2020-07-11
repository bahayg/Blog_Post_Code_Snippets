// 1:
printColors = (color1, color2, color3) => {
    console.log(color1 + ',' + color2 + ',' + color3);
};

let colors = ['red', 'blue', 'yellow'];

printColors(...colors); // red, blue, yellow

// 2:
let firstArray = ['red', 'blue', 'yellow'];
console.log(firstArray); // ['red', 'blue', 'yellow']

let secondArray = [...firstArray];
console.log(secondArray); // ['red', 'blue', 'yellow']

// 3:
let firstArray = ['red', 'blue', 'yellow'];
let secondArray = ['green', 'purple', 'orange'];
let newArray = [...firstArray, ...secondArray]

console.log(firstArray); //['red', 'blue', 'yellow']
console.log(secondArray); //['green', 'purple', 'orange']
console.log(newArray); //["red", "blue", "yellow", "green", "purple", "orange"]

// 4:
let color1 = { firstColor: 'red'};
let color2 = { secondColor: 'blue'};

let color1clone = {...color1};

let colors = {...color1, ...color2};

console.log(color1); //{firstColor: "red"}
console.log(color2); //{secondColor: "blue"}
console.log(color1clone); //{firstColor: "red"}
console.log(colors); //{firstColor: "red", secondColor: "blue"}

//5:
let colors = ['red', 'blue', 'yellow'];
let [firstColor, ...otherColors] = colors;
console.log(firstColor); //'red'
console.log(otherColors); // ["blue", "yellow"]

//6:
multiply = (...numbers) => {
    let answer = 1;
    for (let num of numbers) {
        answer *= num
    }
    return answer
}

multiply(1, 2, 3); //6
multiply(1, 2, 3, 4, 5, 10); //1200
