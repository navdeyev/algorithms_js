const createQueue = () => {
    let head = null;

    const enqueue = (value) => {
        if (head === null) {
            head = {value, next: null};
        } else {
            let node = head;
            while (node.next) {
                node = node.next;
            }
            node.next = {value, next: null};
        }
    };

    const peek = () => {
        if (head === null) {
            throw new Error('Peek called on an empty queue');
        }

        return head.value;
    };

    const dequeue = () => {
        if (head === null) {
            throw new Error('Dequeue called on an empty queue');
        }

        const node = head;
        head = head.next;
        return node.value;
    };

    const isEmpty = () => {
        return head === null;
    };

    const size = () => {
        let i = 0;
        let node = head;
        while (node) {
            i++;
            node = node.next;
        }
        return i;
    };

    const printOut = () => {
        let node = head;
        let out = '';
        while (node) {
            out += node.value;
            node = node.next;
        }
        return out;
    };

    return {
        enqueue,
        dequeue,
        peek,
        isEmpty,
        size,
        printOut
    }

};

export default createQueue;