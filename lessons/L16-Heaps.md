# Heaps

A heap is a tree-based structure but with an unusual ordering property. In a min-heap, each node is smaller than all the nodes underneath it. Even though heaps are tree-based, we typically implement them using arrays. Learn how to use heaps and insert and remove elements.

## Priority Queues and Heaps

To insert a node into a min-heap, insert it at the end of the array and then "bubble up" the node until it is in the correct position.

To extract the minimum from a min-heap, remove the first element from the array and then "bubble down" the last element until it is in the correct position.

A heap will always be complete, meaning that all levels of the heap are filled except for the last level, which is filled from left to right. This is important for the heap property. Because of this heaps can be collapsed into arrays making them more space efficient.

## Quiz

1. Jim points out (correctly) that one could use a min-heap to sort an array. You could convert the array into a min-heap, and then pull out the min value repeatedly in order to get the items in sorted order. Let N be the length of the array. What would the time complexity of this approach be?
    - [ ] O(N + N log N)
    - [x] O(N log N)
    - [ ] O(N^2)
    - [ ] O(N (log N)^2)

2. You have an array A, and you build a min-heap P and a max-heap Q from it (implementing each heap in an associated array). If you called equals on the arrays associated with P and Q (comparing the arrays for equality, element by element), what would the result be?
    - [x] equals(P, Q) could be true or false
    - [ ] equals(P, Q) would always be true
    - [ ] equals(P, Q) would always be false