describe('Pure and Impure functions', () => {

    it('pure functions do not have side effects - calling slice does not change the original array', () => {
        const xs = [1, 2, 3, 4, 5];
        expect(xs.slice(0, 2)).toEqual([1, 2]);
        expect(xs.slice(0, 2)).toEqual([1, 2]);
        expect(xs.slice(0, 2)).toEqual([1, 2]);
    });

    it('impure functions have side effects - calling splice modifies the original array', () => {
        const xs = [1, 2, 3, 4, 5];
        expect(xs.splice(0, 2)).toEqual([1, 2]);
        expect(xs.splice(0, 2)).toEqual([3, 4]);
        expect(xs.splice(0, 2)).toEqual([5]);
    });

});
