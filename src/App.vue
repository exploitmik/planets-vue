<template>
  <div id="app">

		<!-- <hero/> -->
  	<modal/>
  	<cards :data="planets" />

  </div>
</template>

<script>
	
	import Hero from '@/components/organisms/Hero.vue';
	import Modal from '@/components/organisms/Modal.vue';
	import Cards from '@/components/organisms/Cards.vue';

	import { mapState } from 'vuex';

	export default {
		name: 'app',
		components: {
			Hero,
			Modal,
			Cards
		},
		computed: {
			...mapState(["planets"])
		}
	}
</script>

<style lang="scss">
	@import 'sass/main.scss';
</style>