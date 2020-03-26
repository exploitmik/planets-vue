<template>
	<div class="cards__wrapper" v-rellax="{ speed: 1 }">
		<div class="cards__header">
			<figure class="cards__figure">
				<img :src="pathIcon" class="cards__image">
			</figure>
		</div>
		<div class="cards__body">
			<h1 class="cards__title">{{ title }}</h1>
			<div class="cards__body-info">
				<span>{{ distance }}</span>
				<span>{{ type }}</span>
			</div>
			<button
				@click="emitActionModal"
				class="cards__action"
				>Explorar
			</button>
		</div>
	</div>
</template>

<script>

	import { EventBus } from '@/EventBus';

	export default {
		name: 'CardsWrapper',
		props: ["icon", "title", "type", "distance", "allInfos"],
		computed: {
			pathIcon(){
				return require(`../../assets/planets/${this.icon}`);
			}
		},
		methods: {
			emitActionModal(){
				EventBus.$emit('actionModal', this.allInfos);
			}
		}
	}
</script>

<style scoped lang="scss">

	$mainClass: ".cards";

	#{$mainClass} {

		&__wrapper {
			box-shadow: var(--box-shadow);
			background-color: #fff;
			border-radius: var(--border-radius);
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
			position: relative;
			transition:
				box-shadow .4s ease-out,
				transform .4s ease-out;
			user-select: none;

			&:hover {
				box-shadow: var(--box-shadow-hover);
			}

			&:hover::before {
				content: '';
				height: 100%;
				width: 3px;
				display: block;
				background-image: linear-gradient(to bottom, var(--color-primary), var(--color-secondary));
				position: absolute;
				left: 0;
				animation: animeHover .5s ease-out;
			}

			&:nth-of-type(2n) #{$mainClass}__figure {
				animation-delay: 3s;
			}
		}

		&__figure {
			position: absolute;
			right: 1em;
			top: -4em;
			max-width: 120px;
			animation: yoyo 8s ease-in-out infinite;
		}

		&__image {
			display: block;
			width: 100%;
		}

		&__body {
			padding: 2em;
		}

		&__title {
			color: var(--text-color1);
			font-size: var(--font-md);
			display: flex;
			align-items: center;

			&::before {
				content: '';
				width: 1em;
				height: 3px;
				background-color: var(--color-primary);
				margin-right: .8em;
			}
		}

		&__body-info {
			margin-top: .5em;
			color: var(--text-color2);
			display: flex;
			font-size: var(--font-xs);

			& > * + * {
				margin-left: 2em;
			}

			& > *::before {
				content: '';
				width: 6px;
				height: 6px;
				display: inline-block;
				vertical-align: .2em;
				border-radius: 50%;
				background-color: var(--color-primary);
				margin-right: .8em;
			}
		}

		&__action {
			padding: .6em 3em;
			border: none;
			outline: none;
			font-size: var(--font-xs);
			font-weight: bold;
			background-image: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
			color: #fff;
			border-radius: var(--btn-border-radius);
			box-shadow: var(--box-shadow);
			cursor: pointer;
			display: block;
			margin-top: 2.5em;
			margin-left: auto;
			text-transform: uppercase;
			letter-spacing: .03em;
			transition: opacity .4s ease-out;

			&:hover {
				opacity: .8;
			}
		}
	}

	@keyframes animeHover {
		from {
			transform-origin: left;
			transform: scaleX(0);
		} to {
			transform: scaleX(1);
		}
	}

	@keyframes yoyo {
		0% {
			transform: translateY(0);
		} 50% {
			transform: translateY(-10px);
		} 100% {
			transform: translateY(0);
		}
	}
	
</style>