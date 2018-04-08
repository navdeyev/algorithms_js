describe('object creation with new and a regular constructor function', () => {

    function Food(type) {
        this.type = type;
    }

    //Every function has a prototype object on it
    Food.prototype.eat = function () {
        return `You ate the ${ this.type }`;
    };

    it('uses the eat() method defined in the prototype for the object created with new keyword', () => {
        const cookie = new Food('cookie');
        expect(Food.prototype.isPrototypeOf(cookie)).toBe(true);
        expect(typeof cookie).toBe('object');
        expect(cookie instanceof Food).toBe(true);
        expect(cookie.__proto__).toBe(Food.prototype);
        expect(cookie.eat()).toBe('You ate the cookie');
    });

    it('implements the new keyword for a regular constructor function', () => {
        //Construct function does the exact same thing a new keyword does
        function construct(constructor) {
            //First create an object
            const obj = {};

            //Then set the obj prototype to be the prototype of the constructor
            Object.setPrototypeOf(obj, constructor.prototype);

            //You can access all the arguments passed down to the function with 'arguments' keyword
            //Unfortunately, arguments is not a real array, it does not have array's methods on it
            const args = Array.prototype.slice.apply(arguments);

            //Execute the constructor function with the passed down parameters on the obj
            // args[0] is the constructor itself, we don't need it here
            constructor.apply(obj, args.slice(1));

            //Return the fully constructed object
            return obj;
        }

        const cookie = construct(Food, 'cookie');
        expect(Food.prototype.isPrototypeOf(cookie)).toBe(true);
        expect(typeof cookie).toBe('object');
        expect(cookie instanceof Food).toBe(true);
        expect(cookie.__proto__).toBe(Food.prototype);
        expect(cookie.eat()).toBe('You ate the cookie');
    });

});

describe('object creation with new and a constructor function that returns an object', () => {

    function Food(type) {
        this.type = type;
        return {
            silly: true
        };
    }

    //Every function has a prototype object on it
    Food.prototype.eat = function () {
        return `You ate the ${ this.type }`;
    };

    it('constructor function returns an object and it leads to confusion', () => {
        const cookie = new Food('cookie');
        expect(cookie).toEqual({silly: true});

        expect(typeof cookie).toBe('object');
        //Instance of check is no longer valid
        expect(cookie instanceof Food).toBe(false);

        expect(Food.prototype.isPrototypeOf(cookie)).toBe(false);
        expect(cookie.__proto__).toEqual({});
    });

    it('implements new keyword as it is defined in the actual JS', () => {
        //Construct function does the exact same thing a new keyword does
        function construct(constructor) {
            const obj = {};
            Object.setPrototypeOf(obj, constructor.prototype);
            const args = Array.prototype.slice.apply(arguments);
            return constructor.apply(obj, args.slice(1)) || obj;
        }

        const cookie = construct(Food, 'cookie');
        expect(cookie).toEqual({silly: true});

        expect(Food.prototype.isPrototypeOf(cookie)).toBe(false);
        expect(cookie.__proto__).toEqual({});
    });

});

describe('object creation with classes demonstrating that it is only syntactic sugar on top of prototypes', () => {

    class Food {
        constructor(type) {
            this.type = type;
        }

        eat() {
            return `You ate the ${ this.type }`;
        }
    }

    it('uses the eat() method defined in the prototype for the object created from a class', () => {
        expect(typeof Food).toBe('function');

        const cookie = new Food('cookie');
        expect(Food.prototype.isPrototypeOf(cookie)).toBe(true);
        expect(typeof cookie).toBe('object');
        expect(cookie instanceof Food).toBe(true);
        expect(cookie.__proto__).toBe(Food.prototype);
        expect(cookie.eat()).toBe('You ate the cookie');
    });

    it('demonstrates inheritance with classes', () => {
        class Cookie extends Food {
            constructor() {
                super('cookie');
            }
        }

        expect(typeof Cookie).toBe('function');

        const cookie = new Cookie();
        expect(Food.prototype.isPrototypeOf(cookie)).toBe(true);
        expect(typeof cookie).toBe('object');
        expect(cookie instanceof Food).toBe(true);
        expect(cookie instanceof Cookie).toBe(true);

        //Cookie is derived from Food class, so there is a longer prototype chain
        expect(cookie.__proto__.__proto__).toBe(Food.prototype);
        expect(cookie.eat()).toBe('You ate the cookie');
    });

    it('demonstrates it is possible to use bind on the methods of a class', () => {
        const boundFunction = Food.prototype.eat.bind({type: 'cookie'});
        expect(boundFunction()).toBe('You ate the cookie');
    });

    it('demonstrates that the class properties are not private', () => {
        const cookie = new Food('cookie');
        expect(cookie.eat()).toBe('You ate the cookie');

        //Nothing is preventing us from doing the following assignment
        cookie.type = 'pie';
        expect(cookie.eat()).toBe('You ate the pie');
    });

});

