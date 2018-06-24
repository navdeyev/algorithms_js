import {compose, curry, last, map, split} from 'ramda';
import {IO} from './io';
import {Maybe} from './maybe';
import {Left, Right} from './either';
import {chain, join} from './common';

describe('Chapter 9: Monads exercise 1', () => {

    const safeProp = curry((x, o) => Maybe.of(o[x]));
    const user = {
        id: 2,
        name: 'albert',
        address: {
            street: {number: 22, name: 'Walnut St'}
        }
    };

    it('Use safeProp and map/join safely get the street name when given a user', () => {
        const getStreetNameWithMap = compose(
            join,
            join,
            map(safeProp('name')),
            join,
            map(safeProp('street')),
            safeProp('address')
        );
        expect(getStreetNameWithMap(user)).toEqual('Walnut St');
    });

    it('Use safeProp and chain safely get the street name when given a user', () => {
        const getStreetNameWithChain = compose(
            join,
            chain(safeProp('name')),
            chain(safeProp('street')),
            safeProp('address')
        );
        expect(getStreetNameWithChain(user)).toEqual('Walnut St');
    });

});

describe('Chapter 9: Monads exercise 2', () => {

    const getFile = () => IO.of('/home/directory/fileName.txt');
    const pureLog = (str) => new IO(() => {
            console.log(str);
            return 'logged: ' + str
        }
    );

    it('Use getFile to get the filename, remove the directory so it\'s just the file, then purely log it', () => {
        const baseName = compose(last, split('/'));
        const logFileName = compose(
            join,
            chain(pureLog),
            map(baseName),
            getFile
        );
        expect(logFileName()).toBe('logged: fileName.txt');
    });

});

describe('Chapter 9: Monads exercise 3', () => {

    const addToList = (list) => (email) => new IO(() => {
        list.push(email);
        return list;
    });
    const addToMailingList = (addToList)([]);
    const emailBlast = list => new IO(() => 'emailed: ' + list.join(', '));
    const validateEmail = x => x.match(/\S+@\S+\.\S+/) ? new Right(x) : new Left('invalid email');

    it('Use validateEmail, addToMailingList, and emailBlast to implement ex4\'s type signature', () => {
        const joinMailingList = compose(
            join,
            join,
            map(compose(chain(emailBlast), addToMailingList)),
            validateEmail
        );
        expect(joinMailingList('some@email.com')).toEqual('emailed: some@email.com');
        expect(joinMailingList('someOther@email.com')).toEqual('emailed: some@email.com, someOther@email.com');
    });

});