import {compose, curry, filter, flip, head, join, last, map, prop, reduce, replace, sortBy} from 'ramda';
import accounting from 'accounting';

import { add } from './common';

const CARS = [
    {name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: 'Spyker C12 Zagato', horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: 'Jaguar XKR-S', horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: 'Aston Martin One-77', horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: 'Pagani Huayra', horsepower: 700, dollar_value: 1300000, in_stock: false}
];

describe('Chapter 5: Compose exercise 1', () => {
    const isLastInStock = cars => {
        const last_car = last(cars);
        return prop('in_stock', last_car);
    };

    it('Use _.compose() to rewrite the provided function.', () => {
        expect(isLastInStock(CARS)).toEqual(false);

        const isLastInStockCompose = compose(prop('in_stock'), last);
        expect(isLastInStockCompose(CARS)).toBe(false);
    });
});

describe('Chapter 5: Compose exercise 2', () => {

    it('Use compose(), prop() and head() to retrieve the name of the first car', () => {
        const nameOfFirstCar = compose(prop('name'), head);
        expect(nameOfFirstCar(CARS)).toBe('Ferrari FF');
    });

});

describe('Chapter 5: Compose exercise 3', () => {
    const average = xs => reduce(add, 0, xs) / xs.length;

    const averageDollarValue = (cars) => {
        const dollarValues = map(c => c.dollar_value, cars);
        return average(dollarValues);
    };

    it('Use the helper function average to refactor averageDollarValue as a composition', () => {
        expect(averageDollarValue(CARS)).toBe(790700);

        const averageDollarValueComposed = compose(average, map(prop('dollar_value')));
        expect(averageDollarValueComposed(CARS)).toBe(790700);
    });
});

describe('Chapter 5: Compose exercise 4', () => {
    const toLower = x => x.toLowerCase();
    const underscore = replace(/\W+/g, '_');

    //sanitizeNames([{name: 'Ferrari FF'}]) => ['ferrari_ff']
    it('Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored car\'s names.', () => {
        const names = ['ferrari_ff', 'spyker_c12_zagato', 'jaguar_xkr_s', 'audi_r8', 'aston_martin_one_77', 'pagani_huayra'];
        const sanitizeNames = map(compose(underscore, toLower, prop('name')));
        expect(sanitizeNames(CARS)).toEqual(names);
    });
});

describe('Chapter 5: Compose bonus exercise 1', () => {
    const availablePrices = function (cars) {
        const available_cars = filter(prop('in_stock'), cars);
        return available_cars.map(x => accounting.formatMoney(x.dollar_value)).join(', ');
    };

    it('Refactor availablePrices with compose.', () => {
        expect(availablePrices(CARS)).toBe('$700,000.00, $1,850,000.00');
        const availablePricesCompose = compose(
            join(', '),
            map(compose(accounting.formatMoney, prop('dollar_value'))),
            filter(prop('in_stock'))
        );
        expect(availablePricesCompose(CARS)).toBe('$700,000.00, $1,850,000.00');
    });
});

describe('Chapter 5: Compose bonus exercise 2', () => {

    const fastestCar = cars => {
        const sorted = sortBy(car => car.horsepower, cars);
        const fastest = last(sorted);
        return fastest.name + ' is the fastest';
    };

    it('refactor fastestCar to pointfree', () => {
        expect(fastestCar(CARS)).toBe('Aston Martin One-77 is the fastest');

        const append = flip(curry(add));
        const fastestCarPointFree = compose(
            append(' is the fastest'),
            prop('name'),
            last,
            sortBy(prop('horsepower'))
        );
        expect(fastestCarPointFree(CARS)).toBe('Aston Martin One-77 is the fastest');
    });
});