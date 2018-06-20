import {curry} from 'ramda';

export class Either {
    static of(x) {
        return new Right(x);
    }

    constructor(x) {
        this.$value = x;
    }

    join() {
        return this.$value;
    }
}

export class Left extends Either {
    map(f) {
        return this;
    }
}

export class Right extends Either {
    map(f) {
        return Either.of(f(this.$value));
    }
}

export const left = x => new Left(x);

export const either = curry((f, g, e) => {
    let result;
    switch (e.constructor) {
        case Left:
            result = f(e.$value);
            break;

        case Right:
            result = g(e.$value);
            break;
        // No Default
    }

    return result;
});
