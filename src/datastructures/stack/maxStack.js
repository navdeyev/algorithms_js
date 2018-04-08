import createStack from './stack';

const getMax = (stack) => {
    if (stack.isEmpty()) return null;

    const tempStack = createStack();
    let max = stack.peek();

    while (!stack.isEmpty()) {
        const el = stack.pop();
        if (max < el) {
            max = el;
        }
        tempStack.push(el);
    }

    while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
    }

    return max;
};


const createMaxStack = () => {
    const stack = createStack();
    stack.getMax = () => getMax(stack);
    return stack;
};

export default createMaxStack;