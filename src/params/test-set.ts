// src/params/test-set.ts
import { defineParamParserRaw } from 'vue-router/experimental'

// pass the final type as a generic so `route.params.<name>` is typed
export const parser = defineParamParserRaw<Set<string>>({
  get: (value) => {
    if (value == null) return new Set()
    return new Set(Array.isArray(value) ? value.filter((v) => v != null) : [value])
  },
  set: (value) => [...value],
})
