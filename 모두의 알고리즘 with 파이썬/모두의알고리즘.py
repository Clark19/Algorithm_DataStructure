# 첫째 마당: 알고리즘 기초 문제1 ~ 문제3

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

# 연 3-1: n명 중 두 명 짝짓는 모든 조합 출력 문제
def pick_two(people):
    for oi in range(len(people)-1):
        for ii in range(oi+1, len(people)):
            print(people[oi], '-', people[ii])
people = ['tom', 'jerry', 'mike']
pick_two(people)
people2 = ['tom', 'jerry', 'mike', 'john']
pick_two(people2)



# 둘째 마당: 재귀 호출 - 문제4 ~
"""
문제 4: 팩토리얼 구하기
재귀호출
"""
# 함수 호출 stack 재귀 간단 예
def recur(num):
    if num < 0:
        print("end")
    else:
        print(num)
        recur(num-1)
        print("returned", num)
recur(3)

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
    if n <= 1:
        return 1
    return n * fact(n-1)

assert 1 == fact(1), '1 != {fact(1)}'
assert 120 == fact(5), '120 != {fact(5)}'
assert 3628800 == fact(10), '3628800 != {fact(10}'
print('재귀 팩토리얼:',fact(1)) #1
print(fact(5)) #120
print(fact(10)) #3628800

# 연 4-1: 1 ~ n 까지 합 구하기를 재귀 호출로 구현하기
def sumr(n):
    if n <= 1:
        return 1
    return n + sumr(n-1)
print('sumr:', sumr(3))
print('n=100: 5050 == ', sumr(100)) #짝수
print('n=101: 5151 == ', sumr(101)) #홀수

# 연 4-2: n개 수 중 최대 값 찾기 구현을 재귀 방식으로 구현
def maxr(nums, n):
    if n <= 1:
        return nums[0]
    m = nums[n-1]
    if maxr(nums, n-1) > m:
        m = maxr(nums, n-1)
    return m
v = [17,92,18,33,58,7,33,42]
print('최대값 구하기(재귀):', maxr(v, len(v)))

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


""" 문제6. '하노이의 탑 알고리즘' 구현 문제, p.67, 75
하노이의 탑에는 크기가 다른 원반이 n개 있고 원반을 끼울 수 있는 기둥이 세 개 있습니다.
하노이의 탑 문제는 어떻게 하면 원반 n개를 모두 가장 왼쪽 기둥(출발점, 즉 1번 기둥)에서 오른쪽 기둥(도착점, 즉 3번 기둥)으로 옮길 수 있을까 하는 문제입니다.
단, 하노이의 탑을 옮길 때는 세 가지 제약 사항이 있습니다.
원반은 한 번에 한 개씩만 옮길 수 있고, 각 기둥 맨 위의 원반을 다른 기둥의 맨 위로만 움직여야 합니다.
옮기는 과정에서 큰 원반을 작은 원반 위에 올려서는 안 됩니다.
하노이의 탑 알고리즘은 다음과 같습니다.

1-A. 원반이 한 개면 그냥 옮기면 끝입니다(종료 조건).
1-B. 원반이 n개일 때
① 1번 기둥에 있는 n개 원반 중 n-1개를 2번 기둥으로 옮깁니다(3번 기둥을 보조 기둥으로 사용).
② 1번 기둥에 남아 있는 가장 큰 원반을 3번 기둥으로 옮깁니다.
③ 2번 기둥에 있는 n-1개 원반을 다시 3번 기둥으로 옮깁니다(1번 기둥을 보조 기둥으로 사용).

위 알고리즘을 사용하여 프로그램을 작성해 봅시다.
이렇게 해보세요!
책 p.75을 참고해서 풀어보세요!

1. 변수 n, from_pos, to_pos, aux_pos를 받아 하노이의탑의 알고리즘으로 원반을 움직이는 함수 hanoi을 작성하세요.
n=1일 때 조건을 따로 설정해주어야 합니다.

실행 결과
n = 1
1 -> 3
n = 2
1 -> 2
1 -> 3
2 -> 3
n = 3
1 -> 3
1 -> 2
3 -> 2
1 -> 3
2 -> 1
2 -> 3
1 -> 3
"""
# 하노이의 탑
# 입력: 옮기려는 원반의 갯수 n
#      옮길 원반이 현재 있는 출발점 기둥 from_pos
#      원반을 옮길 도착점 기둥 to_pos
#      옮기는 과정에서 사용할 보조 기둥 aux_pos
# 출력: 원반을 옮기는 순서
# 1번을 해보세요!
def move(from_pos, to_pos):
    print(f'{from_pos} -> {to_pos}')

