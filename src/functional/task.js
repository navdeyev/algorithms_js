import {compose} from 'ramda';
import {identity} from './common';

export class Task {
    constructor(fork) {
        this.fork = fork;
    }

    static of(x) {
        return new Task((_, resolve) => resolve(x));
    }

    map(fn) {
        return new Task((reject, resolve) => this.fork(reject, compose(resolve, fn)));
    }

    chain(fn) {
        return new Task((reject, resolve) => this.fork(reject, x => fn(x).fork(reject, resolve)));
    }

    join() {
        return this.chain(identity);
    }
}
