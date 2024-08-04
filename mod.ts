export * from './libs/latinum2alphabet.ts';
import { convertLatinumToAlphabet } from './libs/latinum2alphabet.ts';
export { LATINUM_TO_ALPHABET_LIST } from './libs/list.ts';

if (import.meta.main) {
  if (Deno.args.length <= 0) {
    console.log('Need arguments.');
  } else {
    for (const str of Deno.args) {
      console.log(convertLatinumToAlphabet(str));
    }
  }
}