def hanoi(n, from_pos, to_pos, aux_pos):
    if n == 1:
        return move(from_pos, to_pos)
    # 문제 풀이 과정 중 일반화(패턴 발견) 위해 작은 단위 부터 결과에 부응하는 코드 작성한 흔적 [
    # move(from_pos, aux_pos)
    # move(from_pos, to_pos)
    # move(aux_pos, to_pos) # ]

    # 원반 n - 1개를 aux_pos로 이동(to_pos를 보조 기둥으로)
    hanoi(n-1, from_pos, aux_pos, to_pos)
    # 가장 큰 원반을 목적지로 이동
    move(from_pos, to_pos)
    # aux_pos에 있는 원반 n-1개를 목적지로 이동(from_pos를 보조 기둥으로)
    hanoi(n-1, aux_pos, to_pos, from_pos)

print("n = 1")
hanoi(1, 1, 3, 2)  # 원반 한 개를 1번 기둥에서 3번 기둥으로 이동(2번을 보조 기둥으로)
print("n = 2")
hanoi(2, 1, 3, 2)  # 원반 두 개를 1번 기둥에서 3번 기둥으로 이동(2번을 보조 기둥으로)
print("n = 3")
hanoi(3, 1, 3, 2)  # 원반 세 개를 1번 기둥에서 3번 기둥으로 이동(2번을 보조 기둥으로)
""" 알고리즘 분석
n 1 2 3  4  5       n
  1 3 7 15 31  => 2^n -1  => 2**n -1 => 시간 복잡도는 빅오: O(2^n) 지수적 폭발
  원반 하나 이동시 1초라 가정하면 20층짜리 하노이의 탑을 옮기는데 열이틀 걸림.
   30층 옮기는데 쉬지않고 34년 걸림.
"""
# print("n = 20")
# hanoi(20, 1, 3, 2)


# 문제7. 순차 탐색
# 리스트에서 특정 숫자의 위치 찾기 - https://academy.elice.io/courses/5005/lectures/36236/materials/1
# 입력: 리스트 a, 찾는 값 x
# 출력: 찾으면 그 값의 위치, 찾지 못하면 -1
# 1번을 해보세요! (순차 탐색 이용: Time Complexity O(n))
def search_list(a, x):
    idx = -1
    # try:
    #     idx =a.index(x)
    # except ValueError as e:
    #     print(e)
    for i, v in enumerate(a):
        if x == v:
            return i
    return idx

v = [17, 92, 18, 33, 58, 7, 33, 42]
print(search_list(v, 18))  # 2(순서상 세 번째지만, 위치 번호는 2)
print(search_list(v, 33))  # 3(33은 리스트에 두 번 나오지만 처음 나온 위치만 출력)
print(search_list(v, 900))  # -1(900은 리스트에 없음)

# 연 7-1
def search_list2(a, x):
    lst = []
    for i, v in enumerate(a):
        if x == v:
            lst.append(i)
    return lst
v = [17,92,18,33,58,7,33,42]
print(search_list2(v, 18)) #[2]
print(search_list2(v, 33)) #[3,6
print(search_list2(v, 900)) #[]


""" 셋째 마당: 탐색과 정렬
선택 정렬, Selection sort: 문제8
삽입 Insertion: 문제9
병합 Merge: 문제10
퀵 Quick: 문제11
거품 Bubble: 연습 문제 11-1
"""


# 문제8. 선택 정렬 - https://academy.elice.io/courses/5005/lectures/36236/materials/2
"""
문 8-1: 쉽게 설명한 선택 정렬 알고리즘 | p.84
주어진 리스트 안의 자료를 작은 수부터 큰 수 순서로 배열하는 선택 정렬 알고리즘을 생각해 봅시다.

리스트 a에 아직 자료가 남아 있다면 → while a:
남은 자료 중에서 최솟값의 위치를 찾습니다. → min_idx = find_min_idx(a)
찾은 최솟값을 리스트 a에서 빼내어 value에 저장합니다. → value = a.pop(min_idx)
value를 result 리스트의 맨 끝에 추가합니다. → result.append(value)
1번 과정으로 돌아가 자료가 없을 때까지 반복합니다.
위 알고리즘을 참고하여 주어진 리스트 안의 자료를 작은 수부터 큰 수 순서로 배열하여 출력하는 프로그램을 작성해 봅시다.

이렇게 해보세요!
책 p.86, p.87을 참고해서 풀어보세요!

1. 리스트 a를 매개 변수로 받아 a에 값이 남아 있을 때 까지 최소값을 찾아서 뽑아 리스트 result에 끝부터 저장하여 반환하는 함수 sel_sort를 작성하세요.
find_min_idx() 함수를 사용해야 합니다.

실행 결과
[1, 2, 3, 4, 5]
"""
# 쉽게 설명한 선택 정렬
# 입력: 리스트 a
# 출력: 정렬된 새 리스트

