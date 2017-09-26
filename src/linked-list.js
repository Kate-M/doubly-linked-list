const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        var temp = new Node(data);
        if (this._tail != null) {
            this._tail.next = temp;
            temp.prev = this._tail;
            this._tail = temp;
        } else {
            this._head = temp;
            this._tail = temp;
        }
        this.length++;
        return this;
    }

    head() {
        if (this._head != null)
            return this._head.data;
        return null;
    }

    tail() {
        if (this._tail != null)
            return this._tail.data;
        return null;
    }

    atNode(index) {
        if (index < 0 || index >= this.length)
            return null;

        var temp = this._head;

        for (var i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    at(index) {
        var node = this.atNode(index);
        return node.data;
    }

    insertAt(index, data) {
        var temp = new Node();
        temp.data = data;

        var beforeNode = this.atNode(index - 1);
        var afterNode = this.atNode(index);

        if (beforeNode != null) {
            temp.next = beforeNode.next;
            beforeNode.next = temp;
        } else {
            temp.next = this._head;
        }

        if (afterNode != null) {
            temp.prev = afterNode.prev;
            afterNode.prev = temp;
        } else {
            temp.prev = this._tail;
        }
        this.length++;
        return this;
    }

    isEmpty() {
        return this._head == null;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        var temp = this.atNode(index);
        var before = temp.prev;
        var after = temp.next;

        if (before != null) {
            if (after != null) {
                before.next = after;
            } else {
                before.next = null;
            }
        }

        if (after != null) {
            if (before != null) {
                after.prev = before;
            } else {
                after.prev = null;
            }
        }

        if (before == null && after == null) {
            this.clear();
        } else {
            this.length--;
        }
        return this;
    }

    reverse() { 
        var node = this._head;

        if (node != null) {
            for (var i = 0; i < this.length; i++) {
                var temp = node.next;
                node.next = node.prev;
                node.prev = temp; 
                
                node = node.prev;
            }

            var temp = this._head;
            this._head = this._tail;
            this._tail = temp;
        }
        return this;
    }

    indexOf(data) {
        var temp = this._head;

        for (var i = 0; i < this.length; i++) {
            if (temp != null && temp.data == data) {
                return i;
            }
            temp = temp.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
