function hasTargetSum(array, target) {
  // Write your algorithm here

  if (array.length === 0 && typeof array !== "number"){
    return "input cannot be empty and write numbers only"
  }

  for (let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      if (array[i]+array[j] === target){
        return true;
      }
    }
  }
  return false
}

let result = hasTargetSum([10,5,8,4],20)
console.log(result)
/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  create a function hasTargetSum
  pass an array and the target sum as arguements
  iterate through the array to see if a set on addition equals target sum
  if two sets return the target sum return true
  if not return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.export = hasTargetSum;
