<template>
	<header class="header">
		<nuxt-link to="/">
			<div class="logo column" :style="``"></div>
		</nuxt-link>
		
		<nav class="nav top-nav">
			<ul class="menu__list" v-for="item in items" :key="item.id">
				<li class="menu__item">
					<nuxt-link
						:to="item.slug"
						class="menu__link">
						{{ item.title.rendered }}
					</nuxt-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
const axios = require('axios');
const apiDomain = process.env.apiDomain;

export default {
	data(){
		return {
			items: [],
		}
	},
	components: {
		
	},
	mounted(){
		let self = this;
		axios.get(apiDomain + '/wp/v2/pages').then(result => {
			let pagesAll = result.data;
			pagesAll.forEach(element => {
				self.items.push(element);
			});
		});
	}
};
</script>
