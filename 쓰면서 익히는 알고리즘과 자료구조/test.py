import collections
from typing import List

def twoSum(nums: List[int], target: int) -> int:
  hashtable_dict = {}

  for i in range(0, len(nums)):
    value = target - nums[i]
    if hashtable_dict.get(value) is not None \
      and hashtable_dict[value] != i:
        return [i, hashtable_dict[value]]
    
    hashtable_dict[nums[i]] = i
  
  return [-1, -1]


tests = {
  1: ([2,7,8,11], 9)
}
answer = {
  1: [0,1]
}

def is_same_list(alist: List, blist: List):
  return collections.Counter(alist) == collections.Counter(blist)

def check_result(index: int, output: List):
  if index > len(tests):
    raise RuntimeError(f'Failed to get {index}th case')

  return is_same_list(output, answer.get(index, []))

def main():
  for index, data in tests.items():
    inputList = data[0]
    targetNum = data[1]
    output = twoSum(inputList, targetNum)

    if check_result(index, output):
      print(f'correct answer {output} for', end=' ')
    else:
      print(f'wrong answer {output} for', end=' ')
    print(f'the input nums {inputList} and target {targetNum}')

if __name__ == '__main__':
  main()
