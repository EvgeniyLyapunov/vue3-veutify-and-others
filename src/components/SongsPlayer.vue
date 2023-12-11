<template>
  <v-card title="Player" class="player">
    <v-card-text>
      <v-icon icon="mdi-play"></v-icon>
      Song title
    </v-card-text>
    <v-card-action>
      <v-btn variant="text" class="favorite-btn">Add to Favorites</v-btn>
    </v-card-action>
  </v-card>
</template>

<script setup lang="ts"></script>

<style scoped>
.player {
  margin-bottom: 20px;
}
.favorite-btn {
  width: 100%;
}
</style>
