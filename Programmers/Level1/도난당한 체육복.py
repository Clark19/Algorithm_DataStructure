"""
'체육복' 문제: https://programmers.co.kr/learn/courses/30/lessons/42862
전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가
매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
"""
n = [5,5,3, 5,5,5,7] #전체 학생의 수
expected = [5,4,2, 4,4,5,6]
lost = [ [2,4], [2,4], [3], [2,4],[2,4],[2,4],[2,4] ] #체육복을 도난당한 학생들의 번호가 담긴 배열
reserve = [ [1,3,5], [3], [1], [2],[0,2],[2,4],[2,6] ] #여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve

def solution0(n, lost, reserve):
    avail_reserver = list.copy(reserve)
    final_lost = []

    for lostNum in lost:
        if lostNum not in reserve:
            final_lost.append(lostNum)
        else:
            avail_reserver.remove(lostNum)

    # 비축자번호에 인접한 분실자번호 제거(최종분실자 배열에서)
    i = 0
    while True:
        if len(final_lost) == 0 or len(final_lost) == i:
            break
        lostNum = final_lost[i]
        if lostNum - 1 in avail_reserver:
            final_lost.remove(lostNum)
            avail_reserver.remove(lostNum - 1)
            continue
        if lostNum + 1 in avail_reserver:
            final_lost.remove(lostNum)
            avail_reserver.remove(lostNum + 1)
            continue
        i += 1

    answer = n - len(final_lost)
    return answer

# 타인 코드 리뷰 후, 안보고 코딩하면서 개선한 것
def solution(n, lost, reserve):
    avail_reserve = set(reserve) - set(lost)
    final_lost = set(lost) - set(reserve)

    # 교복 못 빌리는 학생 번호 배열 생성(제거통해)
    for num in avail_reserve:
        front = num - 1
        back = num + 1
        if front in final_lost:
            final_lost.remove(front)
        elif back in final_lost:
            final_lost.remove(back)

    answer = n - len(final_lost)
    return answer

for i in range(len(lost)):
    ret = solution(n[i], lost[i], reserve[i])
    assert expected[i] == ret, f'{expected[i]} != {ret}'