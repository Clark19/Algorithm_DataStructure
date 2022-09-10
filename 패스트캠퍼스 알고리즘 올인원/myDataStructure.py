# 내가 구현한 큐
class Que:
  def __init__(self):
    self.q = list()
  def put(self, data):
    self.q.append(data)
  def get(self):
    return self.q.pop(0)
  def size(self):
    return len(self.q)
q = Que()
for i in range(10) :
  q.put(i)
print(q.get())
print(q.get())
print(q.get())




# 내가 구현한 싱글 링크드 리스트 Single Linked List

# 내가 구현한 Node : Linked List용 노드
class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next


# 내가 구현한 Linked List 링크드 리스트
class LinkedList:
  def __init__(self):
    self.head = None
    self.tail = None
    self.cnt = 0

  def append(self, data) :
    newNode = Node(data)
    if self.head == None:
      self.head = newNode
      self.tail = newNode
      self.cnt += 1
      return

    self.tail.next = newNode
    self.tail = newNode
    self.cnt += 1

  def delete(self, data) :
    # head == None
    if self.head == None :
      print('해당 값을 가진 노드가 없습니다.')
      return

    # head 삭제
    if self.head.data == data :
      targetNode = self.head
      self.head = targetNode.next
      del targetNode
      return
    
    # 중간 삭제와 tail 삭제는 한 로직으로 처리 됨.(tail.next는 None이므로)
    curNode = self.head
    while curNode.next :
      targetNode = curNode.next
      if targetNode.data == data :
        curNode.next = targetNode.next
        del targetNode
      else :
        curNode = targetNode

  # def size(self) :
  #   return self.cnt

  def getHead(self) :
    return self.head
  
  def print(self) :
    curNode = self.head
    while curNode :
      print(curNode.data)
      curNode = curNode.next

  def search(self, data):
    if self.head == '':
        print ("리스트가 비었습니다.")
        return

    curNode = self.head
    while curNode:
      if curNode.data == data :
        return curNode
      curNode = curNode.next

    print("해당 값을 가진 노드가 없습니다.")

lList = LinkedList()
for i in range(1, 7) :
  lList.append(i)
lList.print()
print()

# deleting head node
lList.delete(1)
lList.print()
print()

# deleting 중간 node
lList.delete(3)
lList.print()
print()

# 끝 노드 삭제
lList.delete(6)
lList.print()
print()

# 내가 구현한 Double Linked List 더블 링크드 리스트
class Node :
  def __init__(self, data, prev=None, next=None) :
    self.data = data
    self.prev = prev
    self.next = next

# Double Linked List
class DLinkedList :
  def __init__(self, data=None):
    if data == None :
      self.head = None
    else :
      self.head = Node(data)
    self.tail = self.head
  
  def append(self, data) :
    newNode = Node(data)
    if self.head == None :
      self.head = newNode
      self.tail = newNode
      return
  
    self.tail.next = newNode
    newNode.prev = self.tail
    self.tail = newNode

  def print(self) :
    curNode = self.head
    while curNode :
      print(curNode.data)
      curNode = curNode.next

  def search_from_head(self, data) :
    curNode = self.head
    while curNode :
      if curNode.data == data :
        return curNode
      curNode = curNode.next
    return None

  def search_from_tail(self, data) :
    curNode = self.tail
    while curNode :
      if curNode.data == data :
        return curNode
      curNode = curNode.prev
    return None

  def insert_before(self, newData, targetData) :
    newNode = Node(newData)
    if self.head == None :
      self.head = newNode
      self.tail = newNode
      return True
    
    curNode = self.tail
    while curNode.data != targetData :
      curNode = curNode.prev
      if curNode == None :
        return False

    # while 루프 빠져 나왔다는건 targetData가 있는 노드 찾았다는 것
    prevNode = curNode.prev

    prevNode.next = newNode
    newNode.prev = prevNode

    newNode.next = curNode
    curNode.prev = newNode

    return True




