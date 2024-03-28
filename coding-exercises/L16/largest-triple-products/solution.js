// Add any extra import statements you may need here


// Add any helper functions you may need here


// function findMaxProduct(arr) {
//   // Write your code here

//   const results = [];

//   const largestElements = [0, 0, 0];

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     if (element > largestElements[2]) {
//       largestElements[0] = largestElements[1];
//       largestElements[1] = largestElements[2];
//       largestElements[2] = element;
//     } else if (element > largestElements[1]) {
//       largestElements[0] = largestElements[1];
//       largestElements[1] = element;
//     } else if (element > largestElements[0]) {
//       largestElements[0] = element;
//     }

//     if (i < 2) {
//       results.push(-1);
//     } else {
//       const product = largestElements[0] * largestElements[1] * largestElements[2];
//       results.push(product);
//     }
//   }

//   return results;
// }

// MinHeap version
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  extract() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (element >= parent) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

function findMaxProduct(arr) {
  const results = [];
  const minHeap = new MinHeap();

  for (let i = 0; i < arr.length; i++) {
    if (minHeap.size() < 3) {
      minHeap.insert(arr[i]);
    } else if (arr[i] > minHeap.peek()) {
      minHeap.extract();

      minHeap.insert(arr[i]);
    }

    if (minHeap.size() < 3) {
      results.push(-1);
    } else {
      // Compute the product of the top three elements
      const topThree = [...minHeap.heap]; // Copy heap array
      const product = topThree.reduce((acc, val) => acc * val, 1);
      results.push(product);
    }
  }

  return results;
}









// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printintegerArray(array) {
  var size = array.length;
  var res = '';
  res += '[';
  var i = 0;
  for (i = 0; i < size; i++) {
    if (i !== 0) {
      res += ', ';
    }
    res += array[i];
  }
  res += ']';
  return res;
}

var test_case_number = 1;

function check(expected, output) {
  var expected_size = expected.length;
  var output_size = output.length;
  var result = true;
  if (expected_size != output_size) {
    result = false;
  }
  for (var i = 0; i < Math.min(expected_size, output_size); i++) {
    result &= (output[i] == expected[i]);
  }
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printintegerArray(expected);
    out += ' Your output: ';
    out += printintegerArray(output);
    console.log(out);
  }
  test_case_number++;
}

var arr_1 = [1, 2, 3, 4, 5];
var expected_1 = [-1, -1, 6, 24, 60];
var output_1 = findMaxProduct(arr_1);
check(expected_1, output_1);

var arr_2 = [2, 4, 7, 1, 5, 3];
var expected_2 = [-1, -1, 56, 56, 140, 140];
var output_2 = findMaxProduct(arr_2);
check(expected_2, output_2);

// Add your own test cases here
