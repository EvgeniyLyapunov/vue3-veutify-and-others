<script setup lang="ts">
import type { ISong } from '@/types'
import { deleteSong } from '@/firebase/songs'
const props = defineProps<{
  songs: ISong[]
  isLoading: boolean
}>()
</script>

<template>
  <v-card class="mx-auto pa-2" max-width="300">
    <v-list>
      <v-list-subheader>Favorite Songs</v-list-subheader>
      <div
        v-if="isLoading"
        class="d-flex justify-center align-center loading-height"
      >
        Loading...
      </div>
      <div v-else>
        <v-list-item
          v-for="(song, i) in props.songs"
          :key="i"
          :value="song"
          color="primary"
          rounded="shaped"
        >
          <template v-slot:prepend>
            <v-icon icon="mdi-headphones"></v-icon>
          </template>

          <template v-slot:append>
            <v-icon icon="mdi-close" @click="deleteSong(song.id)"></v-icon>
          </template>

          <v-list-item-title v-text="song.title"></v-list-item-title>
        </v-list-item>
      </div>
    </v-list>
  </v-card>
</template>

<style></style>
