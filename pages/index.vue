<template>
  <section class="container">
      <navigation/>
  </section>
</template>

<script>
const Navigation = () => import('~/components/navigation.vue');

export default {
  layout: 'default',
  components: {
    Navigation
  }
}
</script>
