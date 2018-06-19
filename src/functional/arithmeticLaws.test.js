import { add, multiply } from './common';

describe('Arithmetic laws (knowledge of the ancients)', () => {

    const x = 1, y = 2, z = 3;

    it('demonstrates identity property', () => {
        expect(add(x, 0)).toBe(x);
    });

    it('demonstrates Commutative property', () => {
        expect(add(x, y)).toBe(add(y, x));
    });

    it('demonstrates associative property', () => {
        expect(
            add(add(x, y), z)
        ).toBe(
            add(x, add(y, z))
        );
    });

    it('demonstrates distributive property', () => {
        expect(
            multiply(x, add(y, z))
        ).toBe(
            add(multiply(x, y), multiply(x, z))
        );
    });

});