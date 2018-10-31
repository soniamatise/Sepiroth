<template>
	<footer class="footer">
		<p>© 2018 Copyright - Sepiroth - All Rights Reserved.</p>
		<div class="socials">
			 <ul class="social-icons">
				<li><a target="_blank" href="https://www.facebook.com/sepirothnl/" class="social-icon"> <i class="fa fa-facebook"></i></a></li>
				<li><a target="_blank" href="https://www.instagram.com/sepirothdeathmetal/" class="social-icon"> <i class="fa fa-instagram"></i></a></li>
				<li><a target="_blank" href="https://www.youtube.com/channel/UCy2PtzcuE4RjLkfnC-CFzUA" class="social-icon"> <i class="fa fa-youtube"></i></a></li>
				<li><a target="_blank" href="https://sepiroth.bandcamp.com/" class="social-icon"> <i class="fa fa-bandcamp"></i></a></li>
				<li><a target="_blank" href="https://open.spotify.com/artist/5NxUeDwyCm8aQGsDGZpI0p" class="social-icon"> <i class="fa fa-spotify"></i></a></li>
			 </ul>
		</div>
	</footer>
</template>

<script>
export default {

};
</script>

<style lang="scss">
@import './assets/scss/variables/index';

.footer {
	text-align: center;

	ul {
		padding:0;
		list-style: none;
	}
	.socials {
		width: 350px;
		display:block;
		margin: 0 auto;
		font-size: 30px !important;
		@include respond-to($phone) {
			width: 100%;
		}
	}
	.social-icon {
		color: $white;
		opacity: 1;
		transition: color 250ms ease;
		&:hover {
			color: #5c849b;
		}
	}
	ul.social-icons {
		margin-top: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		li {
			vertical-align: top;
			display: inline;
			height: 100px;
		}
		a {
			text-decoration: none;
		}
	}
}


</style>

