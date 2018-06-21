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

    chain(fn) {
        return this.map(fn).join();
    }

    ap(f) {
        return this.chain(fn => f.map(fn));
    }

}
