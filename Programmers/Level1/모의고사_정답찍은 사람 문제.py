# 모의고사_정답찍은 사람 문제 - https://programmers.co.kr/learn/courses/30/lessons/42840

#  내가 푼 문제
def solution0(answers):
    answer = []
    length = range(len(answers))
    num = 0
    p1 = [x % 5 + 1 for x in length]
    p2p = [2, 1, 2, 3, 2, 4, 2, 5]
    p2 = []
    for i in length:
        p2.append(p2p[i % len(p2p)])
    p3p = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    p3 = [ p3p[i % len(p3p)] for i in length ]
    # answerPersonCnt = {'1':0, '2':0, '3':0}
    answerPersonCnt = [0 for i in range(3)]

    for i in length:
        num = answers[i]
        if num == p1[i]:
            answerPersonCnt[0] += 1
        if num == p2[i]:
            answerPersonCnt[1] += 1
        if num == p3[i]:
            answerPersonCnt[2] += 1

    maxAnswer = max(answerPersonCnt)
    for i in range(len(answerPersonCnt)):
        if maxAnswer == answerPersonCnt[i]:
            answer.append(i+1)

    return answer

# 남 코드 리뷰 후, 안보고 내 구현 개선한 거. enumerate 사용
def solution0_1(answers):
    maxRightAnswerPerson = []
    personAnswerCnt = [0] * 3
    pattern1 = [1, 2, 3, 4, 5]
    pattern2 = [2, 1, 2, 3, 2, 4, 2, 5]
    pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    LEN_P1 = len(pattern1)
    LEN_P2 = len(pattern2)
    LEN_P3 = len(pattern3)

    for idx, answer in enumerate(answers):
        if answer == pattern1[idx % LEN_P1]:
            personAnswerCnt[0] += 1
        if answer == pattern2[idx % LEN_P2]:
            personAnswerCnt[1] += 1
        if answer == pattern3[idx % LEN_P3]:
            personAnswerCnt[2] += 1

    MAX_CNT = max(personAnswerCnt)
    for idx, cnt in enumerate(personAnswerCnt):
        if MAX_CNT == cnt:
            maxRightAnswerPerson.append(idx + 1)

    return maxRightAnswerPerson

# Short Coding
def solution(answers):
    p = [[1, 2, 3, 4, 5],
         [2, 1, 2, 3, 2, 4, 2, 5],
         [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    s = [0] * len(p)

    for q, a in enumerate(answers):
        for i, v in enumerate(p):
            if a == v[q % len(v)]:
                s[i] += 1
    return [i + 1 for i, v in enumerate(s) if v == max(s)]

testList1 = [1,2,3,4,5]
testList2 = [1,3,2,4,2]
print(solution0_1(testList1))
print(solution0_1(testList2))

# cycle()함수와 제너레이터 이용 구현법
from itertools import cycle

def solution(answers):
    giveups = [
        cycle([1,2,3,4,5]),
        cycle([2,1,2,3,2,4,2,5]),
        cycle([3,3,1,1,2,2,4,4,5,5]),
    ]
    scores = [0, 0, 0]
    for num in answers:
        for i in range(3):
            if next(giveups[i]) == num:
                scores[i] += 1
    highest = max(scores)

    return [i + 1 for i, v in enumerate(scores) if v == highest]