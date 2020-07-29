<template>
  <section class="index">
    <div class="container">
      <div class="index__box">
        <filter-block />
      </div>
    </div>
  </section>
</template>

<script>
import FilterBlock from '@/components/page-parts/filter'

export default {
  name: 'IndexPage',
  components: {
    FilterBlock
  }
}
</script>
