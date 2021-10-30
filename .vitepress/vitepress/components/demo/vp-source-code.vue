<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  source: {
    type: String,
    required: true,
  },
})

const decoded = computed(() => {
  return decodeURIComponent(props.source)
})
</script>

<template>
  <div class="example-source language-markdown" v-html="decoded"></div>
</template>

<style scoped lang="scss">
.language-markdown {
  margin: 0;
  border-radius: 0;
}
</style>
