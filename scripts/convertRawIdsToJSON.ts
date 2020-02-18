import * as fs from 'fs'
import * as path from 'path'

/**
 * Script that takes all the ids.*.txt files, parses them, formats the data,
 * and outputs it to a JSON map for quick lookup.
 */
export default function convert (): any {
  const characterData: any = {}
  const files = [
    'ids-basic.txt', 'ids-compat-supplement.txt', 'ids-compat.txt',
    'ids-ext-a.txt', 'ids-ext-b1.txt', 'ids-ext-b2.txt', 'ids-ext-b3.txt',
    'ids-ext-b4.txt', 'ids-ext-b5.txt', 'ids-ext-b6.txt', 'ids-ext-c.txt',
    'ids-ext-d.txt', 'ids-ext-e.txt', 'ids-ext-f.txt'
  ]

  for (const file of files) {
    try {
      const contents = fs.readFileSync(path.join('raw-data', file), 'utf-8').split('\n')
      const contentLength = contents.length

      // Start on line 1 because line 0 is always an encoding comment in the ids
      // files.
      for (let i = 1; i < contentLength; i++) {
        const splitLine = contents[i].split('\t')
        const writing = splitLine[1]

        let type = 'atomic'
        let components: string[] = []

        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (!writing) {
          continue
        }

        // TODO: fix. Fails on "乿" with components.
        // Need to filter out unicode ranges for decomp type.
        if (splitLine[2].length > 1) {
          type = splitLine[2].substring(0, 1)
          components = Array.from(splitLine[2].substring(1))
        }

        characterData[writing] = {
          components,
          type,
          writing
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  fs.writeFileSync('decompMap.ts', 'export default ' + JSON.stringify(characterData, null, 2))
  return characterData
}

convert()
