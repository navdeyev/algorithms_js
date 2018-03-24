**Bind and this**

This keyword does not mean anything without context.

If the function is bound to an object, it will consider the mentioned object as it's context;

If the function is not bound to an object, this becomes a reference to the global object.
Depending on the environment global object may represent different things, in case of a browser - Window.

If you execute the following function in the browser's console, it will log out Window object:

function() {
    return this;
}

**An example closer to real life**

    const dog = {
        sound: 'woof',
        logOutSound: function () {
            console.log(this.sound);
        }
    };

    const button = document.getElementById('soundButton');
    soundButton.addEventListener(
        'click',
        dog.logOutSound.bind(dog)
    )
