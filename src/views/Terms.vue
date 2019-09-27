<template>
  <transition name="fade">
    <div id="terms" class="page" v-show="show">
      <h2><eva-icon name="file-text-outline" height="30" width="30" fill="#9c88ff"></eva-icon>Terms of Service</h2>
      <p>Thank you for using Quotes New Tab and/or our services. Please read this Terms of Service agreement carefully before accessing or using our services. Because it is such an important contract between us and our users, we have kept it short and as clear as possible.

        By using our services, you are agreeing to these terms.
      </p>

      <h3>Using our services</h3>
      <p>Don't misuse our services. For example, don't interfere with our services or try to access them using a method other than the interface and the instructions that we provide. We may suspend or stop providing our services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.

        Using our services does not give you ownership of any intellectual property rights in our services or the content you access. You may not use content from our services unless you obtain permission from us or are otherwise permitted by law. These terms do not grant you the right to use any branding or logos used in our services. Don't remove, obscure, or alter any legal notices displayed in or along with our services.</p>

      <h5>API Usage</h5>
      <p>You may not use the Quotes New Tab API commercially. Abuse or excessively frequent requests to our API may result in the temporary or permanent suspension of your access to the API. We, in our sole discretion, will determine abuse or excessive usage of the API.
      </p>

      <h3>Privacy</h3>
      <p>Our <router-link to="/privacy">Privacy Policy</router-link> explain how we treat your personal data and protect your privacy when you use our services.</p>

      <h3>Provided in Good Faith</h3>
      <p>Our services are provided in good faith and although we endeavor to ensure that the data in our services is accurate and obtained from sources believed to be reliable, we do not guarantee or warrant the accuracy, authenticity, timeliness, reliability, appropriateness, correct sequencing, or completeness of our services; or that our services are free from errors or other material defects.</p>

      <h3>Disclaimer of Warranties</h3>
      <p>Other than expressly set out in these terms or additional terms, we do not make any specific promises about the services. For example, we do not make any commitments about the content within the services, the specific functions of the services, or their reliability, availability, or ability to meet your needs. We provide the services "as is".</p>

      <h3>About these Terms</h3>
      <p>We may modify these terms without warning and you should therefore look at the terms regularly.</p>

      <h4>If you have any questions or need more information about our terms of service, please contact us at <a href="mailto:hello@quotesnewtab.com">hello@quotesnewtab.com</a>.</h4>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Terms',
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

h5 {
  font-weight: 600;
  margin: 20px 0 10px;
}

p {
  line-height: 1.5;
}
</style>
