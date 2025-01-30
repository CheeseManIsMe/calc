let numOne = Number(prompt(`What is your first number?`));
let symbol = prompt(`Choose a math symbol(ie +,-,etc)!`);
let numTwo = Number(prompt(`What is your second number?`));
// All prompts occur back to back and save them as variables for equations
if (symbol == `+`){
    // checks for symbol typed in
    result = numOne + numTwo;
    // does the math with the 2 variables and saves them as "result"
    document.open();
    document.write(`Your sum is ` +result);
    document.close();
    // opens document and prints the text with the answer
    // basically just repeated for the rest of the code just with different operators
} else if (symbol ==`-`){
    result = numOne - numTwo;
    document.open();
    document.write(`Your difference is `+result);
    document.close();
} else if(symbol == `x`){
    result = numOne * numTwo;
    document.open();
    document.write(`Your product is `+result);
    document.close();
} else if(symbol == `*`){
    result = numOne * numTwo;
    document.open();
    document.write(`Your product is `+result);
    document.close();
} else if(symbol == `/`){
    result = numOne/numTwo;
    document.open();
    document.write(`Your quotient is `+result);
    document.close();
} else if(symbol == `^`){
    result = numOne**numTwo;
    document.open();
    document.write(`Your quotient is `+result);
    document.close();
} else if(symbol != `+`,`-`,`x`,`*`,`/`,`^`){
    // If symbol is not recognized; play error message
    document.open();
    document.write(`Symbol not recognized!`);
    document.close();
}