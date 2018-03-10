**Binary search**

Find an element index in a finite sorted array.

Short description of the solution:
1. Array divided to two parts, usually at center index;
2. If Element at the center index is target -> return index;
3. If center element is smaller than target -> run the binary search on the right half;
4. If center element is bigger -> run binary search on the left half;

Possible issues:
- Empty array
- Not sorted array
- Target element not present
- Sorted from big numbers to small numbers (not in the ascending order)
