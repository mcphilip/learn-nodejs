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
    append(data) {
        const newNode = new Node(data);
        if( !this.head ) {
            this.head = newNode;
        }
        else {
            let endNode = this.head;
            while(endNode.next) {
                endNode = endNode.next;
            }
            endNode.next = newNode;
        }
    }
    insertAfter(targetData, data) {
        let target = this.findNode(targetData);
        if( target ) {
            const newNode = new Node(data);
            if( target.next ) {
                newNode.next = target.next;
            }
            target.next = newNode;
        }
    }
    findNode(data) {
        let node = this.head;
        while(node) {
            if(node.data === data) {
                return node;
            }
            node = node.next;
        }
        return null;
    }
    removeFirst() {
        if(this.head) {
            this.head = this.head.next ? this.head.next : null;
        }
    }
    remove(data) {
        if(!this.head) return;
        if(this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let node = this.head.next;
        let previousNode = this.head;
        while(node) {
            if(node.data === data) {
                previousNode.next = node.next;
                return;
            }
            previousNode = node;
            node = node.next;
        }
    }
    length() {
        var i = 0;
        var node = this.head;
        while(node) {
            i += 1;
            node = node.next;
        }
        return i;
    }
    reverse() {
        const newList = new LinkedList();
        let current = this.head;
        while(current) {
            newList.prepend(current.data);
            current = current.next;
        }
        return newList;
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