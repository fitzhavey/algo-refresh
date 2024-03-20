# Recursion

Recursion is an important topic for interviews and real life coding. This lesson will introduce recursion and how to apply it to problems.

## Introduction

A classic example is the fibonacci sequence, where the next number is the sum of the previous two numbers:

```text
fib(n) = fib(n-1) + fib(n-2)

# base cases
f(0) = 0
f(1) = 1

f(2) = 1
f(3) = 2
f(4) = 3
f(5) = 5
f(6) = 8
```

and in python:

```python
def fib(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fib(n-1) + fib(n-2)
```

Here, the space complexity would be O(N) as our call stack will be n levels deep. The time complexity would be O(2^N) as we are making two recursive calls at each level.

The same applies to factorial:

```text
fact(n) = n * fact(n-1)

# base case
fact(0) = 1
```

and in code:

```python
def fact(n):
    if n == 0:
        return 1
    return n * fact(n-1)
```

In this case, both the time complexity and space complexity would be O(N), as each recursive call adds a new frame to the call stack.

_In problems with trees and branches, recursive run times are often O(#branches ^ depth)._

## Tips & Tricks

### Listen For

- choices: do I go left or right, which branch should I try first?
- superlatives: longest, shortest, best
- divide and conquer: can you solve for parts separately?

### Patterns & Concepts

- make sure to tell  your interviewer if you think it's recursive
- recursive functions can always be solved iteratively
- space and time complexity
- trust your subroutines, and merge the results
- damage and repair, if you're modifying the input data, is it worth the time to repair it

### Stumbling Blocks

- null, empty, 1 or 2 elements
- base cases: keep them as simple as you can

### Extras

- practice!

## Quiz

1. You are asked to change an algorithm, usually implemented recursively, into an iterative algorithm. What of the following data structures would you be most likely to use?
    [ ] binary tree
    [ ] heap
    [ ] queue
    [x] stack

2. You have implemented some recursive algorithm on a balanced binary search tree, which, in part, requires recursing on the left and then recursing on the right (similar to an in-order traversal). If there are N nodes in the tree, which of the following is true about your space complexity?
    [ ] exactly O(log N)
    [ ] between O(1) and O(N)
    [x] at least O(log N), but could be worse
    [ ] at least O(N log N)

3. In which of the following scenarios would you be most likely to use recursion?
    [x] computing all the permutations of a string
    [ ] finding all instances of a substring within a string
    [ ] generating all possible binary numbers from the integers from 1 to N
    [ ] breadth first search of a graph to determine the shortest path from A to B
