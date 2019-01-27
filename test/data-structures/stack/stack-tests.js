var it = require('mocha').it;
var expect = require('chai').expect;
var Stack = require('./../../../src/data-structures/stack/stack')

describe('stack', function() {
    it('push should add to top of stack', function() {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.toString()).to.equal('2 -> 1');
    });
    it('pop should remove from top of stack', function() {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        const data = stack.pop();
        expect(data).to.equal(2);
        expect(stack.toString()).to.equal('1');
    })
});