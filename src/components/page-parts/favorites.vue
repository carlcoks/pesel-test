<template>
  <div class="dog dog-mar">
    <img-component
      v-for="(value, key) in favorites"
      :key="key"
      :style="{background: `url(${value})`}"
      v-if="value !== 'WARN'"
      class="dog__img dog__img--sml"
      :img="value"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ImgComponent from './img'

export default {
  name: 'FavImgs',
  components: {
    ImgComponent
  },
  computed: {
    ...mapState('favorites', ['favorites'])
  },
  methods: {
    ...mapMutations('favorites', ['updateFav'])
  },
  created () {
    this.updateFav()
  }
}
</script>
