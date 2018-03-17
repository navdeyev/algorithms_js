**Counting chars**

Transform a given string in a way: aaa -> a3; a2b3a1c3 -> a2b3a1c3

**Solutions**

This is quite a simple transformation, which can be done in one iteration over the array of chars.

1. Validate for empty string, return '' right away if it's empty
2. Split the string to chars array
3. Initialize the current char as array[0]
4. Initialize the counter as 1;
5. Start the iteration over the array at i = 1 index
    - If the arr[i] is the same as current char increment counter
    - Otherwise add the char to output string followed by counter. Save chars[i] as current char. Reset the counter to 1
6. Return the output string.