dList = DLinkedList()
for i in range(1, 7) :
  dList.append(i)
dList.print()
print()

targetNode = dList.search_from_head(4)
if targetNode != None :
  print(targetNode.data)
else :
  print('no search data')

targetNode = dList.search_from_tail(5)
if targetNode != None :
  print(targetNode.data)
else :
  print('no search data')


if dList.insert_before(1.5, 2) :
  dList.print()
else :
  print('fail: insertion')
print()

# # deleting head node
# dList.delete(1)
# dList.print()
# print()

# # deleting 중간 node
# dList.delete(3)
# dList.print()
# print()

# # 끝 노드 삭제
# dList.delete(6)
# dList.print()
# print()



''' Tree 트리 (그래프의 일종)
'''
from queue import Queue

# 트리 구조에서 사용할 버텍스/노드(Vertex or Node)
class Vertex :
  def __init__(self, data):
    self.data = data
    self.left = None
    self.right = None

  def add(self, left, right):
    self.left = left
    self.right = right

  # 전위 순회 결과 리스트로 반환
  def preorder(self) :
    result = []
    result += [self.data]
    if self.left != None :
        result += self.left.preorder()
    if self.right != None :
        result += self.right.preorder()
    return result

  # 중위 순회 결과 리스트로 반환
  def inorder(self) :
    result = []
    if self.left != None :
        result += self.left.inorder()
    result += [self.data]
    if self.right != None :
        result += self.right.inorder()
    return result

  # 후위 순회 결과 리스트로 반환
  def postorder(self) :
    result = []
    if self.left != None :
        result += self.left.postorder()
    if self.right != None :
        result += self.right.postorder()
    result += [self.data]
    return result


# BFS 탐색(깊이 우선 탐색) 결과 리스트로 반환
def BFS(tree):
  q = Queue()
  result = []

  q.put(tree)
  while len(q.queue) > 0 :
    curNode = q.get()
    if curNode == None :
      continue

    result.append(curNode.data)
    q.put(curNode.left)
    q.put(curNode.right)

  return result

def test_tree() :
  # 트리 생성
  root = Vertex(1)
  root.left = Vertex(2)
  root.right = Vertex(3)
  vtx1 = Vertex(4)
  vtx2 = Vertex(5)

  vtx = root.left
  vtx.left = vtx1
  vtx.right = vtx2

  vtx1 = Vertex(6)
  vtx2 = Vertex(7)
  vtx = root.right
  vtx.left = vtx1
  vtx.right = vtx2


  print('트리 DFS 순회')
  print(root.preorder())
  print(root.inorder())
  print(root.postorder())
  print('트리 BFS 순회')
  print(BFS(root))


test_tree()


''' 트리의 최대 너비 구하기
getWidth 함수를 작성하세요.
'''
class Tree:
  def __init__(self, i, l, r):
    self.index = i
    self.left = l
    self.right = r
    self.depth = -1

  def setDepth(self, d):
    self.depth = d

  def addNode(self, i, l, r):
    if self.index == None or self.index == i:
      self.index = i
      self.left = Tree(l, None, None) if l != None else None
      self.right = Tree(r, None, None) if r != None else None
      return True

    else:
      flag = False

      if self.left != None:
        flag = self.left.addNode(i, l, r)

      if flag == False and self.right != None:
        flag = self.right.addNode(i, l, r)

      return flag


def inorder(tree, depth):
  result = []

  if tree.left != None:
    result += inorder(tree.left, depth + 1)

  tree.setDepth(depth)
  result.append(tree)

  if tree.right != None:
    result += inorder(tree.right, depth + 1)

  return result


