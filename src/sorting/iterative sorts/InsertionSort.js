/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
*/

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    // we start from index 1 because index 0 is always sorted
    let numberToInsert = nums[i];
    let j; // counter for the inner loop

    // loop backwards
    for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      // move numbers to the right until we find where to insert

      nums[j + 1] = nums[j];
    }
    // do the insertion
    nums[j + 1] = numberToInsert;
  }

  return nums;
};

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

let sortedNums = insertionSort(nums);

console.log(sortedNums);
