<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const count = ref({id: 0})
debugger
const testCount = computed(() => count)
function increment() {
  count.value.id++
}

onMounted(() => {
  console.log('counter component mounted.')
})
</script>

<template>
  <div>this is counter page</div>
  <div>count is: {{ count.id + 1 }} </div>
  <button @click="increment">add count</button>
  <div>{{ testCount }}</div>
</template>
