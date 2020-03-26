<template>
	<section class="hero">
		<div class="container hero__content">
			<h1 class="hero__title">Planets <span class="hero__mark">Vue</span></h1>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Hero'
	}
</script>

<style scoped lang="scss">

	$mainClass: ".hero";

	#{$mainClass} {
		height: 70vh;
		width: 100%;

		&__content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100%;
		}

		&__title {
			font-size: var(--font-xlg);
			max-width: 400px;
			text-align: center;
			line-height: 1;
			color: orange;
		}

		&__mark {
			font-size: 140%;
		}
		
	}
	
</style>