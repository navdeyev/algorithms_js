import createStack from './stack';

describe('stack', () => {

    it('validates state of an empty stack', () => {
        const stack = createStack();

        expect(stack.peek()).toBe(null);
        expect(stack.isEmpty()).toBe(true);
        expect(stack.size()).toBe(0);
        expect(stack.printOut()).toBe('');
        expect(stack.pop).toThrow('Pop called on an empty stack');
    });

    it('validates state of a non-empty stack', () => {
        const stack = createStack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.isEmpty()).toBe(false);
        expect(stack.peek()).toBe(3);
        expect(stack.size()).toBe(3);
        expect(stack.printOut()).toBe('321');

        const shift = stack.pop();

        expect(shift).toBe(3);

        expect(stack.isEmpty()).toBe(false);
        expect(stack.peek()).toBe(2);
        expect(stack.size()).toBe(2);
        expect(stack.printOut()).toBe('21');
    });

});