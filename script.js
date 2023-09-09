function firstNonRepeatedChar(str) {
 // Write your code here
	let charCount = {}; // Initialize an empty object
	
	for(let i = 0; i < str.length; i++) //Iterate over the string and populate the object with character frequencies:
	{
	    let char = str[i];
	    if(charCount[char]) {
	        charCount[char]++;
	    } else {
	        charCount[char] = 1;
	    }
	}
	
	for(let i = 0; i < str.length; i++) //Iterate over the string again and check the frequency of each character in the object:
	{
	    let char = str[i];
	    if(charCount[char] === 1) {
	        return char;
	    }
	}
	
	return null; //If no non-repeating character is found
	
	// let firstNonRepeatChar=null;
	// for (let i = 0; i < str.length-1; i++) {
	// 	let foundDuplicate = false;
	// 	for (let j= i+1; j < str.length; j++) {
	// 		if (str.charAt(j) == str.charAt(i)) {
	// 			foundDuplicate = true;
	// 			break;
	// 		}
	// 	}
	// 	if(!foundDuplicate){
	// 		firstNonRepeatChar = str.charAt(i);
	// 		break;
	// 	}	
	// }
	// console.log(firstNonRepeatChar);
}
// let input = "aabbcc"
// firstNonRepeatedChar(input);
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
