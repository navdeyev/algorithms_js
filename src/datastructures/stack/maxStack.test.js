import createMaxStack from "./maxStack";

describe('MaxStack has getMax() method that returns max element in that stack', () => {

    const testCases = [
        {input: [], output: null},
        {input: [5, 4, 3, 2, 1], output: 5},
        {input: [5, 4, 3, 2, 1], output: 5},
        {input: [3, 2, 1, 4, 5], output: 5}
    ];

    testCases.forEach((testCase) => {
        it(`given ${testCase.input} returns a max value ${testCase.output}`, () => {
            const maxStack = createMaxStack();

            console.log(maxStack);

            testCase.input.forEach((el) => {
                maxStack.push(el);
            });
            expect(maxStack.getMax()).toBe(testCase.output);
        });
    });

    // testCases.forEach((testCase) => {
    //     it(`given ${testCase.input} returns a max value ${testCase.output}`, () => {
    //         const maxStack = impls.MaxStackFactory();
    //         testCase.input.forEach((el) => {
    //             maxStack.push(el);
    //         });
    //         expect(maxStack.getMax()).toBe(testCase.output);
    //     });
    // });
    //
    // testCases.forEach((testCase) => {
    //     it(`given ${testCase.input} returns a max value ${testCase.output}`, () => {
    //         const maxStack = new impls.MaxStackClass();
    //         testCase.input.forEach((el) => {
    //             maxStack.push(el);
    //         });
    //         expect(maxStack.getMax()).toBe(testCase.output);
    //     });
    // });

});