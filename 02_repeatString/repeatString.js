const repeatString = function(string,num) {
    if(num<0){
        return "ERROR"
    }
let emptyString ="";
for (let i=0; i<num;i++){
    emptyString=emptyString+string;
}
return emptyString;
};

// Do not edit below this line
module.exports = repeatString;
