**Object creation**

What exactly new does?

1. Creates a new object
2. Sets the prototype on a newly created object to be the prototype of constructor function
3. Executes constructor with 'this' set as the object created in the step one
4. Returns the created object, unless the constructor creates an object, in which case the constructor-created object will be returned.
    
**Classes**

Classes in JavaScript are faked and in essence are just a syntactic sugar on top of prototypical model.
There is no way to make class properties private or protected.
