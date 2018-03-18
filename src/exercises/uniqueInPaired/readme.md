**Find unique in an array of integers**

Given an array of paired integers with one exceptional unique integer, find this unique integer.

[1, 2, 3, 4, 1, 2, 4] -> 3

**Solution**

First thing that comes to mind - sort the array;

1. Sort the array
2. Check if the first integer is unique
3. Check if the last integer is unique
4. Iterate over array, checking whether the current integer is the same as a previous one or the next one

Another version with the sorted array:

1. Sort the array
2. Iterate over the array
3. Slice the array into pairs
4. Compare the integers in the pairs, if they aren't equal, the first integer is unique

Unfortunately, both these solutions depend on the efficiency of the sorting algorithm

Unsorted array can be converted to a map of appearances, where the key is the number and the value is number of appearances.
This will also allow us to find all the unique integers in the array.

1. Initialize a map
2. Iterate over the array
3. If the current element is not present on the map - add it as a key with value 1.
4. If the current element is present on the map - increment the value
5. Iterate over the created map.
6. If the value is 1, the key represents the unique integer.

This solution is iterating over the initial array only once, but it requires additional memory
for the map, that is roughly half the size of the array and iteration over this build map.

