class BSTNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }

    add(value) {
        let newNode = new BSTNode(value);
        if(this.root == null) {
            this.root = newNode;
        }
        else {
            let runner = this.root;
            while(runner != null) {
                if(newNode.value > runner.value){
                    if(runner.right == null){
                        runner.right = newNode;
                    } else {
                        runner = runner.right;
                    }
                } 
                else if (newNode.value < runner.value) {
                    if(runner.left == null) {
                        runner.left = newNode;
                    } else {
                        runner = runner.left;
                    }
                }
            }
        }
        console.log(newNode);
       return this;
    }

    // findMin() {
    //     var runner = this.root;
    //     while ( runner.left != null){
    //         runner = runner.left
    //     }
    //     return this;
    // }

    // findMax() {
    //     var runner = this.root;
    //     while(runner.right != null){
    //         runner = runner.right;
    //     }
    //     return this;
    // }

    isBalanced(root) {
        let runner = this.root;
        let leftSide = 0;
        let rightSide = 0;
        while(runner != null) {
            if(runner.left != null) {
                leftSide += 1;
                console.log(leftSide)
            }
            if(runner.right != null) {
                rightSide += 1;
            }
        }
    }

    height(rootNode) {
    }

    size(node) {
    }

printTree(node) {
        console.log("Current node = ", node.value);
        if (node.left != null) {
            console.log("Left node of ", node.value, " = " + node.left.value);
            this.printTree(node.left);
        }
        if (node.right != null) {
            console.log("Right node of ", node.value, " = " + node.right.value);
            this.printTree(node.right);
        }

    }
}


let newBST = new BST();
newBST.add(35)
newBST.add(45)
newBST.add(20)
newBST.add(6)
newBST.add(3)
newBST.add(46)
newBST.printTree(newBST.root);
newBST.isBalanced();
// newBST.findMin(newBST.root);
// newBST.findMax(newBST.root);