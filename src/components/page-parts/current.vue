<template>
  <div class="dog dog-mar">
    <img-component
      v-for="(img, i) of current"
      :key="i"
      :style="{background: `url(${img})`}"
      class="dog__img dog__img--sml"
      :img="img"
    />
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'
import ImgComponent from './img'

export default {
  name: 'Current',
  components: {
    ImgComponent
  },
  data () {
    return {
      newImgs: [],
      listElem: document.querySelector('#app')
    }
  },
  computed: {
    ...mapState('current', ['current'])
  },
  async mounted () {
    this.RESET()
    await this.loadMore()
    this.listElem.addEventListener('scroll', this.scroll)
  },
  beforeDestroy () {
    this.listElem.removeEventListener('scroll', this.scroll)
  },
  methods: {
    ...mapActions('current', ['getCurrent']),
    ...mapMutations('current', ['RESET']),

    scroll () {
      if (this.listElem.scrollTop + this.listElem.clientHeight >= this.listElem.scrollHeight) {
        this.loadMore()
      }
    },

    async loadMore () {
      if (this.$route.params.name) {
        await this.getCurrent(`${this.$route.params.breed}/${this.$route.params.name}`)
      } else {
        await this.getCurrent(`${this.$route.params.breed}`)
      }
    }
  },
  watch: {
    async '$route.params.name' () {
      this.RESET()
      await this.loadMore()
      this.listElem.addEventListener('scroll', this.scroll)
    }
  }
}
</script>
