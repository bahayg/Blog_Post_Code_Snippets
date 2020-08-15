reverseArray1 = arr => {
    // Create an empty array
    newArr = []
    // Loop through the array from the end to the beginning
    for (let i = arr.length - 1; i >= 0; i --) {
      newArr.push(arr[i])
    }
    // Return the reversed array
    return newArr
}

reverseArray1(["a", "b", "c", "d"]); // [ 'd', 'c', 'b', 'a' ]


reverseArray2 = arr => {
    newArr = []
    arr.forEach(element => {
      newArr.unshift(element)})
    return newArr
}

reverseArray2([1, 2, 3, 4, 5]); // [ 5, 4, 3, 2, 1 ]

reverseArray3 = arr => {
    // Loop through the halfway point of array 
    for (let i = 0; i < Math.floor(arr.length/2); i ++) {
      [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]]
    }
    return arr
}

reverseArray3(["ab", "bc", "cd"]); // [ 'cd', 'bc', 'ab' ]

// reverseArray3 = arr => {
//     for (let i = 0; i < Math.floor(arr.length/2); i ++) {
//       let tempElement = arr[i]
//       arr[i] = arr[arr.length-1-i]
//       arr[arr.length-1-i] = tempElement
//     }
//     return arr
// }
