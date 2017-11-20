import {ChunkTwoInnerClassThatShouldBeObfuscated} from './ChunkTwoInnerClassThatShouldBeObfuscated';

export class ChunkTwo {

  constructor() {
    this.innerClassInstance = new ChunkTwoInnerClassThatShouldBeObfuscated();
  }

  doStuff() {
    this.innerClassInstance.instanceMethodThatShouldBeObfuscated();
    console.log(this.innerClassInstance.instanceFieldThatShouldBeObfuscated);

    ChunkTwoInnerClassThatShouldBeObfuscated.staticMethodThatShouldBeObfuscated();
    console.log(ChunkTwoInnerClassThatShouldBeObfuscated.staticFieldThatShouldBeObfuscated);
  }
}