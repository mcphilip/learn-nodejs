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
});