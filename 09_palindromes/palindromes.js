const palindromes = function (word) {
    let i=0;
    
    let isPalindrome = true;
    const wordPlain = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let j = wordPlain.length -1;
    while(i<=j){
        
        if(wordPlain.charAt(i).toLowerCase()!=wordPlain.charAt(j).toLowerCase()){
            isPalindrome =false;
            break;
        }else{
            i++;
            j--;
        }
    }
    return isPalindrome;

};

// Do not edit below this line
module.exports = palindromes;
