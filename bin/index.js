const SinglyLinkedList = require('./bin/singlyLinkedList');
const Stack = require('./bin/stack');
const Queue = require('./bin/queue');
const BinarySearchTree = require('./bin/binarySearchTree');
const PriorityQueue = require('./bin/priorityQueue');

console.log("______________________________________________");
console.log("Singly Linked List");
const list = new SinglyLinkedList();
list.insert(12);
list.insert(9);
list.insert(13);
list.insert(17);
console.log(list.stringify());
list.remove(12);
console.log(list.stringify());
console.log(list.length());
console.log(list.isEmpty());
list.insertAt(21, 2);
console.log(list.stringify());
console.log("______________________________________________");

console.log("Stack");
const stack = new Stack();
stack.push(12);
stack.push(13);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
console.log("______________________________________________");


console.log("______________________________________________");
console.log("Queue");
const queue = new Queue();
queue.offer(12);
queue.offer(13);
queue.offer(21);
console.log(queue.front());
queue.poll();
console.log(queue.stringify());
console.log(queue.isEmpty());

console.log("______________________________________________");
console.log("BinarySearchTree");
const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(13);
binarySearchTree.insert(12);
binarySearchTree.insert(14);
binarySearchTree.insert(15);
binarySearchTree.levelOrderTraversal();
console.log(binarySearchTree.contains(15));
binarySearchTree.inorder();
binarySearchTree.preOrder();
binarySearchTree.postOrder();

console.log("______________________________________________");
console.log("PriorityQueue");
const priorityQueue = new PriorityQueue();
priorityQueue.offer(12);
priorityQueue.offer(19);
priorityQueue.offer(3);
priorityQueue.offer(21);
console.log(priorityQueue.peek());
priorityQueue.poll();
console.log(priorityQueue.peek());
