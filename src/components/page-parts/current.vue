<template>
  <div class="dog">
    <div
      v-for="(img, i) of current"
      :key="i"
      :style="{background: `url(${img})`}"
      class="dog__img dog__img-sml"
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
import {mapActions, mapState} from 'vuex'

export default {
  name: 'Current',
  computed: {
    ...mapState('current', ['current'])
  },
  created () {
    this.getCurrent(this.$route.params.breed)
  },
  methods: {
    ...mapActions('current', ['getCurrent']),

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
