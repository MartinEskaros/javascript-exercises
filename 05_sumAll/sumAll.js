const sumAll = function(num1,num2) {
    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    let amountOfNumbers=Math.abs(num1-num2)+1;
    let finalSum=0;
    
    if(num1<num2){
     for(let i =0; i<amountOfNumbers;i++){
        finalSum=finalSum+num1;
        num1++;
    }
    }else if(num1>num2){
         for(let i =0; i<amountOfNumbers;i++){
            finalSum=finalSum+num2;
            num2++;
        }
    }

   
    return finalSum; 
};

// Do not edit below this line
module.exports = sumAll;
