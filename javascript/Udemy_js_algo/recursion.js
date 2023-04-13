/* power
 - https://coupang.udemy.com/course/best-javascript-data-structures/learn/quiz/5338811#learning-tools
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
*/
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16
function power(base, exp) {
  return !exp ? 1 : base * power(base, exp-1)
}


/* 
factorial
 - https://coupang.udemy.com/course/best-javascript-data-structures/learn/quiz/5338813#learning-tools
Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.
*/
//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
function factorial(n){
  if (n < 0 ) return 0;
  return !n ? 1 : n * factorial(n-1)
}


/* 
productOfArray
 - https://coupang.udemy.com/course/best-javascript-data-structures/learn/quiz/5338815#learning-tools
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(nums) {
  return !nums.length ? 1 : nums[0]*productOfArray(nums.slice(1))
}

/* recursiveRange
 - https://coupang.udemy.com/course/best-javascript-data-structures/learn/quiz/5338817#learning-tools
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
*/
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 
function recursiveRange(n){
  return n == 1 ? 1 :  n + recursiveRange(n-1)
}

/* fib
 - https://coupang.udemy.com/course/best-javascript-data-structures/learn/quiz/5338819#learning-tools
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
*/
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
function fib(n){
  // add whatever parameters you deem necessary - good luck!  
  return n <= 2 ? 1 : fib(n-2)+fib(n-1)
}

/* 
reverse
 - https://coupang.udemy.com/course/best-javascript-data-structures/learn/quiz/5338821#learning-tools
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/
function reverse(str){
  // add whatever parameters you deem necessary - good luck!
  return !str.length ? "": str[str.length-1] + reverse(str.split("").slice(0, str.length-1).join(""))
}
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'


/* isPalindrome
 - https://coupang.udemy.com/course/best-javascript-data-structures/learn/quiz/5338823#learning-tools
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
*/
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 1) return true
  if (str.length % 2 === 0) return false
  if (str[0] !== str[str.length-1]) return false
  
  return isPalindrome(str.split("").slice(1, str.length-1).join(""))
}

/* 
someRecursive
 - https://coupang.udemy.com/course/best-javascript-data-structures/learn/quiz/5338825#learning-tools
Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
*/
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, callback){
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return false
  if (callback(arr[0])) return true
  
  return someRecursive(arr.slice(1), callback)
}

/* flatten
 - https://coupang.udemy.com/course/best-javascript-data-structures/learn/quiz/5338827#learning-tools
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
*/
function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
    let rst = []
    for (const el of arr) {
        if (Array.isArray(el)) {
            rst = rst.concat(flatten(el))
            // rst = [...rst, ...flatten(el)]
        } else
            rst.push(el)
        
    }
    
    return rst
}
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
