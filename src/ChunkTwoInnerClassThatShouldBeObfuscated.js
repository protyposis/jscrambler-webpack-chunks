staticFieldThatShouldBeObfuscated = 42;

export class ChunkTwoInnerClassThatShouldBeObfuscated {

  constructor() {
    this.instanceFieldThatShouldBeObfuscated = 0;
  }

  instanceMethodThatShouldBeObfuscated() {
    this.instanceFieldThatShouldBeObfuscated++;
  }

  static staticMethodThatShouldBeObfuscated() {
    staticFieldThatShouldBeObfuscated++;
  }
}