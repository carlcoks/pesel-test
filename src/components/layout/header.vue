<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__box">
        <router-link
          to="/"
          class="logo"
        >
          <v-svg
            width="118"
            height="27"
            name="logo"
          />
        </router-link>

        <router-link
          to="/favorites"
          class="header__favorites"
        >
          Избранные пёсели
          <v-svg
            name="favorite"
            width="16"
            height="14"
          />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
