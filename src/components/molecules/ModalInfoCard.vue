<template>
	<div class="modal__info">
		<figure class="modal__info-figure">
			<img :src="pathIcon" class="modal__info-image">
		</figure>
		<p class="modal__info-description">{{ description }}</p>
		<p class="modal__info-title">{{ info }}</p>
	</div>
</template>

<script>
	export default {
		name: 'ModalInfoCard',
		props: ["icon", "description", "info"],
		computed: {
			pathIcon(){
				return require(`../../assets/icons/${this.icon}`);
			}
		}
	}
</script>

<style scoped lang="scss">

	$mainClass: '.modal';

	#{$mainClass} {
		&__info {
			user-select: none;
			background-color: #fff;
			box-shadow: var(--box-shadow);
			border-radius: var(--border-radius);
			padding: 1em;
			position: relative;
			overflow: hidden;
			transition:
				box-shadow .4s ease-out,
				transform .4s ease-out;
			will-change: box-shadow, transform;

			&:hover {
				box-shadow: var(--box-shadow-hover);
			}

			&:hover #{$mainClass}__info-figure::before {
				transform: scale(1.2);
			}
		}

		&__info-title {
			font-size: var(--font-md);
			color: var(--text-color1);
			font-weight: bold;
		}

		&__info-description {
			font-size: .6rem;
			color: var(--text-color2);
			text-transform: uppercase;
			letter-spacing: .03em;
			font-weight: 500;
			display: flex;
			align-items: center;

			&::before {
				content: '';
				width: 6px;
				height: 6px;
				border-radius: 50%;
				background-image: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
				margin-right: .8em;
			}
		}

		&__info-figure {
			max-width: 62px;
			position: relative;
			z-index: 10;
			margin-bottom: 1.5em;
			will-change: transform;

			&::before {
				content: '';
				width: 100px;
				height: 100px;
				display: block;
				border-radius: 50%;
				background-image: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
				opacity: .4;
				position: absolute;
				z-index: -10;
				top: -2em;
				left: -2em;
				transition: transform .4s ease-out;
			}
		}

		&__info-image {
			display: block;
			width: 100%;
		}
	}
</style>