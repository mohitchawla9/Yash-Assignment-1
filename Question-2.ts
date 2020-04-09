function FindPrime(){
    var primenumbers = new String();
    for(var i = 1 ; i <= 100 ; i++)
    { 
        var flag = 0;
        var middle = i/2;
        if(i === 1)
        {
            flag = 1;
            continue;
        }
       for(var j = 2 ; j <= middle ; j++)
       {
           if(i % j === 0)
           {
               flag = 1;
               break;
           }
       }
       if(flag === 0)
       {
           primenumbers += i + ' ';  
       }
       
    }
    console.log('list of prime numbers between 1 to 100 :- ' + primenumbers);
}
console.log(FindPrime());