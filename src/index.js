import {ChunkOne} from './ChunkOne';
import {ChunkTwo} from './ChunkTwo';

function methodThatShouldNotBeObfuscated() {
  new ChunkOne().doStuff();
  new ChunkTwo().doStuff();
}

methodThatShouldNotBeObfuscated();