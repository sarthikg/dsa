def merge_sort(arr):
  def recurse(left, right):
    if (right - left <= 1):
      return arr[left:right]
    else:
      mid = left + ((right - left) // 2)
      arrA = recurse(left, mid)
      arrB = recurse(mid, right)
      return merge_sorted_arr(arrA, arrB)
  return recurse(0, len(arr))


def merge_sorted_arr(arrA, arrB):
  result = []
  a = 0
  b = 0
  while (a<len(arrA) and b<len(arrB)):
    if (arrA[a] < arrB[b]):
      result.append(arrA[a])
      a += 1
    else:
      result.append(arrB[b])
      b += 1

  for i in range(a, len(arrA)):
    result.append(arrA[i])

  for i in range(b, len(arrB)):
    result.append(arrB[i])

  return result


print(merge_sort([13, 46, 24, 52, 20, 9]))