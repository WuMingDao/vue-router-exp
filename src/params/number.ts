// src/params/number.ts
import { defineParamParser, miss } from 'vue-router/experimental'

// pass the final type as a generic to enforce the return type of `get`
// and the input type of `set`
export const parser = defineParamParser<number>({
  get: value => {
    const n = Number(value)
    if (Number.isNaN(n)) miss(`"${value}" is not a number`)
    return n
  },
  set: value => String(value),
})