<template>
  <transition name="fade">
    <div id="home" class="page" v-show="show">
      <div class="hero">
        <h1>A new motivational quote in every new tab.</h1>
      </div>
      <ExtensionPreview v-on:show="show = true" />
    </div>
  </transition>
</template>

<script>
import ExtensionPreview from '@/components/ExtensionPreview.vue'

export default {
  name: 'home',
  components: {
    ExtensionPreview
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#home {
  text-align: center;

  @media screen and (max-width: $mobile) {
    .button.big {
      display: inline-block;
      margin-bottom: 30px;
    }
  }
}
</style>
