<template>
  <div class="dog">
    <div
      v-for="(img, i) of imgs"
      :key="i"
      :style="{background: `url(${img})`}"
      :class="['dog__img', i === 0 ? 'dog__img-big' : 'dog__img-sml']"
    >
      <button
        @click="likeImg(img)"
      >
        <v-svg
          name="like"
          height="26"
          width="29"
        />
      </button>
      <p>{{ getBreedName(img) }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Images',
  computed: {
    ...mapState('imgs', ['imgs'])
  },
  created () {
    this.getImgs()
  },
  methods: {
    ...mapActions('imgs', ['getImgs']),

    getBreedName (str) {
      let arr = str.split('/')
      return arr[4].split('-').shift()
    },

    likeImg (value) {
      localStorage.setItem(value, value)
      console.log(localStorage)
    }
  }
}
</script>
