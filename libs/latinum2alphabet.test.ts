import { assert, assertEquals } from 'jsr:@std/assert@^1.0.1';
import { convertLatinumToAlphabet } from './latinum2alphabet.ts';
import { LATINUM_TO_ALPHABET_LIST } from './list.ts';

const dataset: {
  latinum: string;
  alphabet: string;
}[] = [
  {
    latinum: 'äöüÄÖÜß',
    alphabet: 'aeoeueAeOeUess',
  },
  {
    latinum: 'áéíóúýÁÉÍÓÚÝ',
    alphabet: 'aeiouyAEIOUY',
  },
  {
    latinum: 'àèìòùÀÈÌÒÙ',
    alphabet: 'aeiouAEIOU',
  },
  {
    latinum: 'âêîôûÂÊÎÔÛ',
    alphabet: 'aeiouAEIOU',
  },
  {
    latinum: 'ëïÿËÏŸ',
    alphabet: 'eiyEIY',
  },
  {
    latinum: 'çÇ',
    alphabet: 'cC',
  },
  {
    latinum: 'æœÆŒ',
    alphabet: 'aeoeAeOe',
  },
  {
    latinum: 'αΑβΒγΓδΔεΕζΖηΗθΘιΙκΚλΛμΜνΝξΞοΟπΠρΡσΣτΤυΥφΦχΧψΨωΩ',
    alphabet: 'aAvVgGdDeEzZiIthThiIkKlLmMnNksKsoOpPrRsStTyYphPhchChpsPsoO',
  },
  {
    latinum: 'āĀēĒīĪōŌūŪn̄N̄',
    alphabet: 'aAeEiIoOuUnN',
  },
  {
    latinum: 'ÃãÕõ',
    alphabet: 'AaOo',
  },
  {
    latinum: 'þÞðÐøØåÅæÆ',
    alphabet: 'thThdhDhoeOeaaAaaeAe',
  },
  {
    latinum: 'Pokémon',
    alphabet: 'Pokemon',
  },
  {
    latinum: 'Köln',
    alphabet: 'Koeln',
  },
  {
    latinum: 'Émile Bertin',
    alphabet: 'Emile Bertin',
  },
  {
    latinum: 'Algérie',
    alphabet: 'Algerie',
  },
  {
    latinum: 'Béarn',
    alphabet: 'Bearn',
  },
  {
    latinum: 'Nürnberg',
    alphabet: 'Nuernberg',
  },
  {
    latinum: 'Painlevé',
    alphabet: 'Painleve',
  },
  {
    latinum: 'Ägir',
    alphabet: 'Aegir',
  },
];

Deno.test('Duplicate check:', () => {
  const keys: string[] = [];
  for (const item of LATINUM_TO_ALPHABET_LIST) {
    if (keys.includes(item.latinum)) {
      assert(false, `Duplicate key: ${item.latinum}`);
    } else {
      keys.push(item.latinum);
    }
  }
});

for (const data of dataset) {
  Deno.test(`latinum2alphabet: ${data.latinum} -> ${data.alphabet}`, () => {
    const result = convertLatinumToAlphabet(data.latinum);
    assertEquals(result, data.alphabet);
  });
}
