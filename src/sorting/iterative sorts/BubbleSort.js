/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
    
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

const bubbleSort = (nums) => {
  let swapped = false;

  do {
    swapped = false;
    for (let index = 0; index < nums.length; index++) {
      if (nums[index] > nums[index + 1]) {
        const temp = nums[index];
        nums[index] = nums[index + 1];
        nums[index + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return nums;
};

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

const sortedNums = bubbleSort(nums);

console.log(sortedNums);
