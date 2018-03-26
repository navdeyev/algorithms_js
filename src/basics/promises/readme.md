**Promises**

The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

**Async - Await**

Inside the function marked as *async*, you are allowed to put the *await* keyword in front of an
expression that returns a promise. When you do, the execution of the *async* function is paused
until the promise is resolved.

Async - await syntax allows us to write async code as if it was sync code. It uses promises under the hood.

**Generators**

Generators allow you to define an iterative algorithm by writing a single function 
which can maintain its own state.
A GeneratorFunction is a special type of function that works as a factory for iterators. 
When it is executed it returns a new Generator object. 
A function becomes a GeneratorFunction if it uses the function* syntax.