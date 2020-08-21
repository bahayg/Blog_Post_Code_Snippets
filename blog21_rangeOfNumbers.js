// Step defaults to 1 or -1
range = (start, end, step = start < end ? 1 : -1) => {
    // Create an empty array to hold our range
    let arr = []
    if (step > 0) {
    // Loop over and push the numbers from start to end 
    for (let i = start; i <= end; i += step) {
      arr.push(i)} 
    } else {
      for (let i = start; i >= end; i += step) {
      arr.push(i)} 
    } 
    // Return the range
    return arr
}


