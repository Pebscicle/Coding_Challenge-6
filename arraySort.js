//IMPORTANT DOCUMENT ELEMENTS!
const submitButton = document.getElementById("submitButton");
const arrayText = document.getElementById("array");
const result = document.getElementById("result");
const popup = document.getElementById("popup");

//Arrays
let array = [];
let a = [1, 4, 6, "hello", 2, "truck", 223, "squirrel juice", "4", "4", 4, "truck", 8, 10, "kangaroo", 223, "zoo snail", "wow", 5, "4a21b1c", "kite 2323", "kite", "woah", 3, 2, 5];
let str = []; 
let int = [];

//ARRAY FUNCTIONS
const splitArray = (a) => {
	a = arrayText.value.split(",");
	return a;
}

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};

let getTypeArray = (arr, type, typeArray) => {
	arr.forEach(item=>{
		if (typeof item === type){ 
			typeArray.push(item);
		}
	})
	return typeArray;
}

let packArray = (arr) => {
	index = 0;
	let packedArray = [];
	let temp = [];
	for (let i = index; i < arr.length; i++){
		if (arr[i] === arr[i+1]){
			temp.push(arr[i]);
		}
		else if(arr[i-1] != arr[i] && arr[i] !=arr[i+1]){
			packedArray.push(arr[i]);
		}
		else{
			if(arr[i] === arr[i-1]){	
				temp.push(arr[i]);
			}
			packedArray.push(temp);
			temp=[];
		}
	}
	return packedArray;
}

//DISPLAY FUNCTIONS
const updateDisplay = (a) => {
	result.value = `[${a}]`;
}

const copy = async() => {
  /* Select the text field */
  result.select();
  result.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  copyPopup();
  await sleep(2000);
  copyPopup();
}

const copyPopup = () =>{
  	popup.classList.toggle("show");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


//EVENT FUNCTIONS
const enterPressed = (event) => {
	if(event.keyCode == 13){
		a = splitArray(array);
		a = a.map((num)=>{return parseInt(num)});
		a = bubbleSort(a);
	    updateDisplay(a);
	}
}

//DOCUMENT ELEMENTS' EVENT LISTENERS
submitButton.addEventListener("click", function(){
	a = splitArray(array);
	a = a.map((num)=>{return parseInt(num)});
	a = bubbleSort(a);
	updateDisplay(a);
});

arrayText.addEventListener("keyup", enterPressed);

//MAIN
str = packArray(bubbleSort(getTypeArray(a, "string", str)));
int = packArray(bubbleSort(getTypeArray(a, "number", int)));
a = [];
a.push(int);
a.push(str);
console.log(a);