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
});