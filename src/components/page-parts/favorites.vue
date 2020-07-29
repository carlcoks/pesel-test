<template>
  <div class="dog">
    <div
      v-for="(value, key) in favorites"
      :key="key"
      :style="{background: `url(${value})`}"
      v-if="value !== 'WARN'"
      class="dog__img dog__img-sml"
    >
      <button
        @click="removeLike(value)"
      >
        <v-svg
          name="like-full"
          height="26"
          width="29"
        />
      </button>
      <p>{{ getBreedName(value) }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'FavImgs',
  computed: {
    ...mapState('favorites', ['favorites'])
  },
  methods: {
    ...mapActions('favorites', ['getFavorites', 'getRemoveItem']),

    getBreedName (str) {
      let arr = str.split('/')
      return arr[4].split('-').shift()
    },

    removeLike (value) {
      this.getRemoveItem(value)
    }
  },
  created () {
    this.getFavorites()
  },
  mounted () {
    console.log(localStorage)
  }
}
</script>
