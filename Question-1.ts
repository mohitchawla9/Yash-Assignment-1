function factorial(){
    var n = 6;
    var fact = 1;
    for(var i = 1; i <= n; i++)
    {
         fact = fact * i;
    }
    return fact;
  }
  console.log(factorial());