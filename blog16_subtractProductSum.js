// Define a function which takes a number as an argument
subtractProductAndSum = n => {
    // Declare a variable to store product of digits
    let product = 1
    // Declare a variable to store sum of digits
    let sum = 0
    // Iterate over the digits of the given number
    while (n != 0) {
        // Multiply the extracted digit to the product
        product *= n%10
        // Add the extracted digit to the sum
        sum += n%10
        // Update the given number
        n = Math.floor(n/10)
    }
    // Return the subtracted result
    return product - sum
}

