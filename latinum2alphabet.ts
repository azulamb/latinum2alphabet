export function convertLatinumToAlphabet(latinum: string): string {
  return latinum
    // Umlauts
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/Ä/g, 'Ae')
    .replace(/Ö/g, 'Oe')
    .replace(/Ü/g, 'Ue')
    // Eszett
    .replace(/ß/g, 'ss')
    // Accent aigu
    .replace(/á/g, 'a')
    .replace(/é/g, 'e')
    .replace(/í/g, 'i')
    .replace(/ó/g, 'o')
    .replace(/ú/g, 'u')
    .replace(/ý/g, 'y')
    .replace(/Á/g, 'A')
    .replace(/É/g, 'E')
    .replace(/Í/g, 'I')
    .replace(/Ó/g, 'O')
    .replace(/Ú/g, 'U')
    .replace(/Ý/g, 'Y')
    // Accent grave
    .replace(/à/g, 'a')
    .replace(/è/g, 'e')
    .replace(/ì/g, 'i')
    .replace(/ò/g, 'o')
    .replace(/ù/g, 'u')
    .replace(/À/g, 'A')
    .replace(/È/g, 'E')
    .replace(/Ì/g, 'I')
    .replace(/Ò/g, 'O')
    .replace(/Ù/g, 'U')
    // Accent circonflexe
    .replace(/â/g, 'a')
    .replace(/ê/g, 'e')
    .replace(/î/g, 'i')
    .replace(/ô/g, 'o')
    .replace(/û/g, 'u')
    .replace(/Â/g, 'A')
    .replace(/Ê/g, 'E')
    .replace(/Î/g, 'I')
    .replace(/Ô/g, 'O')
    .replace(/Û/g, 'U')
    // Accent tréma
    .replace(/ë/g, 'e')
    .replace(/ï/g, 'i')
    .replace(/ÿ/g, 'y')
    .replace(/Ë/g, 'E')
    .replace(/Ï/g, 'I')
    .replace(/Ÿ/g, 'Y')
    // Accent cédille
    .replace(/ç/g, 'c')
    .replace(/Ç/g, 'C')
    // Ligatures
    .replace(/æ/g, 'ae')
    .replace(/œ/g, 'oe')
    .replace(/Æ/g, 'Ae')
    .replace(/Œ/g, 'Oe')
    // Others
    .replace(/þ/g, 'th')
    .replace(/Þ/g, 'Th')
    .replace(/ð/g, 'dh')
    .replace(/Ð/g, 'Dh')
    .replace(/ø/g, 'oe')
    .replace(/Ø/g, 'Oe')
    .replace(/å/g, 'aa')
    .replace(/Å/g, 'Aa')
    .replace(/æ/g, 'ae')
    .replace(/Æ/g, 'Ae');
}

if (import.meta.main) {
  if (Deno.args.length <= 0) {
    console.log('Need arguments.');
  } else {
    for (const str of Deno.args) {
      console.log(convertLatinumToAlphabet(str));
    }
  }
}
