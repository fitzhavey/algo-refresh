# Search

What's neat about binary search is that non-coders intuitively use it - even if they don't know it by name! This lesson explains what a binary search is and effective ways to use it.

## Binary Search

Time complexity is O(log N) where N is the size of the array, this is as the search area is halved with each iteration of the algorithm.

### Listen For

- sorted data
- guesses can be over or underestimated

### Syntactical Details

- you should be comfortable implementing binary search, both from scratch and using a library

### Patterns & Concepts

- modifications of binary search

## Stumbling Blocks

- left, right & middle indexes
- middle computation

## Quiz

1. While engineers often think about binary search recursively, the algorithm is often implemented iteratively. Why?
    - [ ] it reduces the time complexity significantly
    - [ ] none of the above
    - [x] it reduces the space complexity significantly
    - [ ] the iterative implementation is much simpler

2. In which of the following scenarios might the runtime of binary search degenerate?
    - [ ] the array is a consecutive sequence of numbers
    - [ ] the array has many duplicates
    - [ ] the array has a large span across the values, for example ranging from -10000000 to 10000000
    - [x] none of the above