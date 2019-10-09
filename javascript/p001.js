/*  Multiples of 3 and 5
    If we list all the natural numbers below 10 that are multiples of 3 or 5, 
    we get 3, 5, 6 and 9. 
    The sum of these multiples is 23.
    Find the sum of all the multiples of 3 or 5 below 1000. */

// ------------------------------------------------------------------------
// Solution #1 from:
// https://github.com/FrankKair/polyglot-euler/blob/master/src/001/p001.js

function solve() {
    return Array(999)
      .fill(0)
      .map((value, index) => index + 1)
      .filter(value => value % 3 === 0 || value % 5 === 0)
      .reduce((sum, value) => sum + value)
  }
  
  const result = solve()
  console.log(result)

// ------------------------------------------------------------------------