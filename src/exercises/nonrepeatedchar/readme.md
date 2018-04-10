**Find first non-repeated char in a string**

First, build the character count hash table:
- For each character
- If no value is stored for the character, store 1
- Otherwise, increment the value

Second, scan the string:
- For each character
- Return character if count in hash table is 1
- If no characters have count 1, return empty string

Gives O(n)
