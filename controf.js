// Write a function that accepts an array of strings and console.logs each element using a for loop.
function listing(array){
    for(let i=0;i<array.length;i++){
        console.log(fruits[i])

    }

}
let  fruits=["Mangoes","bananas","oranges"]
listing(fruits);

 
 

// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function listing2(array3){
    array3.forEach(element => {
        console.log(element*2)
        
    });
}
let numbers=[2,5,9,6]
listing2(numbers)
 


 // Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function findIndex(arr) {
    let i = 0;
    while (i < arr.length) {
      if (i === 4) {
        break;
      }
      i++;
    }
    return i;
  }
  
  
  

//   Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
// let arrNum = [1,2,3,4,5,6,7,8,9];


function finding(arr) {
    let i = 0;
    while (i < arr.length) {
      if (i === 4) {
        break;
      }
      i++;
    }
    return i;
  }
  let arrNum = [1,2,3,4,5,6,7,8,9];
  console.log(finding(arrNum)); // outputs 4


  //Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']
function fruit(arr6){
    for(let i=0;i<arr6.length;i++){
        if(i===2){
            continue;
        }
        console.log(arr6[i]);
    }
}

let arr5=["apple","plum","banana","strawberries","kiwi"];
fruit(arr5);


   


