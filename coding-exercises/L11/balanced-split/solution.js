// Add any extra import statements you may need here


// Add any helper functions you may need here


function balancedSplitExists(arr) {
	// Write your code here

	arr.sort();

	// Create a cursor to move through the array checking totals
	let leftTotal = 0;
	let rightTotal = arr.reduce((acc, cur) => acc + cur, 0);

	for (let i=0; i<arr.length; i++) {
		const num = arr[i];
		leftTotal += num;
		rightTotal -= num;


		if (leftTotal === rightTotal) {
			if (num === arr[i+1]) return false;
			return true;
		}
		if (leftTotal > rightTotal) return false;
	};

	return false; // should never get here?
}












  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom.
  function printString(str) {
	var out = '["' + str + '"]';
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
	  out += printString(expected);
	  out += ' Your output: ';
	  out += printString(output);
	  console.log(out);
	}
	test_case_number++;
  }

  var arr_1 = [2, 1, 2, 5];
  var expected_1 = true;
  var output_1 = balancedSplitExists(arr_1);
  check(expected_1, output_1);

  var arr_2 = [3, 6, 3, 4, 4];
  var expected_2 = false;
  var output_2 = balancedSplitExists(arr_2);
  check(expected_2, output_2);

  // Add your own test cases here
