// Add any extra import statements you may need here


// Add any helper functions you may need here


function numberOfWays(arr, k) {
	// Write your code here

	// get the number of counts of each number, this should save time
	const counts = {};
	arr.forEach(num => {
		counts[num] = (counts[num] || 0) + 1;
	});

	let pairs = 0;

	const uniqueNumbers = Object.keys(counts).map(n => parseInt(n, 10));
	for (let i=0; i<uniqueNumbers.length; i++) {

	  const num = uniqueNumbers[i];
	  const matchingNum = k - num;

	  if (counts[matchingNum]) {

		if (num === matchingNum) {
		  pairs += (counts[matchingNum] * (counts[num] - 1)) / 2;
		} else if (num < matchingNum) {
		  pairs += counts[num] * counts[matchingNum];
		}
	  }

	}

	return pairs;
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

  var k_1 = 6;
  var arr_1 = [1, 2, 3, 4, 3];
  var expected_1 = 2;
  var output_1 = numberOfWays(arr_1, k_1);
  check(expected_1, output_1);

  var k_2 = 6;
  var arr_2 = [1, 5, 3, 3, 3];
  var expected_2 = 4;
  var output_2 = numberOfWays(arr_2, k_2);
  check(expected_2, output_2);

  // Add your own test cases here
