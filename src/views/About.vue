<template>
  <transition name="fade">
    <div id="about" class="page" v-show="show">
      <div class="row">
        <div class="col">
          <h2>About</h2>
          <p>Quotes New Tab is a Chrome extension that replaces your new tab with a minimalistic homepage featuring a random motivational quote to keep you motivated and inspired every day.

            This extension was written and is maintained by <a href="https://emilcarlsson.se">Emil Carlsson</a>.</p>
        </div>
        <div class="col">
          <h2>Contact</h2>
          <p>For any questions, comments, or concerns about this extension you can contact <a href="mailto:support@quotesnewtab.com">support@quotesnewtab.com</a>. Look at our <router-link to="/support">support page</router-link>  for frequently asked questions.
          
          If you have quote suggestions, please see <router-link to="/submit">this page</router-link>.</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = true;
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

h2 {
  margin-bottom: 15px;
}
</style>
