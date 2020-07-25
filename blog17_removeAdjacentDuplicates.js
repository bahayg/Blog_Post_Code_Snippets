removeDuplicates = S => {
    // create an empty array
    let stack = []
    // iterate over input string
    for (let i = 0; i < S.length; i ++) {
        // check if the element of the string 
        // is equal to the last element of the stack
      if (S[i] == stack[stack.length - 1]) {
        // if yes, remove the last element of the stack
        stack.pop()
      } else {
        // if not, put the element on the stack
        stack.push(S[i])
      }
    }
    return stack.join("")
}
