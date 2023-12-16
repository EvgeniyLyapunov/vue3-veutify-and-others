import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from 'firebase/firestore'
import { db } from './config'
import type { ISong } from '@/types'
import type { Ref } from 'vue/dist/vue.js'

const DB_NAME = 'songs'

export const getSongs = async (songs: Ref<ISong[]>) => {
  const q = query(collection(db, DB_NAME))

  onSnapshot(q, (querySnapshot) => {
    const tempDataSongs: ISong[] = []
    querySnapshot.forEach((doc) => {
      tempDataSongs.push({
        id: doc.id,
        ...doc.data(),
      } as ISong)
    })

    songs.value = tempDataSongs
  })
}

export const addSongs = async (song: ISong) => {
  await addDoc(collection(db, DB_NAME), {
    title: song.title,
    artist: song.artist,
    year: song.year,
  })
}

export const deleteSong = async (songId: string) => {
  await deleteDoc(doc(db, DB_NAME, songId))
}
