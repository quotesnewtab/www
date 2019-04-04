<template>
  <div id="faq">
      <ul>
        <li class="upper" v-on:click="collapse($event)">How do I remove the extension?<eva-icon name="arrow-ios-downward-outline"></eva-icon></li>
        <li class="lower">
          <p>We're sad to see you go, but here's how to remove us from your browser:</p>
          <ol>
            <li>Go to the Chrome menu in the upper right corner.</li>
            <li>Click <em>More tools</em> <eva-icon style="position: relative; top: 2px; margin: 0 5px;" name="arrow-forward" height="15" width="15" fill="#999"></eva-icon> <em>Extensions</em>.</li>
            <li>Find our extension and click on <em>Remove</em>.</li>
          </ol>
          <p class="reference">Reference: <a href="https://support.google.com/chrome_webstore/answer/2664769?hl=en">https://support.google.com/chrome_webstore/answer/2664769?hl=en</a></p>
        </li>

        <li class="upper" v-on:click="collapse($event)">Can I submit a personal quote?<eva-icon name="arrow-ios-downward-outline"></eva-icon></li>
        <li class="lower">
          <p>Sadly, no.
			
          This extension is currently used by over 8000 different people weekly, and I don't want to "expose" your profile picture to that many people. I am working on a feature where you can add your own quotes that only you will be able to see, but until that is published you'll just have to wait.</p>
        </li>

        <li class="upper" v-on:click="collapse($event)">Why do I see the same quote over and over again?<eva-icon name="arrow-ios-downward-outline"></eva-icon></li>
        <li class="lower">
          <p>Bad luck, I'm afraid.
				
          Each and every quote that you get when you open a new tab are randomly selected from a database. So if you see the same quote several times, that's just like throwing a dice and getting the number 1 several times in a row. Unlucky. 🤨
          </p>
        </li>

        <li class="upper" v-on:click="collapse($event)">I submitted a quote but have not received a response?<eva-icon name="arrow-ios-downward-outline"></eva-icon></li>
        <li class="lower">
          <p>Here are a few reasons why that could be:</p>
            <ul>
              <li>It was deemed inappropiate.</li>
              <li>The origin of the quote was questionable.</li>
              <li>There's no definite author to the quote.</li>
              <li>No suitable background picture of the author was found.</li>
              <li>It's currently in the queue to be added but I haven't had the time yet.</li>
            </ul>
            <p>If you have questions regarding your quote submission, please contact me.</p>
        </li>

        <li class="upper" v-on:click="collapse($event)">I'm stuck in offline mode even though I am online?<eva-icon name="arrow-ios-downward-outline"></eva-icon></li>
        <li class="lower">
          <p>There are a number of reasons why this would happen, the most common are:</p>
            <ul>
              <li>The API service is down.<!-- <a href="">Check status<eva-icon name="external-link-outline" height="15" width="15" fill="#8c7ae6"></eva-icon></a>--></li>
              <li>The database is down.<!-- <a href="">Check status<eva-icon name="external-link-outline" height="15" width="15" fill="#8c7ae6"></eva-icon></a>--></li>
              <li>The response from the database took too long.</li>
              <li>You could be banned from accessing the API.<br /><router-link to="/support/banned">Check if banned</router-link>.</li>
            </ul>
            <p>Try again at a later time and contact me if the problem persists.</p>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  methods: {
    collapse(event) {
      event.currentTarget.classList.toggle('collapsed');

      let sibling = event.srcElement.nextElementSibling;

      if (sibling.style.maxHeight) {
        sibling.style.maxHeight = null;
      } else {
        sibling.style.maxHeight = sibling.scrollHeight + "px";
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#faq {
  margin: 0 auto;
  max-width: 565px;
  width: 100%;

  @media screen and (max-width: $tablet) {
    max-width: calc(100vw - 40px);
  }
}

ul {
  list-style: none;
}

li {
  padding: 14px;

  &.upper {
    align-items: center;
    border: 1px solid lightgray;
    border-bottom: none;
    cursor: pointer;
    display: flex;
    font-weight: 600;
    font-size: 18px;
    justify-content: space-between;
    transition-delay: 0.3s;
    transition: border-bottom 2s ease;

    i {
      transition: 0.25s ease;
    }

    &.collapsed {
      i {
				transform: rotate(180deg); 
      }
    }
  }

  &.lower {
    border: 1px solid lightgray;
    border-bottom: none;
    border-top: none;
    max-height: 0;
    overflow: hidden;
    padding: 0 15px;
    transition: max-height 0.3s ease;

    &:last-child {
      border-bottom: 1px solid lightgray;
    }

    p {
      margin-bottom: 10px;
      white-space: pre-line;

      &.reference {
        font-size: 12px;
      }

      &:last-child {
        margin-bottom: 20px;
      }
    }

    a {
      color: $primary-color-darker;

      &:hover {
        text-decoration: underline;
      }
    }

    ol, ul {
      list-style: initial;
      margin-bottom: 20px;
      padding-left: 30px;

      li {
        line-height: 1.4;
        padding: 5px 0;
      }
    }
  }
}
</style>
