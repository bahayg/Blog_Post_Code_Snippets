const uniqueOccurrences = arr => {
  // Create a hash
  let occurrences = {}
  // Iterate through the array
  arr.forEach(num => {
    // Store the key-value pairs
    occurrences[num] ? occurrences[num] ++ : occurrences[num] = 1
  })
    // Check if the values in the hash are unique
    return Object.values(occurrences).length === [...new Set(Object.values(occurrences))].length ? true : false 
}
