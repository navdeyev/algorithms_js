import createStack from '../stack/stack';

const createQueue = () => {
    const inbox = createStack();
    const outbox = createStack();

    const enqueue = (value) => {
        inbox.push(value);
    };

    const dequeue = () => {
        //If the outbox is empty we need to put all the items of inbox to outbox
        if (outbox.isEmpty()) {
            while (!inbox.isEmpty()) {
                outbox.push(inbox.pop());
            }
        }
        return outbox.pop();
    };

    return {
        enqueue,
        dequeue
    }
};

export default createQueue;
