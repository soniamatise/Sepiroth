<template>
	<header class="header">
		<nuxt-link to="/">
			<div class="logo" :style="`background-image: url(${logo})`"></div>
		</nuxt-link>
		
		<nav class="nav">
			<ul class="menu__list">
				<li class="menu__item" v-for="item in menuitems" :key="item.id">
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
			logo: require('~/assets/img/sepiroth.png'),
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

<style lang="scss">
@import './assets/scss/variables/index';


.header {
	.logo {
		height: 100px;
		width: 100%;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: contain;
		margin: 30px 0 20px;
	}
	.nav {
		width: 80%;
		margin: 0 auto 60px;
		.menu {
			&__list {
				margin:0;
				padding: 0;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				text-align: center;
			}
			&__link {
				text-transform: uppercase;
				font-weight: 400;	
				position: relative;
				
				&:before {
					content: '';
					position: absolute;
					bottom: -2px;
					left:0;
					width: 0%;
					background-color: $blue;
					transition: width 300ms ease;
					height: 1px;
				}
				&:hover {
					&:before {
						width: 90%;
						background-color: $blue;
					}
				}
				&--active {
					&:before {
						width: 90%;
						background-color: $white;
					}
				}			
			}
		}
	}
}
</style>
