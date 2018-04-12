import buildTree from './binaryTree';
import isSuperBalanced from './balancedTree';

describe('superbalanced tree', () => {

    const testCases = [
        {
            input: {
                value: 0,
                left: {
                    value: 1
                },
                right: {
                    value: 1
                }
            },
            output: true
        },
        {
            input: {
                value: 0,
                left: {
                    value: 1,
                    left: {
                        value: 2,
                        right: {
                            value: 3,
                            left: {
                                value: 4
                            }
                        }
                    }
                },
                right: {
                    value: 1
                }
            },
            output: false
        }
    ];

    testCases.forEach(testCase => {
        it('applies the testCase', () => {
            expect(isSuperBalanced(buildTree(testCase.input))).toBe(testCase.output);
        });
    })

});


