import { assertEquals } from 'https://deno.land/std@0.181.0/testing/asserts.ts';
import { convertLatinumToAlphabet } from './latinum2alphabet.ts';

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

for (const data of dataset) {
  Deno.test(`latinum2alphabet: ${data.latinum} -> ${data.alphabet}`, () => {
    const result = convertLatinumToAlphabet(data.latinum);
    assertEquals(result, data.alphabet);
  });
}
