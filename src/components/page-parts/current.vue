<template>
  <div class="dog dog-mar">
    <img-component
      v-for="(img, i) of newImgs"
      :key="i"
      :style="{background: `url(${img})`}"
      class="dog__img dog__img-sml"
      :img="img"
    />
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import ImgComponent from './img'

export default {
  name: 'Current',
  components: {
    ImgComponent
  },
  data () {
    return {
      newImgs: []
    }
  },
  computed: {
    ...mapState('current', ['current'])
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
    ...mapActions('current', ['getCurrent']),

    async loadMore () {
      if (this.$route.params.name) {
        await this.getCurrent(`${this.$route.params.breed}/${this.$route.params.name}`)
      } else {
        await this.getCurrent(`${this.$route.params.breed}`)
      }
      await this.current.forEach(el => this.newImgs.push(el))
    }
  }
}
</script>
