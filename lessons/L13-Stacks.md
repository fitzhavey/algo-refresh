# Stacks

While queues are FIFO (first-in, first-out), stacks are LIFO (last-in, first-out). Like a stack of plates, the item most recently added (pushed) is the first time removed (popped). Learn more about stacks and how to use them.

## Introduction

In a stack, you're removing items from reverse order in which they were added. This is seen in computing frequently, a common example is copy-paste. Use stacks when you want to reverse your steps.

We implement them in a class Node, where each node has a value and a reference to the next node in the stack. Then we have a Stack class, with a pointer to the top of the list of nodes.

```python
class Node:
  int value
  Node next

class Stack:
  Node top
```

You can use a linked list to implement a stack as long as you follow these rules:

- remove from the right
- append to the right

## Tips & Tricks

### Listen For

- LIFO, last in, first out
- reversing steps, going backwards

### Syntactical Details

- using a stack: pop, push, peek
- using built-in and creating your own

### Patterns & Concepts

- augmenting the stack
- class vs data: do I get access to the Node, or just the stack class?

#### Stumbling Blocks

- empty stacks

### Extras

- great practice question. Implement a Queue class using a Stack class
  _tip: you can just use two stacks to mimic a queue!_

## Quiz

1. Which of the following statements are true about stacks?

    - [ ] They operate according to the FIFO (first-in-first-out) principle.
    - [ ] They typically do not contain duplicates.
    - [x] They operate according to the LIFO (last-in-first-out) principle
    - [ ] The values are stored in sorted order.

2. Imagine you have a stack S, with 10 elements. You clone S to create stack T. Then, you call T.pop() 10 times, pushing the result onto a stack U. Which of the following statements is true?

    - [x] T is empty. S looks like an “upside down” U.
    - [ ] S and T are equal, and T looks like an “upside down” U.
    - [ ] S, T and U are all equal.
    - [ ] T is empty. S and U are identical.
