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

    join() {
        return this.$value;
    }
}
