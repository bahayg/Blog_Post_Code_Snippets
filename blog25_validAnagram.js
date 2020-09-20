const isAnagram = (s, t) => {
    // Create a hash 
    let strS = {}
    // Return false immediately when the lengths of the two strings are not the same
    if (s.length !== t.length) return false
    // Iterate through the first string to create a counter object
    for (let char of s) {
        // Check if the character is in the object: 
        // If it is, increment its value by 1 
        // If not, add it to the object as a key with value 1. 
        strS[char] = (strS[char] || 0) + 1
    }
    // Iterate through the second string
    for (let char of t) {
        // Check if the object has that character in its keys:
        // If not, return false
        if (!strS[char]) return false
        // If it has, decrement its value by 1
        strS[char] --
    }
        return true
};

const isAnagram = (s, t) => {
    let strS = {}
    if (s.length !== t.length) return false
    for (let char of s) {
        strS[char] = (strS[char] || 0) + 1
    }
    for (let char of t) {
        if (!strS[char]) return false
        strS[char] --
    }
        return true
};
