isEven = num => {
    // Return true if the given number is 0.
    if (num == 0) {
      return true
    // Return false if the given number is 1.
    } else if (num == 1) {
        return false
    // For any other positive number,
    // subtract 2 from the given number and
    // pass it back into isEven function. 
    } else if (num > 0) {
        return isEven(num - 2)
    // Allow the function to accept negative numbers
    // with another recursion.  
    } else {
        return isEven(-num)
    }
}
