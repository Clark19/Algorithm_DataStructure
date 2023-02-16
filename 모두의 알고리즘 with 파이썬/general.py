# 소수 구하는 함수 : 에라토스테네스의 체
def eratosthenes(num):
  # sieve = [1 for i in range(num)] # 1로 표시된 것들의 인덱스만 소수임
  sieve = [1] * num # 1로 표시된 것들의 인덱스만 소수임
  sieve[0], sieve[1] = 0, 0
  for i in range(2, num):
    for j in range(2*i, num, i):
      sieve[j] = 0
  
  # return [idx for idx, value in enumerate(sieve) if value==True]
  # return list(filter(lambda idx: sieve[idx]==1, range(2,n+1)))
  return [idx for idx in range(2,num) if sieve[idx]==True]
print(eratosthenes(10))
print(eratosthenes(20))