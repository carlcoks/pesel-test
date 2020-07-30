<template>
  <div class="index">
    <div class="container">
      <fav-imgs />
    </div>
  </div>
</template>

<script>
import FavImgs from '@/components/page-parts/favorites'

export default {
  name: 'Favorites',
  components: {
    FavImgs
  }
}
</script>
