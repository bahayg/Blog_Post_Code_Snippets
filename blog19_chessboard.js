chessboard = num => {
    // Create an empty string
    let output = ""
    // Set an outer loop for rows
    for (i=1; i<=num; i++) {
      // Set an inner loop for columns
      for (j=1; j<=num; j++) {
        // Check if sum of the counters is even using a ternary operator: 
        // if yes; put a space
        // if not, put a hash 
        ((i + j)%2==0 ? output += " " : output += "#")
       } 
       // Add a newline character to separate rows in the outer loop  
       output += "\n"
    }
    // Print the chessboard to the console
    console.log(output)
}

