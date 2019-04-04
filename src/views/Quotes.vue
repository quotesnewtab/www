<template>
  <transition name="fade">
    <div id="quotes" class="page" v-show="show">
      <h2>Quotes</h2>
      <Quotes v-on:show="show = true" />
    </div>
  </transition>
</template>

<script>
import Quotes from '@/components/Quotes.vue'

export default {
  name: 'quotes',
  components: {
    Quotes
  },
  data() {
    return {
      show: false
    }
  }
}
</script>
