<template>
  <div class="filter">
    <div class="filter__top">
      <a
        @click.prevent="toggleList()"
        href="#"
        :class="{ active : opened }"
        class="filter__title"
      >
        Породы
        <span class="arrow">
          <v-svg
            name="arrow"
            width="9"
            height="5"
          />
        </span>
      </a>

      <p
        v-if="this.$route.params.breed"
        class="filter__item active"
      >
        {{ this.$route.params.breed }}
      </p>

      <label
        for="sort"
        class="filter__label"
      >
        Сортировка по алфавиту
        <input
          id="sort"
          type="checkbox"
        >
        <span class="filter__sort" />
      </label>
    </div>

    <div
      ref="list"
      class="filter__list"
    >
      <a
        href="#"
        class="filter__item active"
      >
        Все пёсели
      </a>
      <div class="filter__alphabet">
        <a
          v-for="(value, key) in breeds"
          :key="key"
          :href="`/${key}`"
          class="filter__alphabet-line"
        >
          {{ key }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'FilterBlock',
  data () {
    return {
      opened: false
    }
  },
  computed: {
    ...mapState('dogs', ['breeds'])
  },
  created () {
    this.getBreeds()
  },
  methods: {
    ...mapActions('dogs', ['getBreeds']),

    toggleList () {
      this.opened = !this.opened
      const list = this.$refs.list
      if (this.opened) {
        list.style.height = `${list.scrollHeight}px`
      } else {
        list.style.height = ''
      }
    }
  }
}
</script>
