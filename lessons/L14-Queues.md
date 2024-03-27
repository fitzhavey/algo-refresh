# Queues

A queue is a list-like data structure that uses the FIFO principle of first-in, first-out. The first item inserted is the first item you remove. This lesson will teach you more about queues.

## Tips & Tricks

### Listen For

- FIFO: first in, first out
- Process items in the order they appear

### Syntactical Details

- built in queue data structure

### Patterns & Concepts

- using a linked list as a queue

### Stumbling Blocks

- empty lists
- single element lists
- updating the head and tail

### Extras

- when to use a queue, linked list, stacks etc
- implementing a queue from scratch

## Quiz

1. A queue is an abstract data type, which means that the requirements are specified but not the implementation. Your friend argues that it might be easy to implement a queue with a dynamically resizable array—just use a “newest” and “oldest” pointer in the array. When a new element is enqueued, move the newest pointer. When you remove an element, move the oldest pointer. Which issue below might you run into with this implementation?
    - [ ] it will make it more difficult to find the largest value
    - [ ] this implementation can only support integer values
    - [x] if many elements are added and then removed, the array could waste a lot of space
    - [ ] inserting an element will be O(N) time on average, since you have to resize the array to fit more elements

2. In which of the following circumstances would we be most likely to use a queue?
    - [ ] when switching a recursive algorithm into an iterative approach
    - [ ] implementing depth-first search
    - [x] implementing breadth-first search
    - [ ] a typical recursive algorithm

3. I walk through the integers 1 through N in order. If the value is odd, I enqueue onto queue Q. If the value is even, I dequeue from Q and toss away the value. After walking through the numbers 1 through N, what will Q look like?
    - [ ] this program will throw an exception
    - [ ] Q = []
    - [ ] Q = [N]
    - [x] Q could be either [N] or []