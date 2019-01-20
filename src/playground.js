var LinkedList = require('./data-structures/linked-list/linked-list');

const list = new LinkedList();
list.prepend(5);
list.prepend(6);
console.log(list.toString());