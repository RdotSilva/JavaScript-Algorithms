// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

const nums = [10, 15, 3, 7];
const singleNum = 17;

// O(n^2) time
const checkSums = (arr, sum) => {
	let trueOrFalse = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] === sum - arr[i]) {
				trueOrFalse.push('true');
			} else {
				trueOrFalse.push('false');
			}
		}
	}
	return trueOrFalse.includes('true');
};

// O(n) time
const checkSums2 = (arr, sum) => {
	let map = {},
		results = [];
	for (let i = 0; i < arr.length; i++) {
		// If the key inside of map object value is NOT undefined push the key and value into map
		if (map[arr[i]] !== undefined) {
			// If item exists in map object push the key and value into results array
			results.push([map[arr[i]], arr[i]]);
		} else {
			// Add item to map object if it doesn't exist
			map[sum - arr[i]] = arr[i];
		}
	}
	// If results array has anything inside of it return true, if no values inside return false
	return results.length > 0;
};
