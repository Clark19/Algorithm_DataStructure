# 완주하지 못한 선수 - https://programmers.co.kr/learn/courses/30/lessons/42576?language=python3
from collections import Counter

# 느린 브루트 포스 방식(직접 구현): 채점 기준 시간 초과
def solution0(participant, completion):
    answer = ''
    for cName in completion:
        if cName in participant:
            participant.remove(cName)

    answer = participant[0]
    return answer

#느린 방식2
def solution1(participant, completion):
    answer = ''
    pdic = dict()
    cdic = dict()
    for pName in participant:
        pdic[pName] = pdic.setdefault(pName, 0) + 1
    for cName in completion:
        cdic[cName] = cdic.setdefault(cName,0) + 1

    if len(pdic) > len(cdic):
        for k in pdic.keys():
            if k not in cdic.keys():
                answer = k
    elif len(pdic) == len(cdic):
        for pk,pv in pdic.items():
            for ck,cv in cdic.items():
                if pk == ck and pv != cv:
                    answer = pk

    return answer

print(solution1(['leo', 'kiki', 'eden'], ['eden', 'kiki']))
print(solution1(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola']))
print(solution1(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']))
print()

# 나도 잘 생각하면 논리적으로 풀 수 있는 구현방법: -> 구현 해봤음
def solution2(participant, completion):
    participant.sort()
    completion.sort()
    for i in range(len(completion)):
        if participant[i] != completion[i]:
            return participant[i]
    return participant[len(participant)-1]

# 간단구현 & 성능도 좋음. collections.Counter 클래스에 대해 알아야 풀 수 있음.
# from collections import Counter
def solution3(participant, completion):
    answer = Counter(participant) - Counter(completion)
    answer = list(answer)[0]
    return answer

# 성능이 제일 좋음. hash 함수 이용. hash값은 key가 다르면 모두 다르다는 특징을 이용한 구현.
def solution4(participant, completion):
    temp = 0
    dic = {}
    for part in participant:
        dic[hash(part)] = part
        temp += int(hash(part))
    for com in completion:
        temp -= hash(com)
    answer = dic[temp]

    return answer
print(solution4(['leo', 'kiki', 'eden'], ['eden', 'kiki']))
print(solution4(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola']))
print(solution4(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']))