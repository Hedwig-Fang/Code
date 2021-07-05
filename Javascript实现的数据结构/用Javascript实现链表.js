class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        // 代表链表的头节点
        this.header = new Node('header');
    }
    // find: 辅助函数，遍历链表，查找特殊节点
    find(element) {
        let currNode = this.header;
        while (currNode.element !== element) {
            currNode = currNode.next;
        }
        return currNode;
    }
    // insert：链表插入节点函数
    insert(newElement, hasElement) {
        const newNode = new Node(newElement);
        const currNode = this.find(hasElement);
        // 请思考为什么这两句代码为什么不能切换顺序？
        newNode.next = currNode.next;
        currNode.next = newNode;

    }
    // findPrevious： 辅助函数，寻找待删除节点的前面那个节点
    findPrevious(element) {
        let currNode = this.header;
        while (!(currNode.next === null) && (currNode.next.element !== element)) {
            currNode = currNode.next;
        }
        return currNode;
    }
    // remove: 链表删除节点函数
    remove(delElement) {
        const prevNode = this.findPrevious(delElement);
        if (!(prevNode.next === null)) {
            prevNode.next = prevNode.next.next;
        }
    }
    // display: 链表显示函数
    display() {
        let currNode = this.header;
        // 由于header节点是我们方便操作链表的，其保存的数据在这里对链表没有关联，所以不输出该节点
        while (!(currNode.next === null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
}
const linkedList =new LinkedList();
linkedList.insert('node1','header');
linkedList.insert('node2','node1');
linkedList.insert('node3','node1');
linkedList.insert('node4','node3');
linkedList.display();
console.log('------------')
linkedList.remove('node3');
linkedList.remove('node4');
linkedList.display();