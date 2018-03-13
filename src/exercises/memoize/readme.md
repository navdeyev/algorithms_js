**Memoization**

Memoization is an optimization technique, which is used when we know that a specific function will be executed multiple times with the same set of parameters.

1) Create a cache key by hashing the passed down arguments;
2) Store the execution result in the cache against the generated key;
3) On subsequent executions, hash the parameters and check if the cache already contains the result

In order for this to work we need a pretty solid hashing function for key generation.
Weak hashing function may result in generating same hash for different arguments,
which will lead to the situation where the cached value does not match the actual execution result.
