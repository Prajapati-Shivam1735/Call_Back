function manipulateString(inputString) {
    
    const manipulatedString = inputString.toUpperCase();
    
    function logString() {
        console.log("The manipulated string is: " + manipulatedString);
    }
    return logString;
}

const input = "Hello, World!";
const callback = manipulateString(input);
callback(); 
