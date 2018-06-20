import {compose} from 'ramda';

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

    join() {
        return this.$value();
    }
}
