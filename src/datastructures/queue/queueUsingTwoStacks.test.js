import createQueue from './queueUsingTwoStacks';

describe('Queue build from two stacks', () => {

    it('validates behaviour of a queue', () => {
        const q = createQueue();
        q.enqueue(1);
        q.enqueue(2);
        expect(q.dequeue()).toBe(1);
        expect(q.dequeue()).toBe(2);
        expect(q.dequeue).toThrow('Pop called on an empty stack');
        q.enqueue(3);
        q.enqueue(4);
        q.enqueue(5);
        expect(q.dequeue()).toBe(3);
        expect(q.dequeue()).toBe(4);
        expect(q.dequeue()).toBe(5);
        expect(q.dequeue).toThrow('Pop called on an empty stack');
    });

});