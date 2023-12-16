<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { ISong } from '@/types'
import { getSongs } from '@/firebase/songs'
import SongsList from '@/components/SongsList.vue'
import SongsPlayer from '@/components/SongsPlayer.vue'

const songs = ref<ISong[]>([])

const playingSongs: ISong[] = [
  {
    id: '1',
    title: 'So What',
    artist: 'Miles Davis',
    year: 1959,
  },
  {
    id: '2',
    title: 'Smells Like Teen Spiritt',
    artist: 'Nirvana',
    year: 1991,
  },
  {
    id: '3',
    title: 'What a Wonderful World',
    artist: 'Louis Armstrong',
    year: 1967,
  },
  {
    id: '4',
    title: 'The Look',
    artist: 'Roxette',
    year: 1988,
  },
]

const addToFavorite = (songId: string) => {
  console.log('favorite song id', songId)
}

onMounted(() => {
  getSongs(songs)
})
</script>

<template>
  <main>
    <SongsPlayer :songs="playingSongs" @add-to-favorite="addToFavorite" />
    <SongsList :songs="songs" />
  </main>
</template>

<style scoped></style>
