def manual_incrementing_matrix(n):
  # matrix n x n
  matrix = [[0 for y in range(n)] for x in range(n)]
  counter = 0
  for idx, el in enumerate(matrix):
    for nested_idx, nested_el in enumerate(el):
      matrix[idx][nested_idx] = counter + nested_idx

    counter += 1

  return matrix


print(manual_incrementing_matrix(11))
