"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListCollection = exports.Node = void 0;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
exports.Node = Node;
class LinkedListCollection {
    constructor() {
        this.head = null;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    // return the length of the linkedList by iterating all the nodes of the chain
    get lenght() {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    at(index) {
        if (!this.head) {
            throw new Error('index out of bounds');
        }
        let count = 0;
        let node = this.head;
        while (node) {
            if (count === index) {
                return node;
            }
            count++;
            node = node.next;
        }
        throw new Error('index out of bounds');
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            return false;
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
}
exports.LinkedListCollection = LinkedListCollection;
