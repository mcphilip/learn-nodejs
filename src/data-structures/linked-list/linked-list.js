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
            let endNode = this.getLast();
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
    getFirst() {
        return this.head;
    }
    getLast() {
        if(!this.head) return null;
        let lastNode = this.head;
        while(lastNode.next) {
            lastNode = lastNode.next;
        }
        return lastNode;
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
    middleNodeData() {
        let node1 = this.head;
        let node2 = this.head;
        let i = 1;
        while(node1) {
            node1 = node1.next;
            if( i % 2 == 0) {
                node2 = node2.next;
            }
            i++;
        }
        return node2 ? node2.data : null;
    }
    makeLoop() {
        if(!this.head) return;
        let lastNode = this.getLast();
        lastNode.next = this.head;
    }
    containsLoop() {
        let nodeFast = this.head;
        let nodeSlow = this.head;
        while(nodeFast) {
            nodeFast = nodeFast.next ? nodeFast.next.next : null;
            nodeSlow = nodeSlow.next;
            if( nodeSlow && nodeFast === nodeSlow ) {
                return true;
            }
        }
        return false;
    }
    findFirstNodeOfLoop() {
        let node = this.head;
        while(node) {
            if(node.traversed === true) {
                return node;
            }
            node.traversed = true;
            node = node.next;
        }
        return null;
    }
    toString() {
        if(this.containsLoop()) {
            throw 'List contains a loop!';
        }

        let current = this.head;
        let display = '';
        while(current) {
            display += current.data + (current.next ? ' -> ' : '');
            current = current.next;
        }
        return display;
    }
}