def getWidth(myTree):
  '''
  myTree의 너비가 가장 넓은 레벨과 그 레벨의 너비를 반환하는 함수를 작성하세요.
  가장 넓은 레벨 l과 그 레벨의 너비 w를 튜플로 반환해야 합니다.

  반환값 형식 : (l, w)
  '''
  result = inorder(myTree, 1)
  n = len(result)

  # 정점의 개수는 1000개 이하다. (입력조건)
  # 깊이 최대값 1000
  left = [1001 for i in range(1001)]
  right = [-1 for i in range(1001)]
  maxDepth = 0

  for i in range(n):
    d = result[i].depth

    left[d] = min(left[d], i)
    right[d] = max(right[d], i)

    maxDepth = max(maxDepth, d)

  ansDepth = 0
  ans = 0

  for i in range(1, maxDepth + 1):
    temp = right[i] - left[i] + 1

    if temp > ans:
      ansDepth = i
      ans = temp

  return (ansDepth, ans)


def testTree():
  myTree = Tree(None, None, None)

  n = int(input())

  for i in range(n):
    myList = [int(v) for v in input().split()]

    if myList[1] == -1:
      myList[1] = None

    if myList[2] == -1:
      myList[2] = None

    myTree.addNode(myList[0], myList[1], myList[2])

  print(*getWidth(myTree))

testTree()



