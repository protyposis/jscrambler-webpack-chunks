import {ChunkOneInnerClassThatShouldBeObfuscated} from './ChunkOneInnerClassThatShouldBeObfuscated';

export class ChunkOne {

  constructor() {
    this.innerClassInstance = new ChunkOneInnerClassThatShouldBeObfuscated();
  }

  doStuff() {
    this.innerClassInstance.instanceMethodThatShouldBeObfuscated();
    console.log(this.innerClassInstance.instanceFieldThatShouldBeObfuscated);

    ChunkOneInnerClassThatShouldBeObfuscated.staticMethodThatShouldBeObfuscated();
    console.log(ChunkOneInnerClassThatShouldBeObfuscated.staticFieldThatShouldBeObfuscated);
  }
}