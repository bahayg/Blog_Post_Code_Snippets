// 1:
// Without template literal 
let str1 = 'Hello!';
let str2 = "Hello!";

// With template literal 
let str3 = `Hello!`;

console.log(str1); // Hello!
console.log(str2); // Hello!
console.log(str3); // Hello!

// 2:
// Escaping a single or double quote without template literal
let str1 = 'Hello, \'everyone\'!';
let str2 = "Hello, \"everyone\"!";

// Template literal only need to escape backtick 
let str3 = `Hello, 'everyone', "everyone", \`everyone\`!`;

console.log(str1); // Hello, 'everyone'!
console.log(str2); // Hello, "everyone"!
console.log(str3); // Hello, 'everyone', "everyone", `everyone`!

// 3:
let intro1 = 'Hello, everyone\n' + 
'I love to code\n' + 
'in JavaScript.'

let intro2 = `Hello, everyone
I love to code
in JavaScript.`

console.log(intro1);// Hello, everyone
                    // I love to code
                    // in JavaScript.

console.log(intro2);// Hello, everyone
                    // I love to code
                    // in JavaScript.

// 4:
let color = 'purple';
let intro1 = 'Hello, everyone!' + ' My favorite color is "' + color + '".'
let intro2 = `Hello, everyone! My favorite color is "${color}".`

console.log(intro1); //Hello, everyone! My favorite color is "purple".
console.log(intro2); //Hello, everyone! My favorite color is "purple".

// 5:
let color = 'yellow';
let sentence = `My favorite color is "${color == 'purple' ? color : 'orange'}".`
console.log(sentence); //My favorite color is "orange".


// intro1 = (name, color) => {
//     return '<div>' + 
//     '<h1>Hi, my name is ' + name + '.</h1>' +
//     '<p> My favorite color is "' + color + '".</p>' +
//     '</div>'
// }
// intro1('Matt', 'blue')

// intro2 = (name, color) => {
//     return `
//     <div>
//         <h1>Hi, my name is ${name}</h1>
//         <p> My favorite color is "${color}". </p>
//     </div>
//     `
// }
// intro2('Matt', 'blue')
