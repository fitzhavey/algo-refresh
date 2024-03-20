# Sorting

Explore best practices for sorting algorithms and tackling sorting problems.

## Bubble Sort

Not an efficient search algorithm, it has a runtime of O(n^2). It repeatedly walks through the array, swapping things that are out of order.

```javascript
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        // Swap elements
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swapped = true;
      }
    }
    // Reduce n since the last element is already in place
    n--;
  } while (swapped);
  return arr;
}
```

## Merge Sort

Merge sort works through divide and conquer. It divides the array into smaller arrays until each array has only one element. Then it merges the arrays back together in a sorted order. It has a O(n log n) runtime, for best and worst case scenarios, because it always divides the array in half.

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Divide the array into left and right halves
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort the two halves
  return merge(mergeSort(left), mergeSort(right));
}

// Merge two sorted arrays
function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // Concatenate values into resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // Move to the next element in the left array
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // Move to the next element in the right array
    }
  }

  // Concatenate any remaining elements in the left or right array
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}
```

## Tips and Tricks

It's important not just to be comfortable with these sorting algorithms but also to be comfortable with their space and time complexities.

### Listen For

- searching
- getting the "biggest" or "smallest" item

### Syntactical Details

- writing sort algorithms from scratch
- using built-in sorting algorithms, with special comparators
- being just as comfortable "reverse" sorting (i.e. biggest to smallest) as you are sorting

### Stumbling Blocks

- boundary checks

### Patterns & Concepts

- bubble sort, quick sort, merge sort

### Extras

- radix sort, bucket sort

## Quiz

1. You’re working in a mysterious programming language and you notice that array.sort is usually pretty fast, even with a large dataset. (That is, it seems comparable to sorts running with O(N log N) time complexity.) However, when applied to an array that’s already sorted, this array.sort becomes much slower. Which of the following sorting algorithms is most likely to be underlying array.sort?

    - [ ] selection sort
    - [x] quick sort
    - [ ] merge sort
    - [ ] bubble sort

2. Your friend is concerned about using quicksort in your code, stating that the runtime will degenerate if the array is already sorted. Which might be the best fix for this issue?
    - [ ] neither of the above will address this issue
    - [ ] check first if the array is sorted, and if so return immediately
    - [x] pick a pivot element at random

3. You have an array of length N representing humans, and you want to sort the people by their age (integers between 0 and 150). What is the best runtime for this problem?
    - [ ] O(log N)
    - [ ] O(N log N)
    - [x] O(N)
    - [ ] O(1)
