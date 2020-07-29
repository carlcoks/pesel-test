<template>
  <div id="app">

    <Header />

    <router-view />
  </div>
</template>

<script>
import Header from '@/components/layout/header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="sass">
  @import '@/styles/main.sass'
</style>
