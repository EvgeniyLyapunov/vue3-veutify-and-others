<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { ISong } from './types'
import { getSongs } from './firebase/songs'
import SongsList from '@/components/SongsList.vue'

const songs = ref<ISong[]>([])

onMounted(() => {
  getSongs(songs)
})
</script>

<template>
  <main>
    <SongsList :songs="songs" />
  </main>
</template>

<style scoped></style>
