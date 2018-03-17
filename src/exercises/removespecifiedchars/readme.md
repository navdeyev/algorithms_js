**Remove specified characters**

Transform a given string in a way, that all the given characters will be removed from it.
If we remove ' ' and '&' chars from 'Dough & nut', we get 'Doughnut'

**Solutions**

*Copy to resulting array if char is not present in the remove string*
1. Split both the given string and remove string to characters;
2. Write a function that will check if the char is present in the remove array.
3. Iterate over the given string array
4. Check if current character is present in the remove string array.
   If it is present - skip in, otherwise add to the resulting array.
5. Return the resulting array.

This solution requires additional resulting array. The function that is checking if the char is present in the remove string can be optimized.

*Copy to the resulting array if char is not present in the remove map*
1. Split both the given string and remove string to characters;
2. Construct a map, where each remove character is a key
3. Iterate over the given array
4. Check if current char is present in the map.
    If present - skip it, otherwise add to remove string array.
5. Return the resulting array.

This solution optimizes the is-present check, but still requires an additional array.

*Copy to the same array, tracking the end position*
1. Split both the given string and remove string to characters;
2. Construct a map, where each remove character is a key
3. Iterate over the given array with a source and destination index. Initially both are 0.
    - If the char is not present in the remove array, copy it over to destination index.
    - Increment destination index
4. Cut off the tail of the given string array, at the last destination index.
5. Return the transformed array.

