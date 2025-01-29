let symbol = prompt(`Choose a math symbol(ie +,-,etc)!`);
let numOne = Number(prompt(`What is your first number?`));
let numTwo = Number(prompt(`What is your second number?`));
if (symbol == `+`){
    result = numOne + numTwo;
    alert(`Your sum is ` +result)
} else if (symbol ==`-`){
    result = numOne - numTwo;
    alert(`Your difference is `+result)
} else if(symbol == `x`){
    result = numOne * numTwo;
    alert(`Your product is `+result)
} else if(symbol == `*`){
    result = numOne * numTwo;
    alert(`Your product is `+result)
} else if(symbol == `/`){
    result = numOne/numTwo;
    alert(`Your quotient is `+result)
} else if(symbol != `+`,`-`,`x`,`*`,`/`){
    alert(`Symbol not recognized!`)
}