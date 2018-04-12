
const depthSeparation = (depths) => {
    let min = depths[0];
    let max = depths[0];

    depths.forEach((depth) => {
        if (depth < min) min = depth;
        if (depth > max) max = depth;
    });

    return max - min;
};

const isSuperBalanced = (tree) => {

    const depths = [];
    const traverse = (node, depth) => {
        if (node.left) {
            traverse(node.left, depth + 1);
        }
        if (node.right) {
            traverse(node.right, depth + 1);
        }
        if (!node.left && !node.right) {
            depths.push(depth);
        }
    };

    traverse(tree, 0);
    return depthSeparation(depths) <= 1;
};

export default isSuperBalanced;
