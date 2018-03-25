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
