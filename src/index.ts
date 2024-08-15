import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection"; 
import { CharactersCollection } from './CharactersCollection';
import * as testDatas from "./tests/Objects";
import { LinkedListCollection } from "./LinkedListCollection";
// const numberCollection = new NumberCollection([10, 20, 40, 500, 5, -4, 45]);
// const numsort = new Sorter(numberCollection);
// numsort.sort();
// console.log(numberCollection.data);

// const charactersCollection = new CharactersCollection("XXybbIsOP");
// const charsort = new Sorter(charactersCollection);
// charsort.sort();
// console.log(charactersCollection.data);
// console.log(testDatas);

const linkedListSort = new LinkedListCollection();
linkedListSort.add(100);
linkedListSort.add(300);
linkedListSort.add(1000);
linkedListSort.add(5000);
console.log(linkedListSort);