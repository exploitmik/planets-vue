<template>
	<transition>
	<div v-show="isModalActive" class="modal-bg" tabindex="0">
		<dialog ref="modal" class="modal">
			<svg class="modal__wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#f4f4f4" fill-opacity="1" d="M0,128L80,149.3C160,171,320,213,480,213.3C640,213,800,171,960,154.7C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
			<button ref="btnClose" class="modal__close" aria-label="fechar" @click.stop="closeModal">
				<span class="modal__close-arrow"></span>
			</button>
			<div class="modal__content">
				<div ref="wrapper" class="modal__wrapper">
					<div class="modal__header">
						<p class="modal__title">{{ selectedPlanet.nome }}</p>
					</div>
					<div ref="modalBody" class="modal__body">
						<modal-info-card
							icon="001-road.svg"
							description="Distância do Sol"
							:info="selectedPlanet.distancia"
						/>
						<modal-info-card
							icon="002-size.svg"
							description="Diâmetro"
							:info="selectedPlanet.diametro"
						/>
						<modal-info-card
							icon="006-orbit.svg"
							description="Satélites naturais"
							:info="selectedPlanet.satelites"
						/>
						<modal-info-card
							icon="007-orbit-2.svg"
							description="Período de órbita"
							:info="selectedPlanet.periodo_orbita"
						/>
						<modal-info-card
							icon="004-sunset.svg"
							description="Duração do dia"
							:info="selectedPlanet.duracao_dia"
						/>
						<modal-info-card
							icon="003-thermometer.svg"
							description="Temperatura de superfície"
							:info="selectedPlanet.temperatura"
						/>
					</div>
				</div>
			</div>
		</dialog>
	</div>
	</transition>
</template>

<script>

	import ModalInfoCard from '@/components/molecules/ModalInfoCard.vue';

	import { EventBus } from '@/EventBus';
	import gsap from 'gsap';

	export default {
		name: 'modal',
		components: {
			ModalInfoCard
		},
		data: () => ({
			selectedPlanet: null,
			isModalActive: false,
		}),
		methods: {
			closeModal(){
				this.isModalActive = false;
				this.$refs.wrapper.scrollTop = 0;
				setTimeout( () => document.documentElement.classList.remove('no-scroll'), 200);
			},
			animeModal(){
				const t = gsap.timeline();

					t.from(this.$refs.modal, {
						duration: 1.2,
						yPercent: 100,
						opacity: 0,
						ease: "expo.out"
					}).from([...this.$refs.modalBody.children], {
						duration: .4,
						y: 100,
						opacity: 0,
						stagger: .1,
						ease: "expo.out"
					}, "-=1.2").from(this.$refs.btnClose, {
						duration: 1,
						scale: .6,
					}, "-=.6");

			}
		},
		created(){
			this.selectedPlanet = this.$store.state.planets[0];
		},
		mounted(){
			EventBus.$on('actionModal', (r) => {
				this.selectedPlanet = r;
				this.isModalActive = true;
				this.animeModal();
				document.documentElement.classList.add('no-scroll');
			})
		}
	}
</script>

<style scoped lang="scss">

	.v-enter-active, .v-leave-active {
	  transition: opacity .2s;
	}

	.v-enter {
		opacity: .4;
	}

	.v-leave-to {
	  opacity: 0;
	}

	$mainClass: '.modal';

	#{$mainClass}-bg {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		background-color: rgba(0,0,0, .8);
		display: block;
		width: 100%;
		height: 100%;
		z-index: 100;
		outline: none;
	}

	#{$mainClass} {
		position: relative;
		left: 0;
		right: 0;
		background-color: #f4f4f4;
		display: block;
		width: 100%;
		height: 100%;
		top: 6rem;
		border: none;
		outline: none;

		@media (max-width: 1119px){
			top: 5rem;
		}

		&__wave {
			position: absolute;
			left: 0;
			bottom: 99%;
			width: 100%;
		}

		&__wrapper {
			position: relative;
			overflow-y: scroll;
			-webkit-overflow-scrolling: touch;
			height: 100vh;
			padding: 3rem 1rem 12rem 1rem;
			max-width: 1200px;
			margin: 0 auto;
			width: 100%;
			user-select: none;

			&::-webkit-scrollbar {
				width: 0;
			}

			&::before {
				content: '';
				position: fixed;
				left: 0;
				right: 0;
				top: .9rem;
				width: 100%;
				height: 4rem;
				display: block;
				background-image: linear-gradient(to bottom, #f4f4f4, transparent);	
				z-index: 10;
			}
		}

		&__body {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			justify-content: center;
			gap: 3em;
			padding-top: 4em;
		}

		&__title {
			font-size: var(--font-xlg);
			color: var(--text-color1);
			font-weight: bold;
			display: flex;
			align-items: center;
			line-height: 1;
			justify-content: center;

			&::before, &::after{
				content: '';
				height: 3px;
				flex-basis: 1.5em;
				background-image: linear-gradient(to right,
					var(--color-secondary) 12.5%,
					transparent 12.5%,
					transparent 25%,
					var(--color-secondary) 25%,
					var(--color-secondary) 37.5%,
					transparent 37.5%,
					transparent 50%,
					var(--color-secondary) 50%,
					var(--color-secondary) 80%,
					transparent 80%,
					transparent 90%,
					var(--color-secondary) 90%
				);
				margin: 0 .3em;

				@media (max-width: 968px) {
					display: none;
				}
			}

			&::after {
				transform: scaleX(-1);
			}
		}

		&__close {
			all: unset;
			width: 2.5rem;
			height: 2.5rem;
			background-image: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
			border-radius: 50%;
			cursor: pointer;
			outline: none;
			position: absolute;
			right: 2rem;
			top: -3rem;
			box-shadow: var(--box-shadow);
			display: flex;
			align-items: center;
			justify-content: center;
			transition: opacity .4s ease-out;
			z-index: 20;

			&:hover {
				opacity: .8;
			}
		}

		&__close-arrow {
			margin-top: .2em;

			&::before, &::after {
				content: '';
				width: .8rem;
				height: .15rem;
				display: block;
				background-color: #f1f1f1;
				transform: rotate(45deg);
			}

			&::after {
				transform: translateY(-.15rem) rotate(-45deg);
			}
		}
	}
</style>