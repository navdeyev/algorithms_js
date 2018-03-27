**Rotate**

Write a function *rotate(arr, by)* that will rotate an array by a given number.

Rotation of [1, 2, 3, 4, 5] by 2 will give us [3, 4, 5, 1, 2].  

This is an easy task if we are allowed to use array methods like shift(), push(), slice(), splice() and concat().
It gets a bit more interesting if we are not allowed to use those and need to solve it with indexes.

One of the possible solutions:

    1. Introduce a helper function, that will
        - Store the first element
        - Shift all the elements in the array to the left
        - Add the stored element at the back
    2. Apply this function 'by' times.

**Rotation index**

Given a rotated array, find the index.

[5, 6, 7, 1, 2, 3] -> 3

In the sorted array, every element is bigger than the previous and smaller than the next one.
If this is not true for a current element, we found our index.