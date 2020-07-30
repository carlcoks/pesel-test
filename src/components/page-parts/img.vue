<template>
  <div>
    <button
      v-if="!isFav"
      @click="isFav = !isFav, likeImg(img)"
    >
      <v-svg
        name="like"
        height="26"
        width="29"
      />
    </button>
    <button
      v-else
      @click="isFav = !isFav, removeLike(img)"
    >
      <v-svg
        name="like-full"
        height="26"
        width="29"
      />
    </button>
    <p>{{ getBreedName(img) }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ImgComponent',
  props: {
    img: {
      type: String
    }
  },
  data () {
    return {
      isFav: true
    }
  },
  computed: {
    ...mapState('favorites', ['favorites'])
  },
  methods: {
    ...mapActions('favorites', ['getFavorites', 'getRemoveItem']),

    getBreedName (str) {
      let arr = str.split('/')
      return arr[4].split('-').shift()
    },

    likeImg (value) {
      localStorage.setItem(value, value)
    },

    removeLike (value) {
      this.getRemoveItem(value)
    }
  },
  created () {
    this.getFavorites()
  },
  mounted () {
    this.isFav = this.favorites[this.img]
  }
}
</script>
