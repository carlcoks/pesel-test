<template>
  <div class="filter">
    <div class="filter__top">
      <a
        @click.prevent="toggleList()"
        href="#"
        :class="{ 'active' : opened }"
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
        v-if="routeBreed"
        class="filter__item active"
      >
        {{ routeBreed }}
      </p>
      <p
        v-if="routeName"
        class="filter__item active"
      >
        {{ routeName }}
      </p>

      <label
        for="sort"
        class="filter__label"
        @click="SORT"
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
      <router-link
        to="/"
        class="filter__item active"
      >
        Все пёсели
      </router-link>

      <div
        v-if="!routeBreed"
        class="filter__alphabet"
      >
        <span
          @click="item.type === 'breed' ? goTo(item.value) : ''"
          v-for="(item, key) in alphabetSort"
          :key="key"
          :class="[{'filter__letter': item.type === 'letter'}, {'filter__breed': item.type ==='breed'}]"
        >
          {{ item.value }}
        </span>
      </div>

      <div
        v-if="routeBreed"
        class="filter__alphabet"
      >
        <div
          v-for="(item, i) of breeds[routeBreed]"
          :key="i"
        >
          <router-link
            :to="`/${routeBreed}/${item}`"
            class="filter__breed"
          >
            {{ item }}&nbsp;
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'FilterBlock',
  data () {
    return {
      opened: false,
      routeBreed: this.$route.params.breed,
      routeName: this.$route.params.name
    }
  },
  computed: {
    ...mapState('dogs', ['breeds']),

    alphabetSort () {
      const array = []
      for (const key in this.breeds) {
        const letter = key.toUpperCase().slice(0, 1)
        if (!array.find((item, i) => item.value === letter)) {
          array.push({
            value: letter,
            type: 'letter'
          })
        }
        array.push({
          value: key,
          type: 'breed'
        })
      }

      return array
    }
  },
  created () {
    this.getBreeds()
  },
  methods: {
    ...mapActions('dogs', ['getBreeds']),
    ...mapMutations('imgs', ['SORT']),

    goTo (link) {
      this.$router.push(`/${link}`)
    },

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
