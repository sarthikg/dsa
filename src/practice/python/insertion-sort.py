def insertion_sort(arr):
  for i in range(0, len(arr)):
    j = i
    while (j>0 and arr[j] < arr[j-1]):
      swap = arr[j-1]
      arr[j-1] = arr[j]
      arr[j] = swap
      j-=1

    print(arr)
  return arr


print(insertion_sort([13, 46, 24, 52, 20, 9]))