class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DLL{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;
    }

    addToFront(value) {
        var node = new Node(value);
        if(this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        return this;
    }


    addToBack(value) {
        var node = new Node(value);
        if(this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        return this;
    }


    printList() {
        var runner = this.head
        while(runner){
            console.log(runner.value);
            runner = runner.next
        }
    }
}

dookie = new DLL();
dookie.addToFront(5).addToFront(6).addToFront(7).printList();
dookie.addToBack(8).addToBack(9).addToBack(10).printList();