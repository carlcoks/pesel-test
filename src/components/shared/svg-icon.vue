<template>
  <svg
    :class="className"
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg">
    <title
      v-if="title">
      {{ title }}
    </title>
    <use
      :xlink:href="iconPath"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :style="fill ? `fill: ${fill}` : ''"
    />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    },

    title: {
      type: String,
      default: null
    },

    width: {
      type: String
    },

    height: {
      type: String
    },

    fill: {
      type: String
    }
  },
  computed: {
    iconPath () {
      let icon = require(`@/../static/svg/${this.name}.svg`)
      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default
      }

      return icon.url
    },

    className () {
      return 'svg-icon svg-icon--' + this.name
    }
  }
}
</script>
