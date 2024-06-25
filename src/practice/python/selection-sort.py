def selection_sort(arr):
  for i in range(0, len(arr)):
    smallest_index = i

    for j in range(i, len(arr)):
      if arr[j] < arr[smallest_index]:
        smallest_index = j

    swap = arr[i]
    arr[i] = arr[smallest_index]
    arr[smallest_index] = swap

  return arr

print(selection_sort([13, 46, 24, 52, 20, 9]))