import { bundle } from 'jsr:@deno/emit';
const result = await bundle(
  new URL(import.meta.resolve('./browser.ts')),
);

const { code } = result;

Deno.writeTextFile(
  new URL(import.meta.resolve('./docs/latinum2alphabet.js')),
  code,
);
