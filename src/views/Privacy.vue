<template>
  <transition name="fade">
    <div id="privacy" class="page" v-show="show">
      <h2><eva-icon name="shield-outline" height="30" width="30" fill="#9c88ff"></eva-icon>Privacy Policy</h2>
      <p>Your privacy is very important to us. This privacy policy applies to our browser extension, our website and our API.

        The information we gather or process is solely for improving the quality and security of our services. <b>Your information isn't and has never been sold to third parties.</b>
      </p>

      <h3>Extension</h3>
      <p>While using our extension you will directly use our API, read more below about what data we collect through our API. 
        
        Our extension will also make use of the <a href="https://developer.chrome.com/extensions/api_index">WebExtension API</a> by Chrome. This API have fine-grained permission levels that are enforced by the web browser, restricting information that our extension has access to within your browser. The extension can only access specific information that you have explicitly granted permission for. <b>We can not and do not track your browsing history.</b>
        
        Below are the permissions that our extension is currently requesting:</p>
      
      <div class="table-wrap">
        <table>
          <tr>
            <th>Permission</th>
            <th>Feature</th>
            <th>Where it is used</th>
          </tr>
          <tr>
            <td class="fit-content"><a href="https://developer.chrome.com/extensions/topSites">Top Sites</a></td>
            <td class="fit-content">Top Sites Tiles</td>
            <td>Used only within the extension to display your most visited sites as tiles. This is not sent or stored elsewhere.</td>
          </tr>
        </table>
      </div>

      <h3>Website</h3>
      <p>We do not track or analyse your access or use of this website in any manner. No cookies are placed on your computer during your use of this website.
        
        However, by using this website you will indirectly use our API service, read more below.</p>

      <h3>API</h3>
      <p>To protect and rate-limit the API we store the network IP address of your client in our database. We use your IP address to maintain the security and operation of our API, and for internal analytics and reporting purposes.

        This data does not reveal your specific identity (like your name or contact information) but may include usage information, such as country, location, information about how and when you use our API and other technical information.
      </p>

      <h3>Cookies and advertisements</h3>
      <p>At the moment we do not store cookies or allow third-party advertisement companies to serve ads through our services.</p>

      <h3>Consent</h3>
      <p>By using our website and services, you hereby consent to our Privacy Policy and agree to its <router-link to="/terms">Terms and Conditions</router-link>.</p>

      <h4>If you have any questions or need more information about our privacy policy, please contact us at <a href="mailto:privacy@quotesnewtab.com">privacy@quotesnewtab.com</a>.</h4>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Privacy',
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

.page {
  max-width: 650px;
  margin: 0 auto;
  padding-bottom: 100px;
}

h2 {
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 40px;
  text-align: left;

  i {
    margin-right: 8px;
    position: relative;
    top: 7px;
  }
}

h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 30px 0 10px;
}

h4 {
  font-size: 18px;
  font-weight: 600;
  margin: 50px 0 10px;
}

p {
  line-height: 1.5;
}

.table-wrap {
  background: #f7fafc;
  border: 1px solid #e3e8ee;
  border-radius: 5px;
  color: #4f566b;
  margin: 10px 0;
  overflow: hidden;
}

table {
  width: 100%;

  tr {
    &:first-child {
      background: #e3e8ee;
    }
  }

  th, td {
    padding: 8px 16px;
  }

  th {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.25px;
    padding: 10px 16px;
    text-align: left;
    text-transform: uppercase;
  }

  td {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    vertical-align: top;

    &.fit-content {
      white-space: nowrap;
      width: 0%;
    }

    &:not(.fit-content) {
      max-width: 1px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: wrap;
      width: 100%;
    }
  }
}
</style>
