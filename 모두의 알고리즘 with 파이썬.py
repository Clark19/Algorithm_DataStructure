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