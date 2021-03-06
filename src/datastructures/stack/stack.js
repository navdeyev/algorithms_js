const createStack = () => {
    let head = null;

    const push = (value) => {
        head = {value, next: head};
    };

    const peek = () => {
        //Throwing exception when called on an empty stack allows us to distinguish between
        //null being an actual value added to the stack and returning null because nothing was yet added.
        if (head === null) {
            throw new Error('Peek called on an empty stack');
        }
        return head.value;
    };

    const pop = () => {
        if (head === null) {
            throw new Error('Pop called on an empty stack');
        }
        const node = head;
        head = head.next ? head.next : null;
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
        push,
        pop,
        peek,
        isEmpty,
        size,
        printOut
    }
};

export default createStack;