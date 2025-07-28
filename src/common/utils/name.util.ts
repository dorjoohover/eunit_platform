import { transliterate } from 'transliteration';

const legalSuffixMap = {
  ххк: 'ttc',
  төхк: 'thk',
  llc: 'llc',
  llp: 'llp',
};

export function generateUsername(companyName: string): string {
  let cleaned = companyName.trim().toLowerCase();

  // remove punctuation
  cleaned = cleaned.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

  // split words
  const words = cleaned.split(/\s+/);

  let suffix = '';
  const lastWord = words[words.length - 1];

  if (legalSuffixMap[lastWord]) {
    suffix = legalSuffixMap[lastWord];
    words.pop(); // remove suffix from name
  }

  const mainName = transliterate(words.join('')).replace(/[^a-z0-9.]/g, '');
  return `${mainName}${suffix}`;
}
