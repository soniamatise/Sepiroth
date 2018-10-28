<template>
  <div class="section-inner">
    <navigation/>
    <nuxt/>
    <footer-el/>
  </div>
</template>
<script>
const Navigation = () => import('~/components/navigation.vue');
const FooterEl = () => import('~/components/footer-el.vue');

export default {
  components: {
    Navigation,
    FooterEl,
	}
}

</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

ol, ul {
    list-style: none outside none;
}
</style>

