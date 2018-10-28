<template>
  <section class="container tour">
	<h1>{{ pageTitle }}</h1>
	<a href="http://www.bandsintown.com/track/Sepiroth">TRACK SEPIROTH</a> 
    <div v-html="pageContent"/>
	<WidgetBody>
		<!-- https://manager.bandsintown.com/support/events-widget -->
        <script charset="utf-8" src="https://widget.bandsintown.com/main.min.js"></script><a class="bit-widget-initializer" data-artist-name="Sepiroth" data-display-local-dates="false" data-display-past-dates="true" data-auto-style="false" data-text-color="#FFFFFF" data-link-color="#2F95DE" data-popup-background-color="#000000" data-background-color="transparent" data-display-limit="" data-link-text-color="#FFFFFF"></a>
    </WidgetBody>
  </section>
</template>

<script>
const axios = require('axios');
const apiDomain = process.env.apiDomain;

export default {
  layout: 'default',
  data(){
		return {
      pageTitle: '',
      pageContent: ''
		}
	},
  components: {
  },
  asyncData({ params, error }) {
    return axios.get(apiDomain + '/wp/v2/pages/15').then(async result => {
      let pageData = result.data;
      return {
        pageTitle: pageData.title.rendered,
        pageContent: pageData.content.rendered,
      };
    });
  },
}
</script>
