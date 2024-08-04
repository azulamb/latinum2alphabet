import { LATINUM_TO_ALPHABET_LIST } from './list.ts';

export const LATINUM_TO_ALPHABET_TABLE: { [keys: string]: string } = {};
for (const item of LATINUM_TO_ALPHABET_LIST) {
  LATINUM_TO_ALPHABET_TABLE[item.latinum] = item.alphabet;
}
Object.freeze(LATINUM_TO_ALPHABET_TABLE);

export function generateConverter(table: { [keys: string]: string }) {
  const list = Object.keys(table).map((key) => {
    return {
      exp: new RegExp(key, 'g'),
      alphabet: table[key],
    };
  });

  return (latinum: string): string => {
    let result = latinum;
    for (const item of list) {
      result = result.replace(item.exp, item.alphabet);
    }

    return result;
  };
}

export const convertLatinumToAlphabet = generateConverter(
  LATINUM_TO_ALPHABET_TABLE,
);
