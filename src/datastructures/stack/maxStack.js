import createStack from './stack';

const getMax = (stack) => {
    const tempStack = createStack();
    let max = stack.peek();

    while (!stack.isEmpty()) {
        const el = stack.pop();
        if (max < el) {
            max = el;
        }
        tempStack.push(el);
    }

    while (tempStack.peek()) {
        stack.push(tempStack.pop());
    }

    return max;
};


const createMaxStack = () => {
    const stack = createStack();
    stack.getMax = () => getMax(stack);
};

export default createMaxStack;