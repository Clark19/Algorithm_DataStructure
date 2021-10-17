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
# 트리 구조에서 사용할 버텍스/노드(Vertex or Node)
class Vertex :
  def __init__(self, data):
    self.data = data
    self.left = None
    self.right = None

  def add(self, left, right):
    self.left = left
    self.right = right

  # 전위순회 결과 리스트로 반환
  def preorder(self) :
    result = []
    result += [self.data]
    if self.left != None :
        result += self.left.preorder()
    if self.right != None :
        result += self.right.preorder()
    return result

  # 중위순회 결과 리스트로 반환
  def inorder(self) :
    result = []
    if self.left != None :
        result += self.left.preorder()
    result += [self.data]
    if self.right != None :
        result += self.right.preorder()
    return result

  # 후위순회 결과 리스트로 반환
  def postorder(self) :
    result = []
    if self.left != None :
        result += self.left.preorder()
    if self.right != None :
        result += self.right.preorder()
    result += [self.data]
    return result

def test_tree() :
  # global root
  root = Vertex(1)
  root.add(Vertex(2), Vertex(3))
  print(root.preorder())
  print(root.inorder())
  print(root.postorder())


test_tree()