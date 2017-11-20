import {ChunkOne} from './ChunkOne';
import {ChunkTwo} from './ChunkTwo';

function methodThatShouldNotBeObfuscated() {
  const c1 = new ChunkOne();
  console.log(c1);
  c1.doStuff();

  const c2 = new ChunkTwo();
  console.log(c2);
  c2.doStuff();
}

methodThatShouldNotBeObfuscated();