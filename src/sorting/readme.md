**Sorting algorithms**

In-place sorting is a form of sorting in which a small amount of extra space is used to manipulate the input set. In other words, the output is placed in the correct position while the algorithm is still executing, which means that the input will be overwritten by the desired output on run-time.
A sorting algorithm is said to be stable if two objects with equal keys appear in the same order in sorted output as they appear in the input array to be sorted. 

**Insertion sort**
Insertion sort is a stable in-place sorting algorithm suitable for sorting small data sets.
Often used as a building block for more complex sorting algorithms.

Best case: O(n) when array is already sorted. Common usage: sort array again after additional elements were added.
Average and worst cases both O(n^2) - slow for large arrays of data

**Selection sort**
In-place algorithm, typical implementation is not stable
O(n^2) in the best, average and worst case




