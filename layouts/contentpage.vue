<template>
	<section class="">
		<navigation></navigation>
		<div class="">
			<slot></slot>
		</div>
	</section>
</template>

<script>
const Navigation = () => import('~/components/navigation.vue');
export default {
	props: ['error'],
	layout: 'default',
	components: {
		Navigation
	}
};
</script>

<style lang="scss" scoped>
</style>