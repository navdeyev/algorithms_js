**Stock Prices**

Calculates the max possible profit from the given array of stock prices.
You must buy before you sell.

This boils down to finding the max diff in array such that larger element appears after smaller element.

[2, 3, 10, 6, 4, 8, 1] -> 8


**Solution 1**
1. Create an empty array that will hold max diffs
2. For every element in the data array
    - Take all the elements that come before the current element
    - Find the minimum among those elements
    - Deduct min element from the current element to find the max diff for the current element
    - Store max diff for the current element in the max diff array
3. Find max value among the stored max diff values

This requires a single iteration over the data array, but we are constantly creating new arrays, 
when we are slicing the initial data array. Some hidden time complexity comes from usage if Math.min and Math.max, 
which internally do their own iterations over the given arrays. We are also using additional space
to store max diffs for every position.

**Solution 2**
Let's try to get rid of the max diff array. It should be possible to store only one max diff value;

1. Initialize initial maxDiff as data[1] - data[0]
2. For every element in the array
    - Iterate over the subsequent elements
    - If the current subsequent element - current element > maxDif - store the new maxDiff
3. Return the max diff

We got rid of the additional array, now storing one single value. We are now exposing the complexity with two for loops.

**Solution 3**
Let's try to store the min value as well.

1. Initialize the maxDiff as data[1] - data[0]
2. Initialize the min as data[0]
3. For every element in the array
    - If the current element - min > maxDiff, store the new max diff
    - if the current element < min, store the new min
4. Return the max diff;

Through the process of iteration over the array, when we are storing the current min value, 
it automatically represents the min among the previous elements. 
Updating the maxDiff becomes easy, because we always have the min value.
 



