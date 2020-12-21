# 첫째 마당

# 문제1. 1 ~ n 까지의 합 함수 구현: O(1) 성능으로 for문 쓰지 말고 구현할 것
# 가우스 공식 이용: n(n+1)/2 (홀수든 짝수든 동일)
def sum2(n):
    return n * (n + 1) // 2
print('n=100: 5050 == ', sum2(100)) #짝수
print('n=101: 5151 == ', sum2(101)) #홀수

#연습문제 1-1 : 제곱 합
def sum_square(n):
    sum = 0
    for i in range(1, n+1):
        sum += i*i
    return sum
print('10제곱 == 385: 리얼=', sum_square(10))
print('4제곱 == 30: 리얼=', sum_square(4))

#연 1-2: 답 = time complexity: O(n)

#연습문제 1-3: 제곱의 합 공식이용 = n(n+1)(2n+1) / 6 의 시간 복잡도는 ?
#  답 : O(1)
def sum_square2(n):
    return n * (n + 1) * (2*n + 1) // 6
print('10제곱 == 385: 리얼=', sum_square2(10))
print('4제곱 == 30: 리얼=', sum_square2(4))

# 연 2-1: 최소값 구하기 구현
def get_min_value(num_list):
    min_v = num_list[0]
    for v in num_list:
        if v < min_v:
            min_v = v
    return min_v
lst1 = [5, 8, 2, 9]
lst2 = [5, 8, 0, 2, -1, 9]
print('min value: [5, 8, 2, 9]: ', get_min_value(lst1))
print('min value: [5, 8, 0, 2, -1, 9]: ', get_min_value(lst2))


# 문제 3 동명이인 찾기: set 집합
# set 실습
s = set()
s.add(1)
s.add(2)
s.add(2)
print('set', s, 'len(s)', len(s))
print( {1,2} == {2,1})
s.add(4)
s.add(3)
print(s)
s.discard(4)
print(s)
def find_same_name(name_list):
    duplication = set()
    length = len(name_list)
    # len_range = range(len(name_list))
    for oidx in range(length - 1):
        for iidx in range(oidx+1, length):
            if name_list[oidx] == name_list[iidx]:
                duplication.add(name_list[oidx])
                break
    return duplication
name = ['tom', 'jerry', 'mike', 'tom']
name2 = ['tom', 'jerry', 'mike', 'tom', 'mike']
print(name, ': overlapped name:', find_same_name(name))
print(name2, ': overlapped name:', find_same_name(name2))




"""
재귀호출
"""

# 팩토리얼: looping 방식
def fact0(n):
    mu = 1
    for i in range(n, 0, -1):
        mu *= i
    return mu

print(fact0(1)) #1
print(fact0(5)) #120
print(fact0(10)) #3628800

# 팩토리얼: 재귀 호출 방식
def fact(n):
    if n == 0:
        return 1

    for i in range(n):
        return n * fact(n-1)

assert 1 == fact(1), '1 != {fact(1)}'
assert 120 == fact(5), '120 != {fact(5)}'
assert 3628800 == fact(10), '3628800 != {fact(10}'


# 최대공약수 구하기
# 입력: a, b
# 출력: a와 b의 최대공약수
# 1번을 해보세요!
def gcd0(a, b):
    min_num = min(a, b)

    for i in range(min_num, 0, -1):
        if a % i == 0 and b % i == 0:
            return i

""" 최대공약수를 구하는 유클리드 알고리즘
gcd(a, b) = gcd(b, a % b) : a와 b의 최대공약수는 ‘b’와 ‘a를 bb로 나눈 나머지’의 최대공약수와 같다.
gcd(n, 0) = n : 어떤 수와 0의 최대공약수는 자기 자신이다. 즉, 종료조건은 b가 0일때.
이 문제는 aa와 bb의 최대공약수를 구하기 위해서 (a, b)보다 좀 더 작은 숫자인 (b, a % b)의 최대공약수를
 구하는 과정을 이용하는 전형적인 재귀 호출 문제입니다(좀 더 작은 값으로 자기 자신을 호출합니다).
"""
def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)

print(gcd(1, 5))  # 1
print(gcd(3, 6))  # 3
print(gcd(60, 24))  # 12
print(gcd(81, 27))  # 27