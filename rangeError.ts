function calculator(number1: number, number2: number, operator: string){
    let result;
    if(operator == "+"){
        result = number1 + number2;
    }else if(operator == "-"){
        result = number1 - number2;
    }else if(operator == "*"){
        result = number1 * number2;
    }else if(operator == "/"){
        result = number1 / number2;
    }else{
        throw new RangeError("The operator be an +,-,*,/")
    }
    return result;
}

try{
    console.log(calculator(1, 5, "%"));
}catch(error){
    if(error instanceof RangeError){
        console.log(error.message);
    }
}