<template>
  <div class="index">
    <div class="container">
      <div class="current__box">
        <filter-block />
        <current />
      </div>
    </div>
  </div>
</template>

<script>
import FilterBlock from '@/components/page-parts/filter'
import Current from '@/components/page-parts/current'

export default {
  name: 'CurrentBreed',
  components: {
    Current,
    FilterBlock
  }
}
</script>
