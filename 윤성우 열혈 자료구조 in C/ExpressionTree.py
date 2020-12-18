"""
윤성우 열혈 자료구조 in C에 나온 수식 트리 관련 구현 중 일부를 내가 파이썬으로 구현해 본 것.
수식 트리(Expression Tree)는 이진 트리다(Binary Tree)
중위 표기법의 수식 -> 후위 표기법의 수식 -> 수식 트리(이진 트리 이용해 표현- 이진 트리는 링크드 리스트 이용)
"""

def isNumber(string):
    try:
        float(string)
        return True
    except ValueError:
        return False


class Node(object):
    def __init__(self):
        self.data = None
        self.left = self.right = None

    def setData(self, data):
        self.data = data

    def makeRightSubTree(self, node):
        self.right = node

    def makeLeftSubTree(self, node):
        self.left = node


def preorder_traverse(node, visitaction):
    if node is None:
        return

    visitaction(node.data)
    preorder_traverse(node.left, visitaction)
    preorder_traverse(node.right, visitaction)


def inorder_traverse(node, visitaction):
    if node is None:
        return

    if not isNumber(node.data):
        print('(', end='')
    inorder_traverse(node.left, visitaction)
    visitaction(node.data)
    inorder_traverse(node.right, visitaction)
    if not isNumber(node.data):
        print(')', end='')


def postorder_traverse(node, visitaction):
    if node is None:
        return

    postorder_traverse(node.left, visitaction)
    postorder_traverse(node.right, visitaction)
    visitaction(node.data)


def show_data(data):
    print(data, end='  ')


def make_exp_tree(exp):
    stack = list()
    node = None
    num = 0
    op = ''
    subtree = ''
    for char in exp:
        node = Node()
        if isNumber(char):
            node.setData(float(char))
        else: # isOperator
            node.makeRightSubTree(stack.pop())
            node.makeLeftSubTree(stack.pop())
            node.setData(char)
        stack.append(node)
    return stack.pop()


def calculate_exp_tree(exp_node):
    if exp_node.left is None and exp_node.right is None:
        return exp_node.data

    op1 = calculate_exp_tree(exp_node.left)
    op2 = calculate_exp_tree(exp_node.right)

    if exp_node.data == '+':
        return op1 + op2
    elif exp_node.data == '-':
        return op1 - op2
    elif exp_node.data == '*':
        return op1 * op2
    elif exp_node.data == '/':
        return op1 / op2
    return 0


exp = "12+7*"
exp_node = make_exp_tree(exp)
preorder_traverse(exp_node, show_data); print()
inorder_traverse(exp_node, show_data); print()
postorder_traverse(exp_node, show_data); print()
print(f'연산의 결과: {calculate_exp_tree(exp_node)}')
