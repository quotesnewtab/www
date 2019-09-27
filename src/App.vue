<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="logotype-wrap">
          <router-link to="/" id="logotype">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <path class="st0" d="M19,17c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H5C3.9,3,3,3.9,3,5v16l4-4H19z M12.7,9.1c0.1-0.5,0.4-0.9,0.8-1.3
              c0.3-0.3,0.7-0.6,1.2-0.8c0.2-0.1,0.3,0,0.4,0.2l0.3,0.6c0.1,0.2,0,0.4-0.2,0.4c-0.4,0.2-0.7,0.4-0.9,0.7c-0.2,0.3-0.4,0.8-0.4,1.3
              h1c0.2,0,0.3,0.1,0.3,0.3v2.1c0,0.2-0.1,0.3-0.3,0.3h-2.1c-0.2,0-0.3-0.1-0.3-0.3V11C12.5,10.2,12.5,9.5,12.7,9.1z M8.6,11
              c0-0.8,0.1-1.4,0.2-1.9C9,8.6,9.2,8.2,9.6,7.8c0.3-0.3,0.7-0.6,1.2-0.8c0.2-0.1,0.3,0,0.4,0.2l0.3,0.6c0.1,0.2,0,0.4-0.2,0.4
              c-0.4,0.2-0.7,0.4-0.9,0.7c-0.2,0.3-0.4,0.8-0.4,1.3h1c0.2,0,0.3,0.1,0.3,0.3v2.1c0,0.2-0.1,0.3-0.3,0.3H9c-0.2,0-0.3-0.1-0.3-0.3
              V11z"/>
            </svg>
            <span>Quotes New Tab</span>
          </router-link>
          <!--<span class="version">v2.0.0</span>-->
        </div>
        <nav>
          <router-link to="/quotes">Quotes</router-link>
          <router-link to="/features">Features</router-link>
          <a href="https://www.paypal.me/CarlssonEmil">Donate</a>
          <a href="https://github.com/quotesnewtab">GitHub</a>
          <a class="button" href="https://chrome.google.com/webstore/detail/quotes-new-tab/fnhpicigolcacikdjdocmkfnplmefadg">Add to Chrome</a>
        </nav>
      </div>
    </header>
    <main>
      <div class="container">
        <router-view/>
      </div>
    </main>
    <footer>
      <div class="container">
        <a href="https://emilcarlsson.se" class="made-by">Made by Emil Carlsson</a>

        <nav>
          <router-link to="/submit">Submit a quote</router-link>
          <router-link to="/api/docs">API</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/support">Support</router-link>
          <router-link to="/privacy">Privacy</router-link>
          <router-link to="/terms">Terms</router-link>
        </nav>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import '@/scss/variables.scss';
@import '@/scss/base.scss';

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

header {
  background: white;
  border-bottom: 1px solid lightgray;
  height: $header-height;
  padding: 25px 0;
  position: fixed;
  width: 100%;
  z-index: 100;

  > .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .logotype-wrap {
    align-items: center;
    display: flex;

    #logotype {
      align-items: center;
      color: $base-font-color;
      display: flex;
      font-size: 24px;
      text-decoration: none;

      svg {
        display: block;
        fill: $primary-color;
        height: 30px;
        margin-right: 4px;
        position: relative;
        top: 2px;
        transition: 0.25s ease;
      }

      span {
        display: none;

        @media screen and (min-width: $mobile) {
          display: block;
        }
      }

      &:hover {
        color: black;

        svg {
          fill: $primary-color-darker;
        }
      }
    }

    .version {
      background: lighten(lightgray, 5%);
      border-radius: 4px;
      display: none;
      font-weight: 500;
      margin-left: 10px;
      padding: 5px 8px;
      
      @media screen and (min-width: $tablet) {
        display: block;
      }
    }
  }

  @media screen and (max-width: $mobile) {
    .button {
      display: none;
    }
  }
}

main {
  flex: 1 0 auto;
}

footer {
  flex-shrink: 0;
  height: $footer-height;
  line-height: #{ $footer-height - 1px };
  padding: 0 50px;
  position: relative;
  z-index: 99;

  @media screen and (max-width: $tablet) {
    height: 75px;
    line-height: 75px;
    padding: 0;
  }

  > .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  a {
    color: $base-font-color;

    &:hover {
      text-decoration: none;
    }

    &.made-by {
      @media screen and (max-width: $mobile) {
        display: none;
      }
    }
  }
}

nav {
  @media screen and (max-width: $mobile) {
    text-align: center;
    width: 100%;
  }

  a {
    color: $base-font-color;
    padding: 2px;
    text-decoration: none;

    + a {
      margin-left: 25px;
    }

    &:not(.button):hover {
      border-bottom: 1px solid $primary-color;
      color: $primary-color-darker;
      text-decoration: none;
    }
  }
}
</style>
