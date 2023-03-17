// Stack

class Stack {
  constructor() {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  push(elem) {
    this.stack.push(elem);
  }

  pop() {
    this.stack.pop();
  }

  peek(index = this.stack.length - 1) {
    return this.stack[index];
  }

  reverse() {
    return this.stack.reverse();
  }

  isEmpty() {
    return !this.stack.length;
  }

  displayStack() {
    return this.stack.join(" ");
  }
}

let stack = new Stack();

console.log(stack);

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.stack);

stack.pop();

console.log(stack.stack);

console.log(stack.peek());

stack.push(4);
stack.push(5);

console.log(stack.stack);

stack.reverse();

console.log(stack.stack);

console.log(stack.isEmpty());

console.log(stack.displayStack());

let myStack = new Stack();
myStack.push("One");
myStack.push("Two");
console.log(myStack.length); // 2
console.log(myStack.peek()); // "Two"
console.log(myStack.peek(0)); // "One"
console.log(myStack.reverse()); // ['Two', 'One']
console.log(myStack.displayStack()); // 'Two One'
myStack.pop();
console.log(myStack.length); // 1
console.log(myStack.peek()); // 'Two'
console.log(myStack.isEmpty()); // false
myStack.pop();
console.log(myStack.isEmpty()); // true

// Queue

class Queue {
  constructor() {
    this.queue = [];
  }

  get length() {
    return this.queue.length;
  }

  enqueue(elem) {
    this.queue.push(elem);
  }

  dequeue() {
    this.queue.shift();
  }

  peek(index = 0) {
    return this.queue[index];
  }

  isEmpty() {
    return !this.queue.length;
  }

  displayQueue() {
    return this.queue.join(" ");
  }
}

let atmQueue = new Queue();
atmQueue.enqueue("Aman");
atmQueue.enqueue("John");
atmQueue.enqueue("Rohan");
console.log(atmQueue.displayQueue()); // "Aman John Rohan"
console.log(atmQueue.length); // 3
console.log(atmQueue.peek()); // "Aman"
console.log(atmQueue.peek(1)); // "John"
atmQueue.dequeue();
console.log(atmQueue.length); // 2
console.log(atmQueue.peek()); // 'John'
console.log(atmQueue.isEmpty()); // false
atmQueue.dequeue();
atmQueue.dequeue();
console.log(atmQueue.isEmpty()); // true