# 주어진 리스트에서 최솟값의 위치를 돌려주는 함수: O(n^2)
def find_min_idx(a):
    n = len(a)
    min_idx = 0
    for i in range(1, n):
        if a[i] < a[min_idx]:
            min_idx = i
    return min_idx
# 1번을 해보세요!

def sel_sort(a):
    n = len(a)
    result = []
    while a:
        min_idx = find_min_idx(a)
        value = a.pop(min_idx)
        result.append(value)
    return result

d = [2, 4, 5, 1, 3]
print(sel_sort(d))

"""일반적인 선택 정렬 알고리즘 | p.89
앞서 했던 쉽게 설명한 선택 정렬 알고리즘을 효율적으로 구현하는 알고리즘을 생각해 봅시다.
일반적인 선택 정렬 알고리즘은 입력으로 주어진 리스트 a안에서 직접 자료의 위치를 정렬시키는 알고리즘입니다.
처리할 대상 범위에서 최솟값을 찾아 그 값과 범위의 맨 앞에 있는 값을 서로 바꾸는 과정을 반복합니다.
이 과정이 한 번 끝날 때마다 범위 안의 맨 앞에 있는 값은 정렬이 끝난 것이므로 정렬 대상 범위에서 제외합니다.
위 알고리즘을 참고하여 향상된 선택 정렬 프로그램을 작성해 봅시다.
이렇게 해보세요!
책 p.89, p.90을 참고해서 풀어보세요!
1. 리스트 a를 매개 변수로 받아 자료 값중 가장 최솟값을 차례대로 정렬해주는 함수 sel_sort를 작성하세요.

실행 결과
[1, 2, 3, 4, 5]
"""
# 선택 정렬
# 입력: 리스트 a
# 출력: 없음(입력으로 주어진 a가 정렬됨)
# 1번을 해보세요!
def sel_sort(a):
    startidx = 0
    n = len(a)
    # minv = a[startidx]

    i = startidx + 1
    while startidx < n-1:
        # for i in range(startidx, n):
        print( f'i={i}, sidx={startidx}')
        if a[i] < a[startidx]:
            a[startidx], a[i] = a[i], a[startidx]
        i += 1
        if i == n:
            startidx += 1
            i = startidx + 1

def sel_sort(a):
    n = len(a)
    min_idx = 0
    for i in range(n-1):
        min_idx = i
        for j in range(i+1, n):
            if a[j] < a[min_idx]:
                min_idx = j
        a[i], a[min_idx] = a[min_idx], a[i]
        print(a)

d = [2, 4, 5, 1, 3]
print(d)
sel_sort(d)
print('Selection Sort: ', d)



""" < 삽입 정렬 = Insertion Sort >
쉽게 설명한 삽입 정렬 알고리즘 | p.92
삽입 정렬을 사용하여 리스트 안의 자료를 작은 수부터 큰 수 순서로 배열하는 알고리즘을 생각해 봅시다.

리스트 a에 아직 자료가 남아 있다면 → while a:
남은 자료 중에 맨 앞의 값을 뽑아냅니다. → value = a.pop(0)
그 값이 result의 어느 위치에 들어가면 적당할지 알아냅니다. → ins_idx = find_ins_idx(result, value)
3번 과정에서 찾아낸 위치에 뽑아낸 값을 삽입합니다. → result.insert(ins_idx, value)
1번 과정으로 돌아가 자료가 없을 때까지 반복합니다.
위 알고리즘을 참고하여 주어진 리스트 안의 자료를 작은 수부터 큰 수 순서로 배열하여 출력하는 프로그램을 작성해 봅시다.

이렇게 해보세요!
책 p.93, p.94을 참고해서 풀어보세요!
1. 리스트 a를 매개 변수로 입력 받아 삽입 정렬을 하여 리스트 result에 저장하여 반환하는 함수 ins_sort를 작성하세요.
실행 결과: [1, 2, 3, 4, 5]
"""
# 쉽게 설명한 삽입 정렬
# 입력: 리스트 a
# 출력: 정렬된 새 리스트

