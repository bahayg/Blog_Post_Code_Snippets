// 1:
const sortArrayByParity = A => {
    // Declare two empty arrays for even and odd integers
    let even = []
    let odd = []
    let result = []
    // Iterate through the given array
    for (let i = 0; i < A.length; i ++) {
    // Check if the current element in the array is even or odd
    // and then push it into its respective array
      A[i] % 2 === 0 ? even.push(A[i]) : odd.push(A[i]) 
    }
    // Combine the even and odd arrays, and return it
      return result = even.concat(odd)
}

// 2:
const sortArrayByParity = A => {
    let j = 0;
    for (let i = 0; i < A.length; i ++) {
    // If the even element is found, 
    // swap the odd and even element
      if (A[i] % 2 === 0) {
        [A[j], A[i]] = [A[i], A[j]];
        j ++;
      }
    }
    return A
}

// const sortArrayByParity = A => {
//     let result = []
//     A.forEach(num => {
//       num % 2 === 0 ? result.unshift(num) : result.push(num)
//     })
//     return result
// }
