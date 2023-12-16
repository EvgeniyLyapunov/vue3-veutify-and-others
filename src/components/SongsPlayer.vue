<template>
  <v-card title="Player" class="player">
    <v-card-text>
      <v-icon icon="mdi-play"></v-icon>
      {{ currentSong.artist }}. {{ currentSong.title }} ({{ currentSong.year }})
    </v-card-text>
    <v-card-action>
      <v-btn
        variant="text"
        class="favorite-btn"
        @click="emits('add-to-favorite', currentSong.id)"
      >
        Add to Favorites
      </v-btn>
    </v-card-action>
  </v-card>
</template>

<script setup lang="ts">
import type { ISong } from '@/types'
const props = defineProps<{
  songs: ISong[]
}>()
const emits = defineEmits<{
  (e: 'add-to-favorite', id: string): void
}>()
const currentSong = props.songs[Math.floor(Math.random() * props.songs.length)]
</script>

<style scoped>
.player {
  margin-bottom: 20px;
}
.favorite-btn {
  width: 100%;
}
</style>
