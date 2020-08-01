<template>
  <div>
    <button
      @click="!isFav ? likeImg(img) : removeLike(img), isFav = !isFav"
    >
      <v-svg
        v-if="!isFav"
        name="like"
        height="26"
        width="29"
      />
      <v-svg
        v-else
        name="like-full"
        height="26"
        width="29"
      />
    </button>
    <p>{{ getBreedName(img) }}</p>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

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
    ...mapMutations('favorites', ['updateFav', 'removeFav']),

    getBreedName (str) {
      let arr = str.split('/')
      return arr[4].split('-').shift()
    },

    likeImg (value) {
      localStorage.setItem(value, value)
    },

    removeLike (value) {
      this.removeFav(value)
    }
  },
  created () {
    this.updateFav()
  },
  mounted () {
    this.isFav = this.favorites[this.img]
  }
}
</script>