''' 최소 힙 구현하기
우선순위 큐를 구현하기 위해 최소 힙을 만들어봅시다.

최소 힙에 입력되는 값은 모두 정수입니다.


지시사항
입력
첫 번째 줄에 힙이 수행할 명령의 수를 나타내는 정수 nnn을 입력합니다. ( 1≤n≤5400001 \le n \le 5400001≤n≤540000)

두 번째 줄부터 n개의 줄에 걸쳐 수행할 명령을 입력합니다. 명령의 종류는 다음과 같습니다.

0 x : 정수 x를 힙에 입력 (0≤x≤5400000 \le x \le 5400000≤x≤540000)
1 : 힙의 우선순위가 가장 높은 원소 제거
2 : 힙의 우선순위가 가장 높은 원소 조회
입력 예시
8
0 1
0 4
0 3
0 2
2
1
2
1
Copy
출력 예시
1
2
'''
# 배열을 이용하여 구현한 방법
class PriorityQueue_byArray:
  '''
  우선순위 큐를 힙으로 구현합니다
  (min Heap 최소 힙이다)
  '''

  def __init__(self):
    # 우선순위 큐를 일반 배열을 이용한 최소 힙으로 구현
    self.data = [0]  # 첫번째 원소로 더미데이터 0 삽입

  def push(self, value):
    '''
    우선순위 큐에 value를 삽입합니다.
    '''
    self.data.append(value)
    index = len(self.data) - 1

    # 반복문 탈출시 삽입한 데이터가 (최소)힙 내에서 배치가 완료된거.
    while index != 1:  # 인덱스가 1이란건 루트 노드 란 뜻. 루트 노드까지 반복문 돌기
      if self.data[index // 2] > self.data[index]:
        self.data[index], self.data[index // 2] = self.data[index // 2], self.data[index]
        index = index // 2
      else:  # (최소힙에서) 자식 노드의 값이 부모 노드 값보다 크거나 같을때, 배치 완료이므로 반복문 탈출
        break

  # 주의: 그냥 삭제 기능임
  def pop(self):
    '''
    우선순위가 가장 높은 원소를 제거합니다.
    '''
    if len(self.data) == 1:
      return
    # 마지막 노드를 루트 노드 자리로 이동.
    # self.data[1], self.data[-1] = self.data[-1], self.data[1]
    self.data[1] = self.data[-1]
    self.data.pop()

    index = 1
    while True:  # index < len(self.data) :
      priority = -1  # 왼쪽으로 갈지 우측으로 갈지 결정해주는 변수
      # 1. 아무 자식도 없는 경우. [0, 1,2,3,4] 에서 4번 인덱스의 왼쪽 자식은 8번(idx*2)가 됨.
      # 따라서 index가 해당 범위 넘어가면 큐에 아무것도 없으므로 조건 건 거임.
      if len(self.data) - 1 < index * 2:
        break;
      # 2. 왼쪽 자식만 있는 경우
      elif len(self.data) - 1 < index * 2 + 1:
        priority = index * 2
      else:  # 좌우 모두 자식이 있는 경우
        if self.data[index * 2] < self.data[index * 2 + 1]:
          priority = index * 2
        else:
          priority = index * 2 + 1

      if self.data[index] > self.data[priority]:
        self.data[index], self.data[priority] = self.data[priority], self.data[index]
        index = priority
      else:  # 최소힙의 요건 충족하므로 루프 탈출
        break;

  def top(self):
    '''
    우선순위가 가장 높은 원소를 반환합니다. 만약 우선순위 큐가 비어있다면 -1을 반환합니다.
    '''
    if len(self.data) == 1:
      return -1
    else:
      return self.data[1]  # 루트 노드 리턴



''' 파이썬 내장 Heap 라이브러리 사용해보기 위한 우선순위 큐에서 (최소)힙 사용
'''
# 최소 힙 min Heap
import heapq
# heapq 라는 파이썬 내장 라이브러리(최소힙) 이용하면 리스트를 힙처럼 이용가능
# 배열로 직접 구현했을때 보다 구현 매우 간단하고, 더 성능 좋음.
class PriorityQueue:
  '''
  (min Heap 최소 힙이다)
  '''

  def __init__(self):
    # 우선순위 큐를 최소 힙으로 구현하기 위한 원본 자료구조[list]
    self.data = []  # 힙엔 더미데이터 넣을 필요없음.

  def push(self, value):
    '''
    우선순위 큐에 value를 삽입.
    '''
    # 힙처럼 사용할 자료구조를 첫번재 인자, 둘째엔 삽입할 데이터 넣으면 됨.
    heapq.heappush(self.data, value)

  def pop(self):
    '''
    우선순위가 가장 높은 원소를 제거합니다.
    '''
    # pop(삭제?) 시 원본 자료구조가 비어있지 않은지 체크후 호출해야 함.
    if len(self.data) > 0:
      return heapq.heappop(self.data)

  def top(self):
    '''
    우선순위가 가장 높은 원소를 반환. 만약 우선순위 큐가 비어있다면 -1을 반환.
    '''
    if len(self.data) == 0:
      return -1
    else:
      return self.data[0]  # 루트 노드 리턴


def heap_test():
  pQ = PriorityQueue()
  n = int(input())

  for i in range(n):
    line = [int(v) for v in input().split()]
    if line[0] == 0:
      pQ.push(line[1])
    elif line[0] == 1:
      pQ.pop()
    elif line[0] == 2:
      print(pQ.top())

heap_test()



# import heapq
# (최대)힙
class PriorityQueue:
  '''
  우선순위 큐를 (최대)힙으로 구현합니다
   -1 곱해서 데이터 넣고 뺄때도 -1 곱해서 리턴만 해주면 됨
  '''

  def __init__(self):
    self.data = []

  def push(self, value):
    '''
    우선순위 큐에 value를 삽입합니다.
    '''
    heapq.heappush(self.data, -value)

  def pop(self):
    '''
    우선순위가 가장 높은 원소를 제거합니다.
    '''
    if len(self.data) > 0:
      return heapq.heappop(self.data)

  def top(self):
    '''
    우선순위가 가장 높은 원소를 반환합니다. 만약 우선순위 큐가 비어있다면 -1을 반환합니다.
    '''
    if len(self.data) == 0:
      return -1
    else:
      return -self.data[0]


'''    
절댓값 힙 구현하기
이번에 구현할 힙은 절댓값 힙입니다. 즉 원소의 절댓값이 작을수록 우선순위가 높습니다.

절댓값이 같은 값이 2개 이상 있다면, 가장 작은 수의 우선순위가 더 높다고 계산합니다.


지시사항
입력
첫 번째 줄에 힙이 수행할 명령의 수를 나타내는 정수 nnn을 입력합니다. ( 1≤n≤5400001 \le n \le 5400001≤n≤540000)

두 번째 줄부터 n개의 줄에 걸쳐 수행할 명령을 입력합니다. 명령의 종류는 다음과 같습니다.

0 x : 정수 x를 힙에 입력 (−540000≤x≤540000-540000 \le x \le 540000−540000≤x≤540000)
1 : 힙의 우선순위가 가장 높은 원소 제거
2 : 힙의 우선순위가 가장 높은 원소 조회
입력 예시
8
0 5
0 4
0 -4
0 2
2
1
2
1
Copy
출력 예시
2
-4
Copy
Tip!
힙에 정수 x를 저장할 때

(x의 절댓값, x의 값)
Copy
형태의 튜플을 저장하는 방법으로 구현할 수도 있습니다.
'''
# import heapq
# 절대값 힙
class PriorityQueue:
  '''
  우선순위 큐를 힙으로 구현합니다
  '''

  def __init__(self):
    self.data = []

  def push(self, value):
    '''
    우선순위 큐에 value를 삽입합니다.
    '''
    heapq.heappush(self.data, (abs(value), value))

  def pop(self):
    '''
    우선순위가 가장 높은 원소를 제거합니다.
    '''
    if len(self.data) > 0:
      return heapq.heappop(self.data)

  def top(self):
    '''
    우선순위가 가장 높은 원소를 반환합니다. 만약 우선순위 큐가 비어있다면 -1을 반환합니다.
    '''
    if len(self.data) == 0:
      return -1
    else:
      return self.data[0][1]






'''
heapSort 함수를 구현하세요.
힙정렬 구현하기
n개의 숫자가 주어질 때, 이를 오름차순으로 정렬하는 프로그램을 작성하세요. 단, 우선순위 큐를 이용하여 구현하도록 합니다.

입력값
첫 번째 줄에 n개의 숫자가 공백으로 구분되어 주어집니다.

결과값
첫 번째 줄에 n개의 숫자를 정렬한 결과를 출력합니다.


지시사항
입력 예시
10 9 8 7 6 5 4 3 2 1
Copy
출력 예시
1 2 3 4 5 6 7 8 9 10
'''
# 최소 힙 min Heap
import heapq

# heapq 라는 파이썬 내장 라이브러리(최소힙) 이용하면 리스트를 힙처럼 이용가능
# 배열로 직접 구현했을때 보다 구현 매우 간단하고, 더 성능 좋음.
class PriorityQueue:
  '''
  우선순위 큐를 힙으로 구현합니다
  (min Heap 최소 힙이다)
  '''

  def __init__(self):
    # 우선순위 큐를 최소 힙으로 구현하기 위한 원본 자료구조[list]
    self.data = []  # 힙엔 더미데이터 넣을 필요없음.

  def push(self, value):
    '''
    우선순위 큐에 value를 삽입합니다.
    '''
    # 힙처럼 사용할 자료구조를 첫번재 인자, 둘째엔 삽입할 데이터 넣으면 됨.
    heapq.heappush(self.data, value)

  # 주의: 그냥 삭제 기능임
  def pop(self):
    '''
    우선순위가 가장 높은 원소를 제거합니다.
    '''
    # pop(삭제?) 시 원본 자료구조가 비어있지 않은지 체크후 호출해야 함.
    if len(self.data) > 0:
      return heapq.heappop(self.data)

  def top(self):
    '''
    우선순위가 가장 높은 원소를 반환합니다. 만약 우선순위 큐가 비어있다면 -1을 반환합니다.
    '''
    if len(self.data) == 0:
      return -1
    else:
      return self.data[0]  # 루트 노드 리턴


def heapSort(items):
  '''
  items에 있는 원소를 heap sort하여 리스트로 반환하는 함수를 작성하세요.

  단, 이전에 작성하였던 priorityQueue를 이용하세요.
  '''

  result = []
  # 나만의 풀이법
  # buffer = []
  # for item in items :
  #     heapq.heappush(buffer, item)
  # for item in range(len(buffer)) :
  #     result.append(heapq.heappop(buffer))

  # # 강사님 코드에서 좀 고친거
  pq = PriorityQueue()
  for item in items:
    pq.push(item)
  for i in range(len(items)):
    result.append(pq.pop())
  return result



''' 중간값 찾기 - 힙 두개(최소,최대 힙) 이용
n개의 숫자가 차례대로 주어질 때, 매 순간마다 “지금까지 입력된 수 중에서 중간값”을 반환하는 프로그램을 작성하세요.


지시사항
입력
첫 번째 줄에 입력될 수의 개수를 나타내는 정수 nnn이 주어집니다. (2≤n≤150,0002 \le n \le 150,0002≤n≤150,000)

두 번째 줄에 n개의 정수가 공백으로 구분되어 입력됩니다.

입력되는 n개의 정수들을 xxx라고 할 때, −5,000≤x≤5,000-5,000 \le x \le 5,000−5,000≤x≤5,000을 만족합니다.

출력
n개의 정수가 차례대로 주어질 때, 매 순간마다의 중간값을 리스트로 담아 반환하는 find_mid 함수를 작성하세요.

입력된 수의 개수가 짝수라면 중간값이 2개입니다. 이러한 경우에는 더 작은 값을 저장하세요.

입력 예시 1
10
1 2 3 4 5 6 7 8 9 10
Copy
출력 예시 1
1 1 2 2 3 3 4 4 5 5
Copy
입력 예시 2
7
1 -2 -5 10 4 7 5
Copy
출력 예시 2
1 -2 -2 -2 1 1 4
'''
# 중간값 찾기 - 힙 두개(최소,최대 힙) 이용
# import heapq
def find_mid(nums):
  '''
  n개의 정수들을 담고 있는 배열 nums가 매개변수로 주어집니다.
  nums의 각 정수들이 차례대로 주어질 때, 매 순간마다
  "지금까지 입력된 수 중에서 중간값"을 리스트로 저장하여 반환하세요.
  '''

  n = len(nums)

  result = []
  l = []  # 최대 힙(이므로 값 넣을때 -1 곱해서 넣고 빼와야 함. 즉, 최대힙에 -부호를 붙인 값을 넣는 방식으로 구현했다면 힙에 들어가있는 값을 이용할때도 -를 붙여야 함)
  r = []  # 최소 힙

  for i in range(n):
    x = nums[i]

    # l또는 r이 비어있는 경우
    if not l or not r:
      heapq.heappush(l, -x)
    else:  # l, r 둘다 비어있지 않은 경우
      if x > -l[0]:  # 최대힙 루트노드보다 타겟값이 큰경우 우측 최소합에 넣음
        heapq.heappush(r, x)
      else:
        heapq.heappush(l, -x)

    # 두 힙의 크기를 조정
    # l과 r이 갖고 있는 자료의 개수는 같아야 하며,
    # 총 자료의 개수가 홀수라면, l(좌측 최대힙)이 하나 더 많이 가지고 있게 한다
    # 라는 문제 해결 방식으로 문제 푸는 사람이 정했으므로
    while not (len(l) == len(r) or len(l) == len(r) + 1):
      # 크기 조정

      # l이 들고 있는 개수가 r의 개수보다 2개 이상이다.
      if len(l) > len(r):
        # l에서 값을 뽑아와서 r에 넣어준다
        heapq.heappush(r, -heapq.heappop(l))
      # r이 l보다 많이 갖고 있는 경우
      else:
        # r에서 값을 뽑아와서
        heapq.heappush(l, -heapq.heappop(r))
    # 입력으로 들어온(nums) 모든 수를 l과 r 힙에 균형있는 규칙에 따라 넣은 상태
    result.append(-l[0])

  return result