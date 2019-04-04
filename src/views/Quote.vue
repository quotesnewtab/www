<template>
  <transition name="fade">
    <div v-if="quote" id="quote" class="page">
      <div>
        <h1>{{ quote.quote }}</h1>
        <p>{{ quote.author }}</p>
      </div>
      <div class="img" :style="{ 'background-image': quote.img }"></div>
    </div>
  </transition>
</template>

<script>
const axios = require("axios");

export default {
  name: 'quote',
  data() {
    return {
      quote: null,
    }
  },
  mounted() {
    axios
      .get(`${ process.env.VUE_APP_BASE_API_URL }quotes/${ this.$route.params.id }`)
      .then(response => {
        this.quote = response.data;
        this.quote.img = `url("${ process.env.VUE_APP_BASE_AUTHOR_IMG_URL + this.quote.author.toLowerCase().replace(/\s+/g, "-").replace(/[, .]+/g, "") }.jpg")`;
      });
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#quote {
  align-items: center;
  display: flex;
  height: calc(100vh - #{ $footer-height });
  justify-content: center;
  margin: 0 auto;
  max-width: 800px;

  div {
    padding-bottom: 15vh;
  }

  h1, p {
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: 40px;
    font-weight: 600;
    line-height: 1.4;
  }

  p {
    font-size: 20px;
    margin-top: 20px;

    &::before {
      content: '\2014';
      margin-right: 6px;
    }
  }

  .img {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    left: 0;
    opacity: 0.25;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }
}
</style>