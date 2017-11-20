import {ChunkOne} from './ChunkOne';
import {ChunkTwo} from './ChunkTwo';

function methodThatShouldNotBeObfuscated() {
  const c1 = new ChunkOne();
  console.log(c1);
  c1.doStuff();

  const c2 = new ChunkTwo();
  console.log(c2);
  c2.doStuff();


  // Test properties that should be obfuscated

  if (window.chunks && window.chunks.chunk2 && window.chunks.chunk2.ChunkTwo) {
    console.error('ChunkTwo exposed!');
  }

  if (c2.__proto__ && c2.__proto__.doStuff) {
    console.error('ChunkTwo.doStuff exposed!');
  }

  if (c2.innerClassInstance) {
    console.error('ChunkTwo.innerClassInstance exposed!');

    if (c2.innerClassInstance.instanceFieldThatShouldBeObfuscated) {
      console.error('ChunkTwo.innerClassInstance.instanceFieldThatShouldBeObfuscated exposed!');
    }
  }
}

methodThatShouldNotBeObfuscated();