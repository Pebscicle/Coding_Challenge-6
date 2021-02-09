/*Write a javascript function that takes an array of numbers and a target number.
The function should find two different numbers in the array that, when added together,
give the target number. For example: answer([1,2,3], 4)should return [1,3]*/

a = [1, 2, 3, 20, 49, 6];
target = 55;

const findPair = (arr, tgt) =>{
	//Length of array for loop control
	const len = arr.length;
	//Array of sum that = target
	let tgtSum = [];
	/*Loops through each item and tries to see if 
	when it is added with every other item, it
	is equal to the target.*/
	for (let item = 0; item < len; item++){
		//Loops through the other items while skipping the item that is currently being added.
		for (let otherItem = 0; otherItem < len; otherItem++){
			if (arr[otherItem]!=arr[item]){
				//If two items = target, return the target array, else return what is at the end of the program
				if (arr[item] + arr[otherItem] === tgt){
					tgtSum.push(arr[item]);
					tgtSum.push(arr[otherItem]);
					return tgtSum;
				} 
			} 
		}
	}
	return "No combinations";
}

//Main
let numTargetSum = findPair(a, target);
console.log(numTargetSum);