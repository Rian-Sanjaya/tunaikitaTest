class treeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        if (Array.isArray(val)) {
            for (let i=0; i<val.length; i++) {
                this.insertBegin(val[i]);
            }
        } else {
            this.insertBegin(val);
        }
    }

    insertBegin(val) {
        const newNode = new treeNode(val);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.val < node.val) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
}

class TreeTraversal {
    constructor() {
        this.valsTree = [];
    }

    inOrderTraversal(node) {
        this.inOrderTraversalNode(node.root, this.valsTree)
        return this.valsTree;
    }

    inOrderTraversalNode(node, vals) {
        if (node) {
            this.inOrderTraversalNode(node.left, vals);
            if (node.val) {
                vals.push(node.val);
            }
            this.inOrderTraversalNode(node.right, vals);
        }
    }
}

let tree = new BinaryTree();
tree.insert([1,null,2,3]);

let traverse = new TreeTraversal();
traverse.inOrderTraversal(tree);