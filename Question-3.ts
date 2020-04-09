function Calculator(num1,operator,num2){
    var result:number;
    switch(operator)
        {
            case '+':
                result = num1 + num2;
                break;

            case '-':
                result = num1 - num2;
                break;

            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            // operator doesn't match any case constant (+, -, *, /)
            default:
                console.log("Enter a valid operator")
                return;
        }
     console.log(result);
    }
    console.log(Calculator(5,'+',3));
