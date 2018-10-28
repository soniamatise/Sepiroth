<template>
	<header class="header">
		<nuxt-link to="/">
			<div class="logo column" :style="``">Sepiroth</div>
		</nuxt-link>
		
		<nav class="nav top-nav">
			<ul class="menu__list" v-for="item in menuitems" :key="item.id">
				<li class="menu__item">
					<nuxt-link
						:to="item.object_slug"
						class="menu__link">
						{{ item.title }}
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
			menuitems: [],
		}
	},
	mounted(){
		let self = this;
		axios.get(apiDomain + '/wp-api-menus/v2/menus/2').then(result => {
			let menuAll = result.data.items;
			menuAll.forEach(element => {
				self.menuitems.push(element);
			});
		});
	}
};
</script>
