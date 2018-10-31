<template>
  <section class="container tour">
	<h1>{{ pageTitle }}</h1>
    <div v-html="pageContent"/>
    <WidgetBody>
        <iframe src="https://www.bandsintown.com/artist/Sepiroth/track_button?size=large&display_tracker_count=true&text_color=%23FFFFFF&background_color=%235c849b&hover_color=%234f7185" height="32" width="165" scrolling="no" frameborder="0" style="border:none; overflow:hidden; margin: 0 auto;" allowtransparency="true"></iframe>

      <!-- https://manager.bandsintown.com/support/events-widget -->
        <script charset="utf-8" src="https://widget.bandsintown.com/main.min.js"></script><a class="bit-widget-initializer" data-artist-name="Sepiroth" data-display-local-dates="false" data-display-past-dates="true" data-auto-style="false" data-text-color="#FFFFFF" data-link-color="#5c849b" data-popup-background-color="#000000" data-background-color="transparent" data-display-limit="" data-link-text-color="#FFFFFF" data-display-track-button="false"></a>
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

<style lang="scss">
@import './assets/scss/variables/index';

.vw-widget-body {
  padding: 0;
}
.bit-logo-container {
  display: none;
}
.bit-widget .bit-top-track-button {
  padding: 0;
}
.bit-widget .bit-nav-bar-container {
  padding: 0;
}
.bit-widget.bit-layout-ipad .bit-upcoming-events, .bit-widget.bit-layout-ipad .bit-past-events {
  margin: 0;
}
.bit-widget.bit-layout-ipad .bit-event {
  padding: 10px 0;
}
.bit-widget.bit-layout-ipad .bit-event .bit-event-buttons {
  flex-direction: row;
  margin: 0;
  justify-content: center;
  align-items: center;
  .bit-rsvp-container {
    margin: 0;
    background-color: transparent;
    transition: background-color 400ms ease;
    &:hover {
      background-color: $blue;
    }
  }
  .bit-offers-container {
    margin: 0;
  }
}
.bit-widget .bit-rsvp {
  color: $blue;
  &:hover {
    color: $white;
    &:before {
      width: 0%;
    }
  }
}
.bit-widget .bit-offers {
  transition: background-color 400ms ease;
  &:hover {
    background-color: $white;
    color: $blue;
    &:before {
      width: 0%;
    }
  }
}
.bit-details {
  &:hover {
    &:before {
      width: 0%;
    }
  }
}

</style>
