
class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next


class LinkedList:
    def __init__(self, head=None):
        self.head = head
        self.length = 0

    def setHead(self, node):
        self.head = node

    def getHead(self):
        return self.head

    def getAt(self, pos):
        if self.head:
            tempNode = self.head
            for idx in range(1, pos+1):
                if not tempNode.next: break
                tempNode = tempNode.next
        return tempNode

    def add(self, data, pos=None):
        """ data: Node or value """
        position = pos
        dataNode = None
        if isinstance(data, Node):
            dataNode = data
        elif not isinstance(data, Node):
            dataNode = Node(data)

        if self.head:
            if position is None:
                position = self.length
                endNode = self.getAt(position)
                endNode.next = dataNode
            elif position is not None:
                position = position - 1
                preNode = self.getAt(position)
                dataNode.next = preNode.next
                preNode.next = dataNode
        elif self.head is None:
            self.setHead(dataNode)

        self.length += 1

    def delete(self, data):
        isSucess = False
        if not self.head:
            print('Empty List')
            return isSucess

        # 강사 코드 참조 후 안보고 구현해 본 것.
        if self.head.data == data:
            tempNode = self.head
            self.head = self.head.next
            print('delete:', tempNode.data)
            del tempNode
            isSucess = True
        else:
            tempNode = self.head
            while tempNode.next:
                if tempNode.next.data == data:
                    nextNode = tempNode.next
                    tempNode.next = nextNode.next
                    print('delete:', tempNode.data)
                    del nextNode
                    isSucess = True
                else:
                    tempNode = tempNode.next

        # 내가 안 보고 구현한 delete 부분
        # beforeNode = self.head
        # tempNode = self.head
        # if self.head.data == data:
        #     self.head = self.head.next
        #     print('delete:', tempNode.data)
        #     del tempNode
        #     return True
        #
        # while tempNode:
        #     if tempNode.data == data:
        #         beforeNode.next = tempNode.next
        #         print('delete:', tempNode.data)
        #         del tempNode
        #         isSucess = True
        #         break
        #     elif tempNode.next:
        #         beforeNode = tempNode
        #         tempNode = tempNode.next
        #         continue
        #     isSucess = False
        #     break
        return isSucess

    def addData(self, value):
        self.add(self, value)

    def addNode(self, node):
        self.add(self, node)

    def printAll(self):
        if not self.head:
            print('Empty List')
            return
        tmpNode = self.head
        while tmpNode.next:
            print(tmpNode.data, end=' ')
            tmpNode = tmpNode.next
        print(tmpNode.data, '\n')


def show():
    linkedList.printAll()

if __name__ == '__main__':
    node1 = Node(1)
    linkedList = LinkedList(node1)
    head = linkedList.getHead()
    for index in range(2, 11):
        linkedList.add(index)

    linkedList.printAll()
    node = Node(1.5)
    linkedList.add(node, 1)
    linkedList.printAll()
    show()

    print('is removing success?', linkedList.delete(1))
    show()
    print('is removing success?', linkedList.delete(3))
    show()
    print('is removing success?', linkedList.delete(10))
    show()