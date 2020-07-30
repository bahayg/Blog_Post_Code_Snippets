def sort_array_by_parity(A)
    result = []
    A.each do |num|
      num % 2 === 0 ? result.unshift(num) : result.push(num)
    end
    result
end
