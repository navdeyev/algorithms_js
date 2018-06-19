import {compose, concat, curry, head, map, prop} from 'ramda';
import {Container, Either, either, IO, left, Maybe} from './functors';
import {add} from './common';

describe('Chapter 8: Functor exercise 1', () => {

    it('Use `add` and `map` to make a function that increments a value inside a functor.', () => {
        const valueContainer = Container.of(1);
        const incrementFunction = map(add(1));
        expect(incrementFunction(valueContainer)).toEqual({$value: 2});
    });

});

describe('Chapter 8: Functor exercise 2', () => {
    const safeProp = curry((p, obj) => compose(Maybe.of, prop(p))(obj));

    const initial = compose(
        map(head),
        safeProp('name')
    );

    it('Use `safeProp` and `head` to find the first initial of the user. - User has a name', () => {
        const user = {id: 2, name: 'Albert', active: true};
        expect(initial(user)).toEqual({$value: 'A'});
    });

    it('Use `safeProp` and `head` to find the first initial of the user. - User has no name', function () {
        const user = {id: 2, active: true};
        expect(initial({...user, name: undefined})).toEqual({$value: undefined})
    });

});

describe('Chapter 8: Functor exercise 3', () => {
    const showWelcome = compose(concat('Welcome '), prop('name'));
    const checkActive = function checkActive(user) {
        return user.active
            ? Either.of(user)
            : left('Your account is not active');
    };

    const eitherWelcome = compose(
        map(showWelcome),
        checkActive
    );

    it('Write a function that uses `checkActive` and `showWelcome` to grant access or return the error. - Welcome', () => {
        const user = {name: 'Albert', active: true};
        expect(eitherWelcome(user)).toEqual({$value: 'Welcome Albert'});
    });

    it('Write a function that uses `checkActive` and `showWelcome` to grant access or return the error. - Error', () => {
        const user = {name: 'Albert', active: false};
        expect(eitherWelcome(user)).toEqual({$value: 'Your account is not active'});
    });

});

describe('Chapter 8: Functor exercise 4', () => {
    const showWelcome = compose(concat('Welcome '), prop('name'));
    const validateUser = curry((validate, user) => validate(user).map(_ => user));
    const save = user => new IO(() => ({...user, saved: true}));

    const validateName = (user) => {
        return user.name.length > 3
            ? Either.of(null)
            : left('Name too short')
    };

    const saveAndWelcome = compose(
        map(showWelcome),
        save
    );

    const register = compose(
        either(IO.of, saveAndWelcome),
        validateUser(validateName)
    );

    it('Write a function `validateName` which checks whether a user has a name longer than 3 characters or return an error message. - Passing validation', () => {
        const user = {name: 'Albert'};
        expect(validateUser(validateName)(user)).toEqual({$value: user});
    });

    it('Write a function `validateName` which checks whether a user has a name longer than 3 characters or return an error message. - Failing validation', () => {
        const user = {name: 'Art'};
        expect(validateUser(validateName)(user)).toEqual({$value: 'Name too short'});
    });

    it('Use `either`, `showWelcome` and `save` to write a `register` function to signup and welcome a user when the validation is ok. - Passing validation', () => {
        const user = {name: 'Albert'};
        expect(register(user).$value()).toEqual('Welcome Albert');
    });

    it('Use `either`, `showWelcome` and `save` to write a `register` function to signup and welcome a user when the validation is ok. - Failing validation', () => {
        const user = {name: 'Art'};
        expect(register(user).$value()).toEqual('Name too short');
    });

});
