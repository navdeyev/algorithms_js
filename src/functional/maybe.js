export class Maybe {
    constructor(x) {
        this.$value = x;
    }

    static of(x) {
        return new Maybe(x);
    }

    isNothing() {
        return this.$value === null || this.$value === undefined;
    }

    map(fn) {
        return this.isNothing() ? this : Maybe.of(fn(this.$value));
    }

    join() {
        return this.isNothing() ? Maybe.of(null) : this.$value;
    }

    ap(f) {
        return this.isNothing() ? this : f.map(this.$value);
    }

}
