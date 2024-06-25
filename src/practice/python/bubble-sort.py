def bubble_sort(arr):
  for i in reversed(range(0, len(arr)-1)):
    for j in range(0, i+1):
      if (arr[j] > arr[j+1]):
        swap = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = swap
  return arr


print(bubble_sort([13, 46, 24, 52, 20, 9]))