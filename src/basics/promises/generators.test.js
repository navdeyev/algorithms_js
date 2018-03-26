import {capitalLookupService, lookupCapital, lookupPopulation} from "./promises";

describe('basic generators', () => {

    function* capitalsGenerator() {
        const ukCapital = yield 'UK';
        const germanCapital = yield 'Germany';
        const spanishCapital = yield 'Spain';
        return [ukCapital, germanCapital, spanishCapital];
    }

    it('assembles an array of capitals for given countries', () => {
        //Initializing the generator
        const gen = capitalsGenerator();

        //Executing the generator
        let countryIteration = gen.next();

        //Returns an object with the yielded value and an indication on whether generator is paused
        expect(countryIteration).toEqual({value: 'UK', done: false});

        //You can pass down a value to generator, in this case a looked up capital for UK
        countryIteration = gen.next(capitalLookupService(countryIteration.value));
        expect(countryIteration).toEqual({value: 'Germany', done: false});

        countryIteration = gen.next(capitalLookupService(countryIteration.value));
        expect(countryIteration).toEqual({value: 'Spain', done: false});

        const capitalsArray = gen.next(capitalLookupService(countryIteration.value));
        //When the end of the generator is reached, done is marked as true
        expect(capitalsArray).toEqual({
            value: ['London', 'Berlin', 'Madrid'],
            done: true
        });
    });

});

describe('using generators with promises to handle async stuff', () => {

    //Similar functions are available in libraries, co for example
    function runGenerator(gen) {
        const generator = gen();

        function iterate(iteration) {
            if (iteration.done) return iteration.value;
            const promise = iteration.value;
            return promise.then(res => iterate(generator.next(res)));
        }

        return iterate(generator.next());
    }

    const createCapitalPopulationLookupGenerator = (country) => {
        return function* lookup() {
            const capital = yield lookupCapital(country);
            return yield lookupPopulation(capital);
        }
    };

    it('looks up the population of the capital for the given country', async () => {
        const generator = createCapitalPopulationLookupGenerator('UK');
        const res = await runGenerator(generator);
        expect(res).toBe(8787892);
    });

});