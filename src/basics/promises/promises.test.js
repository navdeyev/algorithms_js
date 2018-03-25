import {lookupCapital, lookupPopulation} from './promises';

describe('Promises', () => {

    it('looks up the capital for the given country', (done) => {
        const capitalPromise = lookupCapital('UK');
        capitalPromise.then((capital) => {
            expect(capital).toBe('London');
            done();
        });
    });

    it('returns an error message if there is no capital defined for the given country', (done) => {
        const capitalPromise = lookupCapital('France');
        capitalPromise.catch((error) => {
            expect(error).toBe('No capital defined for France');
            done();
        });
    });

    it('returns an array of capitals for given countries looked up in parallel', (done) => {
        Promise.all([
            lookupCapital('UK'),
            lookupCapital('Italy'),
            lookupCapital('Germany')
        ]).then((results) => {
            expect(results).toEqual(['London', 'Rome', 'Berlin']);
            done();
        });
    });

    it('returns an error message for the first failed promise', (done) => {
        const capitalHandler = jest.fn();

        const possibleErrors = [
            'No capital defined for France',
            'No capital defined for Portugal'
        ];

        Promise.all([
            lookupCapital('UK'),
            lookupCapital('Portugal'),
            lookupCapital('France')
        ])
            .then(capitalHandler)
            .catch((error) => {
                //Promises might resolve in random order
                //We will always get the error of the first rejected promise
                expect(possibleErrors.includes(error)).toBe(true);
                expect(capitalHandler).not.toHaveBeenCalled();
                done();
            });
    });

    it('returns the population of the capital for the given country', (done) => {
        lookupCapital('UK')
            .then(lookupPopulation)
            .then((capitalPopulation) => {
                expect(capitalPopulation).toBe(8787892);
                done();
            });
    });

    it('handles the error in one single block for a chain of promises', (done) => {
        const populationHandler = jest.fn();

        lookupCapital('France')
            .then(lookupPopulation)
            .then(populationHandler)
            .catch((error) => {
                expect(error).toBe('No capital defined for France');
                expect(populationHandler).not.toHaveBeenCalled();
                done();
            });
    });

});

describe('async await syntax', () => {

    it('looks up the capital for the given country', async () => {
        expect(await lookupCapital('Germany')).toBe('Berlin');
    });

    it('returns an error message if there is no capital defined for the given country', async () => {
        try {
            await lookupCapital('France');
        } catch (error) {
            expect(error).toBe('No capital defined for France')
        }
    });

    it('returns an array of capitals for given countries looked up in parallel', async () => {
        const capitals = await Promise.all([
            lookupCapital('UK'),
            lookupCapital('Italy'),
            lookupCapital('Germany')
        ]);
        expect(capitals).toEqual(['London', 'Rome', 'Berlin'])
    });

    it('returns an error message for the first failed promise', async () => {
        const possibleErrors = [
            'No capital defined for France',
            'No capital defined for Portugal'
        ];

        try {
            await Promise.all([
                lookupCapital('UK'),
                lookupCapital('Portugal'),
                lookupCapital('France')
            ]);
        } catch (error) {
            expect(possibleErrors.includes(error)).toBe(true);
        }
    });

    it('returns a capital population for a given country', async () => {
        const capital = await lookupCapital('UK');
        const population = await lookupPopulation(capital);
        expect(population).toBe(8787892);
    });

    it('handles the error in one single block for a chain of promises', async () => {
        try {
            const capital = await lookupCapital('France');
            const population = await lookupPopulation(capital);
        } catch (error) {
            expect(error).toBe('No capital defined for France');
        }
    });

});

