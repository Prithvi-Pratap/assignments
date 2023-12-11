/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let maxElement = numbers[0];
    for (const element of numbers) {
        if (maxElement < element)
            maxElement = element;
    }
    return maxElement;
}

module.exports = findLargestElement;