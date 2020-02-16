/**
 * Breaks apart a string of characters into their component parts.
 * @param characters a string of characters to decompose
 * @return an array of each character broken down into its component parts
 */
export function decompose (characters: string): any {
  const trimmedCharacters = characters.replace(/\s/g, '')
  const characterList = Array.from(trimmedCharacters)

  return characterList
}
