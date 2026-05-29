<!-- src/pages/users/[id=int].vue -->
<script setup lang="ts">
import { useRoute } from 'vue-router'

definePage({
  params: {
    path: {
      id: 'number',
    },
  },
})

const route = useRoute('/users/[id]')

route.params.id // number

console.log(typeof route.params.id)
</script>

<template>
  <h2>User {{ route.params.id }}</h2>
</template>
