# Trees

Trees are often used in interviews. We'll cover different types of trees, such as binary search.

## Introduction

A tree is a data structure in which each node has a value and a list of children. It is a connected directed acyclic graph.

Nodes with no children at all may be called a leaf node, following the tree analogy.

A binary tree is a tree where each node has between 0 and 2 children.

A binary search tree is a binary tree in which for each node, all items on the left are less than its value and all items on the right are greater. In other words the left child of a node has a value less than the node, and the right child has a value greater than the node.

To traverse a binary tree in-order, visit the left child, then the node, then the right child.

A balanced tree is a tree in which the height of the left and right subtrees of any node differ by at most 1.

In a balanced tree, the time is O(log N) for insert and find operations. For unbalanced trees, the worst case time is O(N) for insert and find.

## Tries

A trie is a tree in which each node represents a single character of a string. The root node represents the first character of the string, and the children of the root node represent the second character of the string, and so on.

It can be used to check if a prefix is a valid word in a dictionary.

## Tips & Tricks

### Listen For

- hierarchal data

### Syntactical Details

- creation, find, insert
- run times of operations

### Patterns & Concepts

- balanced vs unbalance
- augmenting the tree
- checking subtree for a property and associated run times

### Stumbling Blocks

- watch out for errors in null pointer exceptions
- duplicates can cause issues
- unbalanced trees
- return values for find, included value when nothing is found
- finding if it's a tree or a binary search tree

### Extras

- know how to implement a trie
- recursion, the structure of a tree is essentially recursive, so this is important

## Quiz

1. You walk through a sorted array of length N, inserting each element into a binary search tree which is initially empty. The tree is not self-balancing. How many levels are in the final tree?
    - [x] N
    - [ ] N / 2
    - [ ] log(N)
    - [ ] 1

2. You have an array of 17 elements, and you insert each node into a binary tree. What is the fewest number of levels in the resulting tree?
    - [ ] 4
    - [ ] 17
    - [x] 5
    - [ ] 6
