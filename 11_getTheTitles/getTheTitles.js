const getTheTitles = function(array) {
    return array.map(function(book){    //map function will go through each element in array and then will apply the function we set to it. In this case book will represent the individual element
        return book.title;              //in that array and then we access title using .title on each element in the array.
    }); 
};

//alternatively we can use arrow functions
// const getTheTitles = function(array) {
//  return array.map((book)=> book.title);          //Here we specify that each element in the array and then use the arrow function to say we want to get .title from each element and return an array
//                                                  //of only titles.
//
//
//
// Do not edit below this line
module.exports = getTheTitles;
