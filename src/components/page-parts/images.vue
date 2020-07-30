<template>
  <div
    class="dog"
  >
    <img-component
      v-for="(img, i) of sort"
      :key="i"
      :style="{background: `url(${img.link})`}"
      :class="['dog__img', i === 0 ? 'dog__img-big' : 'dog__img-sml']"
      :img="img.link"
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
      newImgs: []
    }
  },
  computed: {
    ...mapState('imgs', ['imgs']),

    sort () {
      const array = []
      this.imgs.forEach(item => {
        array.push({
          name: this.getBreedName(item),
          link: item
        })
      })

      array.sort(this.sortByName)

      return array
    }
  },
  async mounted () {
    this.RESET()
    await this.loadMore()
    const listElem = document.querySelector('#app')
    listElem.addEventListener('scroll', this.scroll)
  },
  beforeDestroy () {
    const listElem = document.querySelector('#app')
    listElem.removeEventListener('scroll', this.scroll)
  },
  methods: {
    ...mapMutations('imgs', ['RESET']),
    ...mapActions('imgs', ['getImgs']),

    sortByName (a, b) {
      return a.name > b.name
    },

    scroll () {
      const listElem = document.querySelector('#app')
      if (listElem.scrollTop + listElem.clientHeight >= listElem.scrollHeight) {
        this.loadMore()
      }
    },

    async loadMore () {
      await this.getImgs()
      // await this.imgs.forEach(el => this.newImgs.push(el))
    },

    getBreedName (str) {
      let arr = str.split('/')
      return arr[4].split('-').shift()
    }
  }
}
</script>
