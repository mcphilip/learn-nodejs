var it = require('mocha').it;
var expect = require('chai').expect;
var LinkedList = require('../../../src/data-structures/linked-list/linked-list');

describe('LinkedList', function() {
    describe('prepend', function() {
        it('should add data to beginning of linked list', function() {
            const list = new LinkedList();
            list.prepend(1);
            list.prepend(2);
            expect(list.toString()).to.equal('2 -> 1');
        });
    });
    describe('append', function() {
        it('should add data to end of linked list', function() {
            const list = new LinkedList();
            list.prepend(1);
            list.append(2);
            expect(list.toString()).to.equal('1 -> 2');
        });
        it('should add data to end of empty list', function() {
            const list = new LinkedList();
            list.append(1);
            expect(list.toString()).to.equal('1');
        });
    });
    describe('findNode', function() {
        it('should return node with matching data', function() {
            const list = new LinkedList();
            list.prepend(1);
            list.prepend(2);
            const foundNode = list.findNode(1);
            expect(foundNode.data).to.equal(1);
        });
        it('should return null when no match found', function() {
            const list = new LinkedList();
            list.append(1);
            expect(list.findNode(2)).to.equal(null);
        });
        it('should return null on empty list', function() {
            const list = new LinkedList();
            expect(list.findNode(1)).to.equal(null);
        });
    });
    describe('insertAfter', function() {
        it('should not change list if value not found', function() {
            const list = new LinkedList();
            list.append(1);
            list.append(2);
            list.insertAfter(3, 1);
            expect(list.toString()).to.equal('1 -> 2');
        });
        it('should do nothing to an empty list', function() {
            const list = new LinkedList();
            list.insertAfter(1, 2);
            expect(list.toString()).to.equal('');
        });
        it('should insert after first occurence of matching data', function() {
            const list = new LinkedList();
            list.append(1);
            list.append(2);
            list.append(1);
            list.insertAfter(1,3);
            expect(list.toString()).to.equal('1 -> 3 -> 2 -> 1');
        });
    });
    describe('removeFirst', function() {
        it('should do nothing to empty list', function() {
            const list = new LinkedList();
            list.removeFirst();
            expect(list.toString()).to.equal('');
        });
        it('should remove first node', function() {
            const list = new LinkedList();
            list.append(1);
            list.append(2);
            list.removeFirst();
            expect(list.toString()).to.equal('2');
        });
    });
    describe('length', function() {
        it('should return 0 for empty list', function() {
            const list = new LinkedList();
            expect(list.length()).to.equal(0);
        });
        it('should return length of list', function() {
            const list = new LinkedList();
            list.append(1);
            list.append(2);
            list.append(3);
            expect(list.length()).to.equal(3);
        });
    });
    describe('remove', function() {
        it('should do nothing to empty list', function() {
            const list = new LinkedList();
            list.remove(1);
            expect(list.toString()).to.equal('');
        });
        it('should remove first instance of data', function() {
            const list = new LinkedList();
            list.append(1);
            list.append(2);
            list.append(1);
            list.remove(1);
            expect(list.toString()).to.equal('2 -> 1');
        });
        it('should not remove any node when data not found', function() {
            const list = new LinkedList();
            list.append(1);
            list.append(2);
            list.remove(3);
            expect(list.toString()).to.equal('1 -> 2');
        });
    });
    describe('reverse', function() {
        it('should do nothing to empty list', function() {
            let list = new LinkedList();
            list = list.reverse();
            expect(list.toString()).to.equal('');
        });
        it('should reverse all values in the list', function() {
            let list = new LinkedList();
            list.append(1);
            list.append(2);
            list.append(3);
            list = list.reverse();
            expect(list.toString()).to.equal('3 -> 2 -> 1');
        });
    });
    describe('middleNodeData', function() {
        it('should return null on empty list', function() {
            const list = new LinkedList();
            expect(list.middleNodeData()).to.equal(null);
        });
        it('should return middle node data', function() {
            const list = new LinkedList();
            list.append(1);
            list.append(2);
            list.append(3);
            expect(list.middleNodeData()).to.equal(2);
        });
    });
    describe('lastNode', function() {
        it('should return null on empty list', function() {
            const list = new LinkedList();
            expect(list.getLast()).to.equal(null);
        });
        it('should return last node', function() {
            const list = new LinkedList();
            list.prepend(1);
            list.append(2);
            expect(list.getLast().data).to.equal(2);
        })
    });
    describe('containsLoop', function() {
        it('should return false on empty list', function() {
            const list = new LinkedList();
            expect(list.containsLoop()).to.equal(false);
        });
        it('should return false when no loop exists in single element list', function() {
            const list = new LinkedList();
            list.append(1);
            expect(list.containsLoop()).to.equal(false);
        });
        it('should return false when no loop exists in multi element list', function() {
            const list = new LinkedList();
            list.append(1);
            list.append(2);
            expect(list.containsLoop()).to.equal(false);
        });
        it('should return true when loop exists in single element list', function() {
            const list = new LinkedList();
            list.append(1); 
            list.makeLoop();
            expect(list.containsLoop()).to.equal(true);
        });
        it('should return true when loop exists in multiple element list', function() {
            const list = new LinkedList();
            list.append(1);
            list.append(2);
            list.append(3);
            list.makeLoop();
            expect(list.containsLoop()).to.equal(true);
        })
    });
    describe('findFirstNodeOfLoop', function() {
        it('should return null if no loop', function() {
            const list = new LinkedList();
            list.append(1);
            list.append(2);
            expect(list.findFirstNodeOfLoop()).to.equal(null);
        });
        it('should return first node of loop', function() {
            const list = new LinkedList();
            list.append(1);
            list.append(2);
            list.append(3);
            list.makeLoop();
            expect(list.findFirstNodeOfLoop().data).to.equal(1);
        });
    });
    describe('toString', function() {
        it('should throw error when list contains loop', function() {
            const list = new LinkedList();
            list.append(1);
            list.makeLoop();
            expect(list.toString.bind(list)).to.throw('List contains a loop!');
        });
    });
});