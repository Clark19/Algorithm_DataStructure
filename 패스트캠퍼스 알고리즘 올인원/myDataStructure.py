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