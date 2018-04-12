const buildTree = (config) => {
    if (config) {
        return {
            value: config.value,
            left: buildTree(config.left),
            right: buildTree(config.right),
        }
    }
};

export default buildTree;