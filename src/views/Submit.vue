<template>
  <transition name="fade">
    <div id="submit" class="page" v-show="show">
      <h2>Submit a quote</h2>

      <div>
        <QuoteSubmissionForm />
        <div class="rules">
          <h3>Submission rules</h3>
          <p>By submitting this quote you agree and acknowledge that:</p>
          <ul>
            <li>You are an awesome person for taking the time to submit a quote! 🤩</li>
            <li>This quote does not already exist in the database. <router-link to="/quotes">Check here</router-link>.</li>
            <li>This is a real quote by a real person.</li>
            <li>To the best of your knowledge this author have said/written this quote.</li>
            <li>Your name, if submitted, will be visible with the quote.</li>
            <li>Trolling/spamming will lead to a ban from our API.</li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import QuoteSubmissionForm from '@/components/QuoteSubmissionForm.vue'

export default {
  name: 'support',
  components: {
    QuoteSubmissionForm
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

#submit {

  > div {
    display: flex;
    justify-content: center;

    @media screen and (max-width: $mobile) {
      display: block;
    }

    .rules {
      padding: 20px 0 0 40px;

      @media screen and (max-width: $mobile) {
        padding-left: 0;
      }

      h3 {
        margin-bottom: 15px;
      }

      ul {
        margin: 10px 0 0 10px;

        li {
          line-height: 1.5;

          &::before {
            color: #bbb;
            content: "\2022";
            font-size: 24px;
            padding-right: 10px;
            position: relative;
            top: 3px;
          }
        }

        li + li {
          margin: 5px 0;
        }
      }
    }
  }
}
</style>
