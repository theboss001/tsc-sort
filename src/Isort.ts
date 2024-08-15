export interface Isort {
    length: number;
    swap(leftIndex: number, rightIndex: number): void;
    compare(leftIndex:number, rightIndex: number): boolean;
}