<template>
  <div>
    <div id="quote-submission-form">
      <form @submit.prevent="submit()">
        <label for="author">Author</label>
        <input type="text" id="author" name="author" v-model="input.author" :class="{ error: errors.author }">
        <span class="error" v-show="errors.author">{{ errors.author }}</span>

        <label for="quote">Quote</label>
        <textarea name="quote" id="quote" v-model="input.quote" :class="{ error: errors.quote }"></textarea>
        <span class="error" v-show="errors.quote">{{ errors.quote }}</span>

        <label for="submitter">Your name (optional)</label>
        <input type="text" id="submitter" name="submitter" v-model="input.submitter">

        <div class="checkbox">
          <input type="checkbox" id="read-rules" v-model="input.readRules">
          <label for="read-rules">I have read and understood the submission rules.</label>
        </div>
        <span class="error" v-show="errors.readRules">{{ errors.readRules }}</span>

        <button class="button" type="submit">Submit quote</button>
      </form>
    </div>
    <p :class="'response ' + response.status" v-if="response.message">{{ response.message }}</p>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: 'QuoteSubmissionForm',
  data() {
    return {
      errors: {
        author: null,
        quote: null,
        readRules: null
      },
      input: {
        author: null,
        quote: null,
        submitter: null,
        readRules: null
      },
      response: {
        message: null,
        status: null
      }
    }
  },
  methods: {
    submit() {
      let valid = this.validate();

      if (valid) {
        axios.post(`${ process.env.VUE_APP_BASE_API_URL }submissions?auth_token=${ process.env.VUE_APP_SUBMISSION_TOKEN }`, {
          author: this.input.author,
          quote: this.input.quote,
          submitter: this.input.submitter
        })
        // eslint-disable-next-line
        .then(response => {
          this.input = {
            author: null,
            quote: null,
            submitter: null,
            readRules: null
          };

          this.response = {
            message: 'Quote was successfully submitted! 😄',
            status: 'success'
          };
        })
        // eslint-disable-next-line
        .catch(error => {
          console.log({error});
          if (error.response.status == 403) {
            this.response = {
              message: 'You have been banned from using the API. 🙄',
              status: 'error'
            };
          } else {
            this.response = {
              message: 'Something went wrong, try again. 😟',
              status: 'error'
            };
          }
        });
      }
    },
    validate() {
      this.errors = {
        author: null,
        quote: null,
        readRules: null
      };

      if (!this.input.author)    this.errors.author    = "Author is required.";
      if (!this.input.quote)     this.errors.quote     = "Quote is required.";
      if (!this.input.readRules) this.errors.readRules = "Must be checked.";

      if (!this.errors.author && !this.errors.quote && !this.errors.readRules) return true;
      return false;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#quote-submission-form {
  background: #f7fafc;
  border: 1px solid #e3e8ee;
  border-radius: 4px;
  width: 350px;

  @media screen and (max-width: $mobile) {
    margin-bottom: 20px;
    width: 100%;
  }

  form {
    padding: 30px;

    label {
      color: #4f566b;
      font-size: 14px;
      font-weight: 600;
      display: block;
      left: 2px;
      margin-bottom: 6px;
      position: relative;

      &:not(:first-of-type) {
        margin-top: 20px;
      }
    }

    input:not([type="checkbox"]) {
      border: 1px solid #e3e8ee;
      border-radius: 3px;
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      padding: 2px 6px;
      transition: border-color 0.25s ease;
      width: 100%;

      @media screen and (max-width: $mobile) {
        padding: 8px 10px;
      }

      &:focus {
        border-color: rgba($primary-color, 0.5);
      }

      &.error {
        border-color: rgba($red-color, 0.5);
      }
    }

    textarea {
      @extend input;
      min-height: 75px;
      max-height: 200px;
      resize: vertical;

      @media screen and (max-width: $mobile) {
        min-height: 82px;
      }
    }

    .checkbox {
      align-items: flex-start;
      display: flex;
      margin: 30px 0 5px;

      input {
        margin: 0;
      }

      label {
        margin: 0 0 0 6px;
        position: relative;
        top: -1px;
      }
    }

    span.error {
      color: $red-color;
      display: block;
      font-size: 12px;
      font-weight: 600;
      left: 2px;
      position: relative;
    }

    button {
      display: block;
      margin-top: 30px;

      @media screen and (max-width: $mobile) {
        padding: 10px 0;
        width: 100%;
      }
    }
  }
}

.response {
  font-weight: 600;
  margin: 20px 0 0;
  text-align: center;

  &::after {
    margin-left: 6px;
  }

  &.success {
    color: $primary-color;
  }

  &.error {
    color: $red-color;
  }
}
</style>

