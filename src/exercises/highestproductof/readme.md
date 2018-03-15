**Find highest product of 3 elements in an integer array**

The trick here is the fact that two biggest negative numbers might give a bigger product than the product of second-biggest and third-biggest positive number.

Solutions:
The first solution that comes to mind - sort the array and do the necessary calculations.
Unfortunately, on average, sorting the array will take some time - O(nlogn) Time, O(1) Space.

A more efficient solution would be to iterate over the array and find 3 max values in the array and two smallest ones, then do the necessary calculations.
This allows us to iterate over the array only once - O(n) Time with O(1) Space.

