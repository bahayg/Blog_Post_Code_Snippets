def unique_occurrences(arr)
#   Create a hash
    occurrences = {}
#   Iterate through the array
    arr.each do |num|
    #   Store the key-value pairs
        occurrences[num] ? occurrences[num] += 1 : occurrences[num] = 1
    end
#   Check if the values in the hash are unique
    occurrences.values.length == occurrences.values.uniq.length
end
