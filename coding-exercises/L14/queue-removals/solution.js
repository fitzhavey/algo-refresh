// Add any extra import statements you may need here


// Add any helper functions you may need here

// We will treat the array as the queue

function iterateQueue(queue, x) {
	const removedElements = [];
	let maxElement = { value: -1 };

	if (x > queue.length) x = queue.length;

	for (let i = 0; i < x; i++) {
		const element = queue.shift();
		removedElements.push(element);

		if (element.value > maxElement.value) {
			maxElement = element;
		}
	}

	const indexToRemove = removedElements.findIndex(item => item.value === maxElement.value);
	removedElements.splice(indexToRemove, 1);

	for (let i = 0; i < removedElements.length; i++) {
		let element = removedElements[i];
		if (element.value > 0) element.value--;
		queue.push(element);
	}

	return maxElement.originalIndex;
}

function findPositions(arr, x) {
	// Write your code here

	const queue = arr.map((element, i) => {
		return {
			value: element,
			originalIndex: i + 1 // 1-based indexing
		};
	});

	const results = [];

	for (let i = 0; i < x; i++) {
		results.push(iterateQueue(queue, x));
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

  var n_1 = 6
  var x_1 = 5
  var arr_1 = [1, 2, 2, 3, 4, 5];
  var expected_1 = [5, 6, 4, 1, 2 ];
  var output_1 = findPositions(arr_1, x_1);
  check(expected_1, output_1);

  var n_2 = 13
  var x_2 = 4
  var arr_2 = [2, 4, 2, 4, 3, 1, 2, 2, 3, 4, 3, 4, 4];
  var expected_2 = [2, 5, 10, 13];
  var output_2 = findPositions(arr_2, x_2);
  check(expected_2, output_2);

  // Add your own test cases here
