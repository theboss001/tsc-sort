import { Isort } from './Isort';

export class Node {
    next: Node | null = null;
    constructor (public data: number ) {}
}


export class LinkedListCollection {
    head : Node | null = null;
    add ( data: number ): void {
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
    get lenght (): number {
        if(!this.head) {
            return 0
        } 
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    at (index: number): Node {
        if (!this.head) {
            throw new Error('index out of bounds');
        }
        
        let count = 0;
        let node: Node | null = this.head;

        while (node) {
            if(count === index) {
                return node;
            }
            count++;
            node = node.next;
        }
        throw new Error('index out of bounds');
    }

    private compare (leftIndex: number, rightIndex:  number): boolean {
       if(!this.head) {
        return false;
       }

       return this.at(leftIndex).data > this.at(rightIndex).data;
    }
}   