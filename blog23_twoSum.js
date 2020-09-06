const twoSum = (nums, target) => {
    // Initialize an empty hash map
    let hash = {}
    // Iterate over the elements of the given array
    for (let i = 0; i < nums.length; i ++) {
        // Check if the element's complement exists in the map 
        if (hash[target-nums[i]] !== undefined) {
            // If yes, return the indices of the complement and current element 
            return [hash[target-nums[i]], i]
        }
        // If not, put the element into hash with index;
        // the key is the value of nums's elements and 
        // the value is the index of nums's elements  
        hash[nums[i]] = i
        // Move to the next iteration
    }
};
