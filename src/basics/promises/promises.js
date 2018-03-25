//Used to simulate the different order of resolving promises for Promise.all()
const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const capitalLookupService = (country) => {
    const data = {
        'UK': 'London',
        'Germany': 'Berlin',
        'Spain': 'Madrid',
        'Italy': 'Rome'
    };
    return data[country];
};

const populationLookupService = (city) => {
    const data = {
        'London': 8787892,
        'Berlin': 3711930,
        'Madrid': 3182981,
        'Rome': 2879215
    };
    return data[city];
};

export const lookupCapital = (country) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const capital = capitalLookupService(country);
            if (capital) {
                resolve(capital);
            } else {
                reject(`No capital defined for ${ country }`);
            }
        }, getRandomInt(50))
    });
};

export const lookupPopulation = (city) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const population = populationLookupService(city);
            if (population) {
                resolve(population);
            } else {
                reject(`No population data available for ${ city }`);
            }
        }, getRandomInt(50))
    });
};

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

