function getEvenSort(numarr:number[]){
    let newarr = new Array();
    for(var i = 0; i < numarr.length; i++){ 
       if(numarr[i] % 2 === 0){
         newarr.push(numarr[i]);  
       }
    }
    newarr = newarr.sort((n1,n2) => n1 - n2);
      console.log(newarr);
}
let numarr: number[] = [2,4,1,88,68,48,5,6,8,9];
getEvenSort(numarr);