import { LATINUM_TO_ALPHABET_LIST } from './libs/list.ts';
import {
  convertLatinumToAlphabet,
  generateConverter,
} from './libs/latinum2alphabet.ts';

(<any> window).Latinum2Alphabet = {
  list: LATINUM_TO_ALPHABET_LIST,
  generate: generateConverter,
  convert: convertLatinumToAlphabet,
};
