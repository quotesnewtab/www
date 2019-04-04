<template>
  <div id="quotes" v-if="data">
    <div id="search">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g data-name="Layer 2">
            <g data-name="search">
              <rect width="24" height="24" opacity="0"/>
              <path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"/>
            </g>
          </g>
        </svg>
      </div>
      <input type="text" id="search" ref="search" v-model="search" :placeholder="`Search ${ this.data.length } quotes...`">
    </div>
    <div class="quotes">
      <div class="quote" v-for="quote in quotes" :key="quote.id">
        <router-link :to="`/quotes/${ quote.id }`">
          <p class="quote">{{ quote.quote }}</p>
          <p class="author">{{ quote.author }}</p>
          <p class="id">ID: {{ quote.id }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: 'Quotes',
  data() {
    return {
      data: null,
      search: null
    }
  },
  mounted() {
    axios
      .get(`${ process.env.VUE_APP_BASE_API_URL }quotes`)
      .then(response => {
        this.data = response.data;
        this.$emit('show');
        this.$nextTick(() => this.$refs.search.focus())
      });
  },
  computed: {
    quotes() {
      let quotes = this.data;

      if (this.search) quotes = quotes.filter(q =>
        q.quote.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
        q.author.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
        q.id == parseInt(this.search)
      );

      return quotes;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#search {
  position: relative;

  .icon {
    align-items: center;
    bottom: 0;
    display: flex;
    height: 100%;
    left: 0;
    padding: 0 14px;
    position: absolute;
    top: 0;
    z-index: 2;

    svg {
      fill: darken(lightgray, 10%);
      height: 50%;
    }
  }

  input {
    border-radius: 4px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 2px 4px;
    color: $base-font-color;
    font-family: inherit;
    font-size: 16px;
    line-height: 1;
    padding: 16px 16px 16px 54px;
    transition: 0.25s ease;
    width: 100%;
    -webkit-appearance: none;

    &:focus {
      box-shadow: 0px 0px 0px 3px rgba($primary-color, 0.5);
    }
  }
}

.quotes {
  display: flex;
  flex-wrap: wrap;
  margin: 20px -10px 50px;

  > .quote {
    padding: 10px;
    width: 100%;

    @media screen and (min-width: $mobile) {
      width: 50%;
    }

    @media screen and (min-width: $tablet) {
      width: 33.333333%;
    }

    > a {
      background: white;
      border: 1px solid lighten(lightgray, 10%);
      border-radius: 4px;
      box-shadow: 0px 5px 10px 0px rgba(lightgray, 0.25);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      padding: 15px;
      position: relative;
      transition: 0.25s ease;

      &:hover {
        border-color: $primary-color;
        box-shadow: 0px 5px 10px 0px rgba(lightgray, 0.75);
        text-decoration: none;
      }

      .quote {
        color: $base-font-color;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.4;
      }

      .author {
        color: lighten(black, 60%);
        font-size: 15px;
        font-weight: 600;
        margin-top: 15px;

        &::before {
          content: '–';
          margin-right: 4px;
        }
      }

      .id {
        bottom: 15px;
        color: $base-font-color;
        font-size: 10px;
        font-weight: 700;
        opacity: 0.5;
        position: absolute;
        right: 15px;
      }
    }
  }
}
</style>
