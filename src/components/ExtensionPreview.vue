<template>
  <div v-if="data" id="extension-preview">
    <div class="header">
      <div class="tab">New Tab</div>
      <div class="bar">
        <div>
          <eva-icon name="arrow-back" height="20" width="20" fill="#777"></eva-icon>
          <eva-icon name="arrow-forward" height="20" width="20" fill="#bbb"></eva-icon>
          <eva-icon v-on:click="fetchNew()" name="refresh" height="20" width="20" fill="#777" animation="pulse"></eva-icon>
          <div class="adress-bar"></div>
          <eva-icon name="more-vertical" height="20" width="20" fill="#777"></eva-icon>
        </div>
      </div>
    </div>
    <div class="body" :style="{ 'background-image': data.img }">
      <div class="content">
        <h2 id="quote">{{ data.quote }}</h2>
        <p id="author">{{ data.author }}</p>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: 'ExtensionPreview',
  data() {
    return {
      data: null
    }
  },
  mounted() {
    this.fetchNew();
  },
  methods: {
    fetchNew() {
      axios
        .get(`${ process.env.VUE_APP_BASE_API_URL }quotes/random`)
        .then(response => {
          this.data = response.data;
          this.data.img = `url("${ process.env.VUE_APP_BASE_AUTHOR_IMG_URL + this.data.author.toLowerCase().replace(/\s+/g, "-").replace(/[, .]+/g, "") }.jpg")`;
          this.$emit('show');
        });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#extension-preview {
  border-radius: 5px;
  box-shadow: 0px 20px 50px -15px darken(white, 60%);
  margin: 0 auto 80px;
  max-width: 1000px;
  overflow: hidden;
  position: relative;
  text-align: left;
  width: 100%;

  @media screen and (max-width: $mobile) {
    margin-bottom: 60px;
  }
}

.header {
  background: darken(white, 20%);
  padding-top: 7px;
  position: relative;
  width: 100%;
  z-index: 3;

  .tab {
    background: darken(white, 5%);
    border-radius: 10px 10px 0 0;
    color: darken(white, 60%);
    cursor: default;
    font-size: 14px;
    font-weight: 600;
    margin-left: 50px;
    padding: 10px 15px;
    position: relative;
    user-select: none;
    width: 150px;

    @media screen and (max-width: $mobile) {
      font-size: 12px;
      margin-left: 30px;
    }

    &::before,
    &::after {
      content: '';
      bottom: 0;
      height: 10px;
      position: absolute;
      width: 10px;
    }

    &::before {
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><path d='M 0 10 L 10 10 L 10 0 Q 10 10 0 10 Z' fill='%23f2f2f2'></path></svg>");
      left: -10px;
    }

    &::after {
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><path d='M 0 10 L 10 10 L 10 0 Q 10 10 0 10 Z' fill='%23f2f2f2'></path></svg>");
      right: -10px;
      transform: scaleX(-1);
    }
  }

  .bar {
    background: darken(white, 5%);

    > div {
      align-items: center;
      display: flex;
      padding: 5px 10px;
    }

    i {

      &:nth-of-type(2) {
        margin: 0 8px;
      }

      &:nth-of-type(3) {
        cursor: pointer;
      }
    }

    .adress-bar {
      background: darken(white, 12.5%);
      border-radius: 25px;
      height: 25px;
      margin: 0 10px;
      width: 100%;
    }
  }
}

.body {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  padding-top: calc(((9 / 16) * 100%) + 76px);
  opacity: 1;
  transition: opacity 0.25s ease, background-image 0.25s ease-in-out;
  width: 100%;

  &::after {
    background: rgba(#333, 0.75);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .content {
    align-items: flex-start;
    bottom: 0;
    display: flex;
    color: #ecf0f1;
    flex-direction: column;
    height: calc(100% - 76px);
    justify-content: center;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    width: 70%;
    z-index: 2;

    #quote {
      font-size: 30px;
      font-weight: 700;
      line-height: 1.4;
      margin-bottom: 30px;

      @media screen and (max-width: $mobile) {
        font-size: 20px;
        margin-bottom: 15px;
      }
    }

    #author {
      font-size: 18px;

      @media screen and (max-width: $mobile) {
        font-size: 14px;
      }

      &::before {
        content: '\2014';
        margin-right: 6px;
      }
    }
  }
}
</style>