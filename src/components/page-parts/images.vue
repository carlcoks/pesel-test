<template>
  <div
    class="dog"
  >
    <img-component
      v-for="(img, i) of newImgs"
      :key="i"
      :style="{background: `url(${img})`}"
      :class="['dog__img', i === 0 ? 'dog__img-big' : 'dog__img-sml']"
      :img="img"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ImgComponent from './img'

export default {
  name: 'Images',
  components: {
    ImgComponent
  },
  data () {
    return {
      newImgs: []
    }
  },
  computed: {
    ...mapState('imgs', ['imgs'])
  },
  mounted () {
    const listElem = document.querySelector('#app')
    listElem.addEventListener('scroll', e => {
      if (listElem.scrollTop + listElem.clientHeight >= listElem.scrollHeight) {
        this.loadMore()
      }
    })
    this.loadMore()
  },
  methods: {
    ...mapActions('imgs', ['getImgs']),

    async loadMore () {
      await this.getImgs()
      await this.imgs.forEach(el => this.newImgs.push(el))
    }
  }
}
</script>
