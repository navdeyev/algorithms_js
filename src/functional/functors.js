import {compose, curry} from 'ramda';

export class Container {
    constructor(x) {
        this.$value = x;
    }

    static of(x) {
        return new Container(x);
    }

    map(fn) {
        return Container.of(fn(this.$value));
    }
}

export class Maybe {
    constructor(x) {
        this.$value = x;
    }

    static of(x) {
        return new Maybe(x);
    }

    isNothing() {
        return this.$value === null || this.$value === undefined;
    };

    map(fn) {
        return this.isNothing() ? this : Maybe.of(fn(this.$value));
    };
}

export class Either {
    static of(x) {
        return new Right(x);
    }

    constructor(x) {
        this.$value = x;
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

export class IO {
    static of(x) {
        return new IO(() => x);
    }

    constructor(fn) {
        this.$value = fn;
    }

    map(fn) {
        return new IO(compose(fn, this.$value));
    }
}
