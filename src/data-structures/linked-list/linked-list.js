var Node = require('./node.js');

module.exports = class LinkedList {
    constructor() {
        this.head = null;
    }
    prepend(data) {
        const newHead = new Node(data);
        if( !this.head ) {
            this.head = newHead;
        }
        else {
            newHead.next = this.head;
            this.head = newHead;
        }
    }
    toString() {
        let current = this.head;
        let display = '';
        while(current) {
            display += current.data + (current.next ? ' -> ' : '');
            current = current.next;
        }
        return display;
    }
}