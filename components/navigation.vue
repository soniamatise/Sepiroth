<template>
	<header class="header">
		<nuxt-link to="/">
			<div class="logo column" :style="``"></div>
		</nuxt-link>
		
		<nav class="nav top-nav">
			<ul class="menu__list">
				<li class="menu__item">
					<nuxt-link
						to="/"
						class="menu__link">
					</nuxt-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
const axios = require('axios');
// const apiDomain = process.env.apiDomain;

export default {
	components: {
		
	},
	data() {
		return {
		};
	},
	head() {
		return {

		};
	}
};
</script>
