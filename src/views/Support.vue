<template>
  <transition name="fade">
    <div id="support" class="page" v-show="show">
      <h2>Support</h2>

      <div class="row">
        <div class="col">
          <h3>Need help?</h3>
          <p>Check out the F.A.Q. section for the most common inquiries. If you still need help feel free to contact us at <a href="mailto:support@quotesnewtab.com">support@quotesnewtab.com</a>.</p>

          <h3>Have a feature idea?</h3>
          <p>Awesome! Head on over to our GitHub and <a href="">create an issue<eva-icon name="external-link-outline" height="15" width="15" fill="#8c7ae6"></eva-icon></a>.</p>

          <h3>Found a bug?</h3>
          <p>Please <a href="">create an issue<eva-icon name="external-link-outline" height="15" width="15" fill="#8c7ae6"></eva-icon></a> and try to explain as detailed as possible what the bug is and how it can be re-produced.</p>
        </div>
        <div class="col-auto">
          <h3>F.A.Q.</h3>
          <FrequentlyAskedQuestions />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions.vue'

export default {
  name: 'support',
  components: {
    FrequentlyAskedQuestions
  },
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

.row {
  h3 {
    margin-bottom: 20px;
  }
  
  p {
    margin-bottom: 40px;

    a:hover {
      text-decoration: underline;
    }
  }
}
</style>
