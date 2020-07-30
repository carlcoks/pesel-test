<template>
  <div
    class="dog"
  >
    <img-component
      v-for="(img, i) of sortEl"
      :key="i"
      :style="{background: `url(${img})`}"
      :class="['dog__img', i === 0 ? 'dog__img--big' : 'dog__img--sml']"
      :img="img"
    />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import ImgComponent from './img'

export default {
  name: 'Images',
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
    ...mapState('imgs', ['imgs', 'sort']),

    sortEl () {
      if (this.sort.is) {
        const array = []

        this.imgs.forEach(el => array.push(el))

        array.sort()

        return array
      } else {
        return this.imgs
      }
    }
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
    ...mapMutations('imgs', ['RESET']),
    ...mapActions('imgs', ['getImgs']),

    scroll () {
      if (this.listElem.scrollTop + this.listElem.clientHeight >= this.listElem.scrollHeight) {
        this.loadMore()
      }
    },

    async loadMore () {
      await this.getImgs()
    }
  }
}
</script>
