<template>
  <transition name="fade">
    <div id="features" class="page" v-show="show">
      <h2>Features</h2>

      <div class="features">
        <div class="feature" v-for="feature in features" :key="feature.title">
          <div class="title">
            <eva-icon :name="feature.icon" height="35" width="35" fill="#8c7ae6" animation="shake"></eva-icon>
            <h3>{{ feature.title }}</h3>
          </div>
          <p class="description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'features',
  data() {
    return {
      show: false,
      features: [
        {
          title: "Handpicked Quotes",
          description: "Get motivated every time you open a new tab by one of our over 300 carefully chosen quotes.",
          icon: "message-square-outline"
        },
        {
          title: "Quick Links",
          description: "Quickly access your most visited sites with a tap of a button.",
          icon: "link-2"
        },
        {
          title: "Customizable Interface",
          description: "Quickly change fonts, colors and customize what is visible with a few easy button clicks.\n\nSettings are automatically saved and remembered each time you open a new tab.",
          icon: "color-palette-outline"
        },
        {
          title: "Quote Slideshow",
          description: "Turn on 'Auto-refresh new quotes' in the settings and lean back while a new quote is fetched every 15 seconds.",
          icon: "play-circle-outline"
        },
        {
          title: "Tell Your Friends",
          description: "Share your favorite quotes on Twitter and Facebook.",
          icon: "heart-outline"
        },
        {
          title: "It's Free",
          description: "Quotes New Tab will always have a completely free, no-ads, version available.",
          icon: "pricetags-outline"
        }
      ]
    }
  },
  mounted() {
    this.show = true;
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.features {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
  text-align: left;

  .feature {
    margin-bottom: 100px;
    width: 100%;

    @media screen and (min-width: $tablet) {
      width: 50%;

      &:nth-of-type(odd) {
        padding-right: 50px;
      }

      &:nth-of-type(even) {
        padding-left: 50px;
      }
    }

    div.title {
      align-items: flex-start;
      display: flex;

      h3 {
        margin-left: 20px;
      }
    }

    p.description {
      font-size: 20px;
      padding-left: 55px;
    }
  }
}
</style>
