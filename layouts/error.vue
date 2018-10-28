<template>
	<section class="error">
		<h1 v-if="error.statusCode === 404">404 - Oops! Deze pagina bestaat (nog) niet!</h1>
		<h1 v-else>{{error.statusCode}} - Helaas is er iets fout gegaan.</h1>
		<div class="error-page__body">
			
		</div>
		<div style="display: none;">{{ error.message }}</div>
	</section>
</template>

<script>
export default {
	props: ['error'],
	layout: 'default',
};
</script>