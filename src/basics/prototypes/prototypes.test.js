describe('demonstrates the prototype behaviour', () => {

    let food;
    beforeEach(() => {
        food = {
            init: function (type) {
                this.type = type;
                return this;
            },
            eat: function () {
                return `You ate the ${ this.type }`;
            }
        };
    });

    it(`uses the eat() method defined in the prototype`, () => {
        //Object.create() creates a new object and sets the passed down object as prototype
        const cookie = Object.create(food).init('cookie');
        expect(food.isPrototypeOf(cookie)).toBe(true);
        expect(cookie.__proto__).toBe(food);

        //Since cookie object does not have it's own eat() method it calls the method of the prototype
        expect(cookie.eat()).toBe('You ate the cookie');
    });

    it('uses the eat() method defined in the prototype even if it was dynamically updated', () => {
        const cookie = Object.create(food).init('cookie');
        expect(cookie.eat()).toBe('You ate the cookie');

        //Updating the prototype object
        food.eat = function () {
            return `YOU ATE THE ${ this.type.toUpperCase() }!`;
        };

        //Since cookie object does not have it's own eat() method it calls the method of the prototype
        expect(cookie.eat()).toBe('YOU ATE THE COOKIE!');
    });

    it('uses the objects own type if it was properly init-ted, not deferring to prototype', () => {
        const cookie = Object.create(food).init('cookie');
        expect(cookie.eat()).toBe('You ate the cookie');

        //Define the default type in the prototype object
        food.type = 'pie';

        //Since cookie was properly init-ted it still has it's own type
        expect(cookie.eat()).toBe('You ate the cookie');
    });

    it('uses the default type from the prototype if the object was not properly init-ted', () => {
        const cookie = Object.create(food);
        //At this point neither cookie nor it's prototype have a type
        expect(cookie.eat()).toBe('You ate the undefined');

        //Define the default type in the prototype object
        food.type = 'pie';

        //Now cookie is missing a type, but it gets a type from the prototype
        expect(cookie.eat()).toBe('You ate the pie');

        cookie.init('cookie');
        //Now cookie has a type, so it is not deferring to prototype
        expect(cookie.eat()).toBe('You ate the cookie');
    });

});