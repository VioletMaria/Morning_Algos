class Node {
    constructor(valueInput) {
        this.value = valueInput;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addToFront(value) {
        var node = new Node(value);
        node.next = this.head;
        this.head = node;
        return this;
    }

    reverseSSL() {
        
    }

    // print out the SLL
    display() {
        let result = "";
        let runner = this.head;
        while (runner != null) {
            result += `${runner.value}--> `;
            runner = runner.next;
        }
        console.log(result);
    }
}
sl1 = new SLL()
sl1.addToFront(5).addToFront(8).addToFront(12).addToFront(21).addToFront(3).display();
sl1.reverseSSL().display();