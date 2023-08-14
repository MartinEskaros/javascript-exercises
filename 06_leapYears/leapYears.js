const leapYears = function(year) {
    let isLeapYEar = true;


if(year%4===0){ 
    if(year %100 === 0){
        if (year %400 !=0){
         isLeapYEar=false;
        }else{
         isLeapYEar=true;
        }
    }else{
        isLeapYEar=true;
    }
}else{
    isLeapYEar=false;
}
return isLeapYEar;
}

// Do not edit below this line
module.exports = leapYears;
