<template>
  <transition name="fade">
    <div id="banned" class="page" v-show="show">
      <div class="banned" v-if="banned != null">
        <h1>Are you banned?</h1>
        <p v-if="banned">Yes. 🙄</p>
        <p v-if="!banned">No. 😅</p>
        <router-link to="/support"><eva-icon name="arrow-back" height="24" width="24" fill="#8c7ae6"></eva-icon>Go back to support</router-link>
      </div>
      <div v-if="error" class="error">
        <h1>Uh-oh... 🤔</h1>
        <p>Looks like something is wrong with the API, try again later.</p>
        <router-link to="/"><eva-icon name="arrow-back" height="24" width="24" fill="#8c7ae6"></eva-icon>Go back to home</router-link>
      </div>
    </div>
  </transition>
</template>

<script>
const axios = require("axios");

export default {
  name: 'banned',
  data() {
    return {
      banned: null,
      error: null,
      show: false
    }
  },
  mounted() {
    axios.get(`${ process.env.VUE_APP_BASE_API_URL }blacklisted/status`)
      .then(response => {
        this.banned = response.data;
        this.show = true;
      })
      .catch(() => {
        this.error = true;
        this.show = true;
      });
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.error {
  padding-top: 5vh;
  text-align: center;

  h1 {
    font-size: 50px;
    font-weight: 600;
  }

  p {
    font-size: 28px;
    margin: 25px 0 50px;
  }

  a {
    font-size: 22px;

    &:hover {
      text-decoration: none;
      
      i {
        left: -5px;
      }
    }

    i {
      left: 0;
      margin-right: 10px;
      position: relative;
      top: 4px;
      transition: left 0.25s ease;
    }
  }
}

.banned {
  padding-top: 5vh;
  text-align: center;

  h1 {
    font-size: 30px;
    font-weight: 400;
  }

  p {
    font-size: 40px;
    font-weight: 600;
    margin: 25px 0 50px;
  }

  a {
    font-size: 22px;

    &:hover {
      text-decoration: none;
      
      i {
        left: -5px;
      }
    }

    i {
      left: 0;
      margin-right: 10px;
      position: relative;
      top: 4px;
      transition: left 0.25s ease;
    }
  }
}
</style>