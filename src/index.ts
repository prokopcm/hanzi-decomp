import decompMap from './data/decompMap'

/**
 * Breaks apart a string of characters into their component parts.
 * @param characters a string of characters to decompose
 * @return an array of each character broken down into its component parts
 */
export function decompose (characters: string): any {
  const characterList = []
  const trimmedCharacters = Array.from(characters.replace(/\s/g, ''))

  for (const zi of trimmedCharacters) {
    if ((decompMap as any)[zi]) {
      characterList.push((decompMap as any)[zi])
    }
  }

  return characterList
}
