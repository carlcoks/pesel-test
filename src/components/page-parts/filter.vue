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
        <div
          v-for="(value, key) in breeds"
          :key="key"
        >
          <router-link
            :to="`/${key}`"
            class="filter__alphabet-line"
          >
            {{ key }}
          </router-link>
        </div>
      </div>
      <div
        v-if="routeBreed"
        class="filter__alphabet"
      >
        <div
          v-for="(value, i) of breeds[routeBreed]"
          :key="i"
        >
          <router-link
            :to="`/${routeBreed}/${value}`"
            class="filter__alphabet-line"
          >
            {{ value }}&nbsp;
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
    ...mapState('dogs', ['breeds'])
  },
  created () {
    this.getBreeds()
  },
  methods: {
    ...mapActions('dogs', ['getBreeds']),
    ...mapMutations('imgs', ['SORT']),

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
