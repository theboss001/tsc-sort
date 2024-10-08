import { Isort } from "./Isort";

export class NumberCollection implements Isort{
    constructor (public data: number []) {}

    get length(): number {
        return this.data.length;
    }

    compare (leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap (leftIndex: number, rightIndex: number) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }   
}