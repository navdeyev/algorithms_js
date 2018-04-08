import createQueue from './queue';

describe('Queue', () => {

    it('validates behaviour of an empty queue', () => {
        const queue = createQueue();

        expect(queue.peek).toThrow('Peek called on an empty queue');
        expect(queue.isEmpty()).toBe(true);
        expect(queue.size()).toBe(0);
        expect(queue.printOut()).toBe('');
        expect(queue.dequeue).toThrow('Dequeue called on an empty queue');
    });

    it('validates behaviour of a non-empty queue', () => {
        const queue = createQueue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.isEmpty()).toBe(false);
        expect(queue.peek()).toBe(1);
        expect(queue.size()).toBe(3);
        expect(queue.printOut()).toBe('123');

        const shift = queue.dequeue();

        expect(shift).toBe(1);

        expect(queue.isEmpty()).toBe(false);
        expect(queue.peek()).toBe(2);
        expect(queue.size()).toBe(2);
        expect(queue.printOut()).toBe('23');
    });

});
