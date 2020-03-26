<template>
  <section class="cards">

    <div class="shape" v-rellax="{speed: -5}"></div>
    <div class="shape shape--bottom" v-rellax="{speed: -2}"></div>

    <div class="container cards__content">
      <cards-wrapper
        v-for="planet in data"
        :key="planet.id"
        :allInfos="planet"
        :icon="planet.icon"
        :title="planet.nome"
        :distance="planet.distancia"
        :type="planet.type"
      />
    </div>
  </section>
</template>

<script>
import CardsWrapper from "@/components/molecules/CardsWrapper.vue";

export default {
  name: "cards",
  components: {
    CardsWrapper
  },
  props: ["data"]
};
</script>

<style scoped lang="scss">

  .shape {
    width: 14rem;
    height: 14rem;
    background-image: url('../../assets/shapes/shape.svg');
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    left: 6rem;
    top: 0;

    &--bottom {
      width: 24rem;
      height: 24rem;
      left: auto;
      right: 0;
      top: 38%;
    }
  }

  $mainClass: ".cards";

  #{$mainClass} {
    position: relative;
    padding: 10em 0 0 0;

    &__content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(290px, 420px));
      justify-content: center;
      gap: 8em 2em;
    }
  }
</style>