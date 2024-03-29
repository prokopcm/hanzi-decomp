import * as decompData from './decompData.json'

export interface Decomp {
  components: string[]
  type: string
  writing: string
}

export const decompMap = decompData as Record<string, Decomp>
