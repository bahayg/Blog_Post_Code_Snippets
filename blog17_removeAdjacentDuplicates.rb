def remove_duplicates(s)
    # create an empty array
    stack = []
    # iterate over input string
    s.each_char do |item|
        # remove the last element of the stack if it
        # is equal to the element of the string
      item == stack[-1] ? stack.pop : stack.push(item) 
    end
    stack.join
end
