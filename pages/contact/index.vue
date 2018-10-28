<template>
  <section class="container contact">
    <div v-html="pageContent"/>
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
    return axios.get(apiDomain + '/wp/v2/pages/17').then(async result => {
      let pageData = result.data;
      return {
        pageTitle: pageData.title.rendered,
        pageContent: pageData.content.rendered,
      };
    });
  },
}
</script>