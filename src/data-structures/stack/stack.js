var LinkedList = require('./../linked-list/linked-list');

module.exports = class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    }
    push(data) {
        this.linkedList.prepend(data);
    }
    pop() {
        const top = this.linkedList.getFirst();
        this.linkedList.removeFirst();
        return top ? top.data : null;
    }
    toString() {
        return this.linkedList.toString();
    }
}