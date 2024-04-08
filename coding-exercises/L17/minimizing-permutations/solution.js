// Add any extra import statements you may need here


// Add any helper functions you may need here

// Define the graph structure to represent permutations
// Implement functions to reverse sub-portions of the permutation

// Define a function to reverse a sub-portion of the permutation
function reverseSubArray(arr, start, end) {
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Helper function to check if a permutation is sorted in increasing order
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

function minOperations(arr) {
	// Create a queue to store permutations
    const queue = [];

    // Enqueue the initial permutation
    queue.push(arr);

    // Initialize the number of operations
    let operations = 0;

    // While there are permutations in the queue
    while (queue.length > 0) {
        // Get the number of permutations at this level
        const levelSize = queue.length;

        // For each permutation at this level
        for (let i = 0; i < levelSize; i++) {
            // Dequeue the permutation
            const current = queue.shift();

            // If the permutation is sorted in increasing order
            if (isSorted(current)) {
                // Return the number of operations
                return operations;
            }

            // For each possible sub-portion of the permutation
            for (let start = 0; start < current.length; start++) {
                for (let end = start + 1; end < current.length; end++) {
                    // Reverse the sub-portion
                    reverseSubArray(current, start, end);

                    // Enqueue the new permutation
                    queue.push(current.slice());

                    // Reverse the sub-portion back to its original order
                    reverseSubArray(current, start, end);
                }
            }
        }

        // Increment the number of operations
        operations++;
    }

    // If the queue is empty, return -1 (should not happen in this problem)
    return -1;
}











  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom.
  function printInteger(n) {
	var out = '[' + n + ']';
	return out;
  }

  var test_case_number = 1;

  function check(expected, output) {
	var result = (expected == output);
	var rightTick = "\u2713";
	var wrongTick = "\u2717";
	if (result) {
	  var out = rightTick + ' Test #' + test_case_number;
	  console.log(out);
	}
	else {
	  var out = '';
	  out += wrongTick + ' Test #' + test_case_number + ': Expected ';
	  out += printInteger(expected);
	  out += ' Your output: ';
	  out += printInteger(output);
	  console.log(out);
	}
	test_case_number++;
  }

  var n_1 = 5;
  var arr_1 = [1, 2, 5, 4, 3];
  var expected_1 = 1;
  var output_1 = minOperations(arr_1);
  check(expected_1, output_1);

  var n_2 = 3;
  var arr_2 = [3, 1, 2];
  var expected_2 = 2;
  var output_2 = minOperations(arr_2);
  check(expected_2, output_2);

  var n_3 = 3;
  var arr_3 = [2, 1, 3];
  var expected_3 = 1;
  var output_3 = minOperations(arr_3);
  check(expected_3, output_3);

  var n_4 = 4;
  var arr_4 = [4, 1, 3, 2];
  var expected_4 = 2;
  var output_4 = minOperations(arr_4);
  check(expected_4, output_4);

  var n_5 = 7;
  var arr_5 = [6, 7, 2, 4, 3, 1, 5];
  var expected_5 = 4;
  var output_5 = minOperations(arr_5);
  check(expected_5, output_5);

  // Add your own test cases here
