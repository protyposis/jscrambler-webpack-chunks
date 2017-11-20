let staticFieldThatShouldBeObfuscated = 42;

export class ChunkOneInnerClassThatShouldBeObfuscated {

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