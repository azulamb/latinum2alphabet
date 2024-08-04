export const LATINUM_TO_ALPHABET_LIST: {
  latinum: string;
  alphabet: string;
  type:
    | 'umlauts'
    | 'eszett'
    | 'accent_aigu'
    | 'accent_grave'
    | 'circonflexe'
    | 'trema'
    | 'cedille'
    | 'ligatures'
    | 'greek_alphabet'
    | 'macron'
    | 'others';
}[] = [
  // Umlauts
  {
    latinum: 'ä',
    alphabet: 'ae',
    type: 'umlauts',
  },
  {
    latinum: 'Ä',
    alphabet: 'Ae',
    type: 'umlauts',
  },
  {
    latinum: 'ö',
    alphabet: 'oe',
    type: 'umlauts',
  },
  {
    latinum: 'Ö',
    alphabet: 'Oe',
    type: 'umlauts',
  },
  {
    latinum: 'ü',
    alphabet: 'ue',
    type: 'umlauts',
  },
  {
    latinum: 'Ü',
    alphabet: 'Ue',
    type: 'umlauts',
  },
  // Eszett
  {
    latinum: 'ß',
    alphabet: 'ss',
    type: 'eszett',
  },
  // Accent aigu
  {
    latinum: 'á',
    alphabet: 'a',
    type: 'accent_aigu',
  },
  {
    latinum: 'Á',
    alphabet: 'A',
    type: 'accent_aigu',
  },
  {
    latinum: 'é',
    alphabet: 'e',
    type: 'accent_aigu',
  },
  {
    latinum: 'É',
    alphabet: 'E',
    type: 'accent_aigu',
  },
  {
    latinum: 'í',
    alphabet: 'i',
    type: 'accent_aigu',
  },
  {
    latinum: 'Í',
    alphabet: 'I',
    type: 'accent_aigu',
  },
  {
    latinum: 'ó',
    alphabet: 'o',
    type: 'accent_aigu',
  },
  {
    latinum: 'Ó',
    alphabet: 'O',
    type: 'accent_aigu',
  },
  {
    latinum: 'ú',
    alphabet: 'u',
    type: 'accent_aigu',
  },
  {
    latinum: 'Ú',
    alphabet: 'U',
    type: 'accent_aigu',
  },
  {
    latinum: 'ý',
    alphabet: 'y',
    type: 'accent_aigu',
  },
  {
    latinum: 'Ý',
    alphabet: 'Y',
    type: 'accent_aigu',
  },
  // Accent grave
  {
    latinum: 'à',
    alphabet: 'a',
    type: 'accent_grave',
  },
  {
    latinum: 'À',
    alphabet: 'A',
    type: 'accent_grave',
  },
  {
    latinum: 'è',
    alphabet: 'e',
    type: 'accent_grave',
  },
  {
    latinum: 'È',
    alphabet: 'E',
    type: 'accent_grave',
  },
  {
    latinum: 'ì',
    alphabet: 'i',
    type: 'accent_grave',
  },
  {
    latinum: 'Ì',
    alphabet: 'I',
    type: 'accent_grave',
  },
  {
    latinum: 'ò',
    alphabet: 'o',
    type: 'accent_grave',
  },
  {
    latinum: 'Ò',
    alphabet: 'O',
    type: 'accent_grave',
  },
  {
    latinum: 'ù',
    alphabet: 'u',
    type: 'accent_grave',
  },
  {
    latinum: 'Ù',
    alphabet: 'U',
    type: 'accent_grave',
  },
  // Accent circonflexe
  {
    latinum: 'â',
    alphabet: 'a',
    type: 'circonflexe',
  },
  {
    latinum: 'Â',
    alphabet: 'A',
    type: 'circonflexe',
  },
  {
    latinum: 'ê',
    alphabet: 'e',
    type: 'circonflexe',
  },
  {
    latinum: 'Ê',
    alphabet: 'E',
    type: 'circonflexe',
  },
  {
    latinum: 'î',
    alphabet: 'i',
    type: 'circonflexe',
  },
  {
    latinum: 'Î',
    alphabet: 'I',
    type: 'circonflexe',
  },
  {
    latinum: 'ô',
    alphabet: 'o',
    type: 'circonflexe',
  },
  {
    latinum: 'Ô',
    alphabet: 'O',
    type: 'circonflexe',
  },
  {
    latinum: 'û',
    alphabet: 'u',
    type: 'circonflexe',
  },
  {
    latinum: 'Û',
    alphabet: 'U',
    type: 'circonflexe',
  },
  // Accent tréma
  {
    latinum: 'ë',
    alphabet: 'e',
    type: 'trema',
  },
  {
    latinum: 'Ë',
    alphabet: 'E',
    type: 'trema',
  },
  {
    latinum: 'ï',
    alphabet: 'i',
    type: 'trema',
  },
  {
    latinum: 'Ï',
    alphabet: 'I',
    type: 'trema',
  },
  {
    latinum: 'ÿ',
    alphabet: 'y',
    type: 'trema',
  },
  {
    latinum: 'Ÿ',
    alphabet: 'Y',
    type: 'trema',
  },
  // Accent cédille
  {
    latinum: 'ç',
    alphabet: 'c',
    type: 'cedille',
  },
  {
    latinum: 'Ç',
    alphabet: 'C',
    type: 'cedille',
  },
  // Ligatures
  {
    latinum: 'æ',
    alphabet: 'ae',
    type: 'ligatures',
  },
  {
    latinum: 'Æ',
    alphabet: 'Ae',
    type: 'ligatures',
  },
  {
    latinum: 'œ',
    alphabet: 'oe',
    type: 'ligatures',
  },
  {
    latinum: 'Œ',
    alphabet: 'Oe',
    type: 'ligatures',
  },
  // Greek alphabet
  {
    latinum: 'α',
    alphabet: 'a',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Α',
    alphabet: 'A',
    type: 'greek_alphabet',
  },
  {
    latinum: 'β',
    alphabet: 'v',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Β',
    alphabet: 'V',
    type: 'greek_alphabet',
  },
  {
    latinum: 'γ',
    alphabet: 'g',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Γ',
    alphabet: 'G',
    type: 'greek_alphabet',
  },
  {
    latinum: 'δ',
    alphabet: 'd',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Δ',
    alphabet: 'D',
    type: 'greek_alphabet',
  },
  {
    latinum: 'ε',
    alphabet: 'e',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Ε',
    alphabet: 'E',
    type: 'greek_alphabet',
  },
  {
    latinum: 'ζ',
    alphabet: 'z',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Ζ',
    alphabet: 'Z',
    type: 'greek_alphabet',
  },
  {
    latinum: 'η',
    alphabet: 'i',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Η',
    alphabet: 'I',
    type: 'greek_alphabet',
  },
  {
    latinum: 'θ',
    alphabet: 'th',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Θ',
    alphabet: 'Th',
    type: 'greek_alphabet',
  },
  {
    latinum: 'ι',
    alphabet: 'i',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Ι',
    alphabet: 'I',
    type: 'greek_alphabet',
  },
  {
    latinum: 'κ',
    alphabet: 'k',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Κ',
    alphabet: 'K',
    type: 'greek_alphabet',
  },
  {
    latinum: 'λ',
    alphabet: 'l',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Λ',
    alphabet: 'L',
    type: 'greek_alphabet',
  },
  {
    latinum: 'μ',
    alphabet: 'm',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Μ',
    alphabet: 'M',
    type: 'greek_alphabet',
  },
  {
    latinum: 'ν',
    alphabet: 'n',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Ν',
    alphabet: 'N',
    type: 'greek_alphabet',
  },
  {
    latinum: 'ξ',
    alphabet: 'ks',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Ξ',
    alphabet: 'Ks',
    type: 'greek_alphabet',
  },
  {
    latinum: 'ο',
    alphabet: 'o',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Ο',
    alphabet: 'O',
    type: 'greek_alphabet',
  },
  {
    latinum: 'π',
    alphabet: 'p',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Π',
    alphabet: 'P',
    type: 'greek_alphabet',
  },
  {
    latinum: 'ρ',
    alphabet: 'r',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Ρ',
    alphabet: 'R',
    type: 'greek_alphabet',
  },
  {
    latinum: 'σ',
    alphabet: 's',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Σ',
    alphabet: 'S',
    type: 'greek_alphabet',
  },
  {
    latinum: 'τ',
    alphabet: 't',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Τ',
    alphabet: 'T',
    type: 'greek_alphabet',
  },
  {
    latinum: 'υ',
    alphabet: 'y',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Υ',
    alphabet: 'Y',
    type: 'greek_alphabet',
  },
  {
    latinum: 'φ',
    alphabet: 'ph',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Φ',
    alphabet: 'Ph',
    type: 'greek_alphabet',
  },
  {
    latinum: 'χ',
    alphabet: 'ch',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Χ',
    alphabet: 'Ch',
    type: 'greek_alphabet',
  },
  {
    latinum: 'ψ',
    alphabet: 'ps',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Ψ',
    alphabet: 'Ps',
    type: 'greek_alphabet',
  },
  {
    latinum: 'ω',
    alphabet: 'o',
    type: 'greek_alphabet',
  },
  {
    latinum: 'Ω',
    alphabet: 'O',
    type: 'greek_alphabet',
  },
  // Macron
  {
    latinum: 'ā',
    alphabet: 'a',
    type: 'macron',
  },
  {
    latinum: 'Ā',
    alphabet: 'A',
    type: 'macron',
  },
  {
    latinum: 'ē',
    alphabet: 'e',
    type: 'macron',
  },
  {
    latinum: 'Ē',
    alphabet: 'E',
    type: 'macron',
  },
  {
    latinum: 'ī',
    alphabet: 'i',
    type: 'macron',
  },
  {
    latinum: 'Ī',
    alphabet: 'I',
    type: 'macron',
  },
  {
    latinum: 'ō',
    alphabet: 'o',
    type: 'macron',
  },
  {
    latinum: 'Ō',
    alphabet: 'O',
    type: 'macron',
  },
  {
    latinum: 'ū',
    alphabet: 'u',
    type: 'macron',
  },
  {
    latinum: 'Ū',
    alphabet: 'U',
    type: 'macron',
  },
  {
    latinum: 'n̄',
    alphabet: 'n',
    type: 'macron',
  },
  {
    latinum: 'N̄',
    alphabet: 'N',
    type: 'macron',
  },
  // Others
  {
    latinum: 'þ',
    alphabet: 'th',
    type: 'others',
  },
  {
    latinum: 'Þ',
    alphabet: 'Th',
    type: 'others',
  },
  {
    latinum: 'ð',
    alphabet: 'dh',
    type: 'others',
  },
  {
    latinum: 'Ð',
    alphabet: 'Dh',
    type: 'others',
  },
  {
    latinum: 'ø',
    alphabet: 'oe',
    type: 'others',
  },
  {
    latinum: 'Ø',
    alphabet: 'Oe',
    type: 'others',
  },
  {
    latinum: 'å',
    alphabet: 'aa',
    type: 'others',
  },
  {
    latinum: 'Å',
    alphabet: 'Aa',
    type: 'others',
  },
];
