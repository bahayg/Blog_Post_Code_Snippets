const sockMerchant = arr => {
    // Initialize a hash
    let socks = {}
    // Iterate through the given array
    for (let i = 0; i < arr.length; i++) {
        // If there is a key for the element,
        // Increase its frequency by 1
        // If don't, set its frequency to 1
        socks[arr[i]] ? socks[arr[i]] ++ : socks[arr[i]] = 1
    }
    // Create a variable to store the number of pairs
    let pairs = 0
    // Iterate through the keys of the hash
    for (let key in socks) {
        // Add frequencies divided by 2 to the pairs counter
        pairs += Math.floor(socks[key] / 2)
    }
    // Return the counter
    return pairs
}

const sockMerchant = arr => {
    let socks = {}
    for (let i = 0; i < arr.length; i++) {
        socks[arr[i]] ? socks[arr[i]] ++ : socks[arr[i]] = 1
    }
    let pairs = 0
    for (let key in socks) {
        pairs += Math.floor(socks[key] / 2)
    }
    return pairs
}
