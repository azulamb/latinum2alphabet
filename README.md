# latinum2alphabet

## How to use

### Command

```sh
$ deno run ./latinum2alphabet.ts Pokémon
Pokemon
```

### Use function

```ts
import { convertLatinumToAlphabet } from './latinum2alphabet.ts';

console.log(convertLatinumToAlphabet('Pokémon')); // Pokemon
```

## Command

- `deno task convert` `[ARGS]`
- `deno test`

## TODO

- 効率よくする
  - 現在動かすことだけを目標にしてただただ正規表現を繋げているだけなのでテーブルにするとかしてなんとかしたい
