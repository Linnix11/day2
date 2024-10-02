// Your code here...

let a = 2;
let b = 4;
let action = "sub"; 

function addition (){ 
 return a + b;
}

function subtraction (){ 
 return a - b 
}

function calculator (){ 
if (action === "ass") {
return addition(a, b); 
} else if (action === "sub"){ 
 return subtraction(a, b);
} else {
  return "Invalid action";
}
}


// DO NOT TOUCH - This line will call calculator and display the result for you
if (typeof calculator === "function" && typeof a === "number" &&
		typeof b === "number" && typeof action === "string") {
	displayResult(calculator, a, b, action);
} else {
	console.error("Missing/bad variables or calculator function");
}