# 리스트 r에서 v가 들어가야 할 위치를 돌려주는 함수
def find_ins_idx(r, v):
    # 이미 정렬된 리스트 r의 자료를 앞에서부터 차례로 확인하여
    for i in range(0, len(r)):
        # v 값보다 i번 위치에 있는 자료 값이 크면
        # v가 그 값 바로 앞에 놓여야 정렬 순서가 유지됨
        if v < r[i]:
            return i
    # 적절한 위치를 못 찾았을 때는
    # v가 r의 모든 자료보다 크다는 뜻이므로 맨 뒤에 삽입
    return len(r)


# 1번을 해보세요!

def ins_sort(a):
    result = []
    while a:
        value = a.pop(0)
        ins_idx = find_ins_idx(result, value)
        result.insert(ins_idx, value)
    return result

d = [2, 4, 5, 1, 3]
print(ins_sort(d))

"""
일반적인 삽입 정렬 알고리즘 | p.96
앞서 했던 쉽게 설명한 삽입 정렬 알고리즘을 효율적으로 구현하는 알고리즘을 생각해 봅시다.
일반적인 삽입 정렬은 처리할 대상 범위에 있는 맨 앞 값을 적절한 위치에 넣는 과정을 반복합니다.
이 과정이 한 번 끝날 때마다 대상 범위에 있는 맨 앞의 값이 제 위치를 찾아 가므로 정렬 대상 범위는 하나씩 줄어듭니다.
위 알고리즘을 참고하여 향상된 삽입 정렬 프로그램을 작성해 봅시다.

이렇게 해보세요!
책 p.96, p.97을 참고해서 풀어보세요!
1. 리스트 a를 매개변수로 받아 삽입 정렬을 하는 함수 ins_sort를 작성하세요.
실행 결과: [1, 2, 3, 4, 5]
"""
# 삽입 정렬
# 입력: 리스트 a
# 출력: 없음(입력으로 주어진 a가 정렬됨)
# 1번을 해보세요!
def ins_sort(a):
    n = len(a)
    for i in range(1, n):
        key = a[i]
        j = i - 1
        while j >= 0 and a[j] > key:
            a[j + 1] = a[j]
            j -= 1
        a[j + 1] = key

d = [2, 4, 5, 1, 3]
ins_sort(d)
print(d)


"""  < 병합 정렬 >
쉽게 설명한 병합 정렬 알고리즘 | p.99
병합 정렬을 사용하여 리스트 안의 자료를 작은 수부터 큰 수 순서로 배열하는 알고리즘을 생각해 봅시다.

정렬할 리스트의 자료 개수가 한 개 이하이면 정렬할 필요가 없습니다.
전체 리스트를 절반으로 나눠 각각 재귀 호출을 통해 병합 정렬을 합니다.
두 그룹의 첫 번째 값을 비교하여 작은 값을 빼내 결과 리스트에 넣는 과정을 반복합니다.
하나의 리스트의 자료가 모두 사라지면 나머지 리스트의 자료를 모두 결과 리스트에 옮깁니다.
위 알고리즘을 참고하여 주어진 리스트 안의 자료를 작은 수부터 큰 수 순서로 배열하여 출력하는 프로그램을 작성해 봅시다.

이렇게 해보세요!
책 p.100, p.101을 참고해서 풀어보세요!
1. 리스트 a를 매개 변수로 받아 병합 정렬을 하여 리스트 result에 저장해 반환하는 함수 merge_sort를 작성하세요.
※ append()함수와 pop() 함수를 사용해야 합니다.
실행 결과 : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
"""


# 쉽게 설명한 병합 정렬
# 입력: 리스트 a
# 출력: 정렬된 새 리스트
# 1번을 해보세요!
def merge_sort(a):
    n = len(a)
    if n <= 1:
        return a

    result = []
    mid_idx = n // 2
    left = merge_sort(a[:mid_idx])
    right = merge_sort(a[mid_idx:])

    while left and right:
        if left[0] <= right[0]:
            result.append(left.pop(0))
        else:
            result.append(right.pop(0))

    while left:
        result.append(left.pop(0))
    while right:
        result.append(right.pop(0))

    return result

d = [6, 8, 3, 9, 10, 1, 2, 4, 7, 5]
print('단순 병합 정렬 입력:', d)
print('단순 병합 정렬 결과:', merge_sort(d))