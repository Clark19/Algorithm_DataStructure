class Node {
  constructor(value, next) {
    this.value = value
    this.next = next || null
  }
}

class LinkedList {
  constructor(headNode) {
    this.head = headNode;
  }

  insert(node) {
    let curNode = this.head
    while(curNode.next) {
      curNode = curNode.next
    }
    curNode.next = node
  }

  remove(value) {
    let preNode = null
    let curNode = this.head
    while(curNode.value !== value) {
      preNode = curNode
      curNode = curNode.next
    }
    preNode.next = curNode.next
    curNode.next = null

  }

  search(value) {
    let curNode = this.head
    while(curNode.value !== value) {
      curNode = curNode.next
    }
    return curNode
  }

  print() {
    let curNode = this.head
    while(curNode.next) {
      console.log(curNode.value)
      curNode = curNode.next
    }
    console.log(curNode.value)
  }
}


const linkedList = new LinkedList(new Node(1))
linkedList.print()
linkedList.insert(new Node(3))
linkedList.insert(new Node(5))
linkedList.print()
linkedList.remove(3)
linkedList.print()
