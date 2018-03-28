**Sorting algorithms**

In-place sorting is a form of sorting in which a small amount of extra space is used to manipulate the input set. In other words, the output is placed in the correct position while the algorithm is still executing, which means that the input will be overwritten by the desired output on run-time.
A sorting algorithm is said to be stable if two objects with equal keys appear in the same order in sorted output as they appear in the input array to be sorted. 

**Insertion sort**
It builds a sorted array one element at a time by comparing each new element to 
the already-sorted elements and inserting the new element into the correct location

Insertion sort is a stable in-place sorting algorithm suitable for sorting small data sets.
Often used as a building block for more complex sorting algorithms.

Best case: O(n) when array is already sorted. Common usage: sort array again after additional elements were added.
Average and worst cases both O(n^2) - slow for large arrays of data

**Selection sort**
Start with the first element in the array and scan through the array to
find the element with the smallest key, which it swaps with the first element.

In-place algorithm, typical implementation is not stable
O(n^2) in the best, average and worst case


**QuickSort**

Choose a pivot value from a data set and split the set into two subsets: 
a set that contains all values less than the pivot and a set that contains all values greater than or equal to the pivot.
The pivot/split process is recursively applied to each subset until there are no more subsets to split. 
The results are combined to form the final sorted set.

Worst case: O(n^2) if the pivot value is the minimum - left subset is empty, right subset has n-1 elements
On average: somewhere between O(log(n)) and O(n) - O(n log(n))

The algorithm provided here is a demonstration of the idea, it's not the most efficient implementation.

**Merge sort**

This algorithm works by splitting array to sub-arrays, sorting each individual part and merging them back together.
This algorithm suits you best if the data doesn't fit into memory.

Any sorting algorithm can be applied to sort each individual part.
Common pattern is to use insertion sort to sort subsets below specified minimum size.

The best, average, and worst-case running times for merge sort are all O(n log(n));
