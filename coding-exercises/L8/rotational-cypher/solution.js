// Add any extra import statements you may need here


// Add any helper functions you may need here
function rotationalCipher(input, rotationFactor) {
	// Write your code here

	let encryptedString = "";

	for (let c of input) {

	  // handle numbers
	  if (c.match(/[0-9]/)) {
		const num = parseInt(c);
		const rotatedNum = (num + rotationFactor) % 10;
		encryptedString += rotatedNum;

	  // handle lowercase
	  } else if (c.match(/[a-z]/)) {
		const asciiOffset = 97;
		const charCode = c.charCodeAt(0);
		const charIndex = (charCode - asciiOffset);
		const rotatedCharIndex = (charIndex + rotationFactor) % 26;
		const rotatedCharCode = rotatedCharIndex + asciiOffset;
		encryptedString += String.fromCharCode(rotatedCharCode);

	  // handle uppercase
	  } else if (c.match(/[A-Z]/)) {
		const asciiOffset = 65;
		const charCode = c.charCodeAt(0);
		const charIndex = (charCode - asciiOffset);
		const rotatedCharIndex = (charIndex + rotationFactor) % 26;
		const rotatedCharCode = rotatedCharIndex + asciiOffset;
		encryptedString += String.fromCharCode(rotatedCharCode);

	  // handle all other chars
	  } else {
		encryptedString += c;
	  }
	}

	return encryptedString;
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

  var input_1 = "All-convoYs-9-be:Alert1.";
  var rotationFactor_1 = 4;
  var expected_1 = "Epp-gsrzsCw-3-fi:Epivx5.";
  var output_1 = rotationalCipher(input_1, rotationFactor_1);
  check(expected_1, output_1);

  var input_2 = "abcdZXYzxy-999.@";
  var rotationFactor_2 = 200;
  var expected_2 = "stuvRPQrpq-999.@";
  var output_2 = rotationalCipher(input_2, rotationFactor_2);
  check(expected_2, output_2);

  // Add your own test cases here
