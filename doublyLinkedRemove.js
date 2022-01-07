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
        if(!this.head){
            this.head = node;
            this.tail = node;
        }
        else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++
        return this
    }

    addtoBack(value) {
        var node = new Node(value);
        if(!this.tail){
            this.tail = node;
            this.head = node;
        }
        else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++
        return this
    }

    removeFromFront(){
        if(this.head){
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            this.head = null;
            this.tail = null;
        }
    }
    
    removeFromBack(){
        if(this.head){
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            console.log("Nie mame list")
            return this;
        }
    }

    printList() {
        var runner = this.head
        while(runner){
            console.log(runner.value);
            runner = runner.next
        }
    }
    printListBackwards(){
        var runner = this.tail;
        while(runner){
            console.log(runner.value);
            runner = runner.prev;
        }
    }
}

dookie = new DLL();
dookie.addToFront(8).addToFront(7).addToFront(6).addToFront(5).printList();
console.log("******************************");
dookie.removeFromFront();
dookie.printList();
console.log("******************************");
dookie.removeFromBack();
dookie.printList();
console.log("******************************");
dookie.printListBackwards();