import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from './config'
import type { ISong } from '@/types'
import type { Ref } from 'vue/dist/vue.js'

export const getSongs = async (songs: Ref<ISong[]>) => {
  const q = query(collection(db, 'songs'))

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
