<template>
  <div v-if="!$apollo.loading" id="carta">
    <app-header />
    <main>
      <div class="hero" ref="hero">
        <div class="title" ref="title">
          <h1 class="sr-only">La Carta</h1>
          <SVGCarta />
        </div>
        <svg
          viewBox="0 0 1366 74.28"
          class="is-divider"
          preserveAspectRatio="xMidYMin slice"
        >
          <path d="M0 0v74.28h1366V0s-279.5 60-683 60S0 0 0 0Z" />
        </svg>
      </div>
      <div class="relative z-30 bg-gray-300 dark:bg-gray-700">
        <div class="carta">
          <section id="platos">
            <h2>platos</h2>
            <div v-html="node.body.value" class="notas"></div>
            <div class="carta-items">
              <carta-restaurante :items="mar">
                <h3>Del mar</h3>
              </carta-restaurante>
              <carta-restaurante :items="tierra">
                <h3>De la tierra</h3>
              </carta-restaurante>
              <carta-restaurante :items="carpaccio">
                <h3>Carpaccios</h3>
              </carta-restaurante>
              <carta-restaurante :items="postre">
                <h3>Postres</h3>
              </carta-restaurante>
            </div>
          </section>
          <section id="bebidas">
            <h2>vinos & cavas</h2>
            <div class="carta-items">
              <carta-restaurante :items="tinto">
                <h3>Tintos</h3>
              </carta-restaurante>
              <carta-restaurante :items="blanco">
                <h3>Blancos</h3>
              </carta-restaurante>
              <carta-restaurante :items="rosado">
                <h3>Rosados</h3>
              </carta-restaurante>
              <carta-restaurante :items="cava">
                <h3>Cavas</h3>
              </carta-restaurante>
            </div>
          </section>
        </div>
        <app-aside layout="green">
          <h2 class="sr-only">Y mientras esperas ...</h2>
          <prensa-teaser
            :teasers="teasers"
            title="Prensa"
            subtitle="así vemos las cosas"
            size="xs:32px"
            layout="aside"
          >
          </prensa-teaser>
          <app-button
            to="prensa"
            title="Articulos de Prensa"
            variant="primary"
            size="small"
            >Más articulos</app-button
          >
        </app-aside>
      </div>
    </main>
    <app-footer />
  </div>
</template>

<script>
import CartaRestaurante from "~/components/CartaRestaurante.vue";
import SVGCarta from "~/components/SVGCarta.vue";
import AppFooter from "~/components/AppFooter.vue";
import AppHeader from "~/components/AppHeader.vue";
import AppAside from "~/components/AppAside.vue";
import PlatosCarta from "~/graphql/cartaPlatosQuery";
import BebidasCarta from "~/graphql/cartaBebidasQuery";
import NodeById from "~/graphql/nodeById";
import PrensaTeasers from "~/graphql/prensaTeaserQuery";

export default {
  name: "Home",
  components: {
    CartaRestaurante,
    SVGCarta,
    AppFooter,
    AppHeader,
    AppAside,
  },
  apollo: {
    $loadingKey: "loading",
    node: {
      prefetch: true,
      query: NodeById,
      variables() {
        return { path: "carta" };
      },
      update(data) {
        return data.route.entity;
      },
    },
    mar: {
      query: PlatosCarta,
      variables() {
        return {
          limit: 40,
          filter: {
            conditions: [
              { field: "type", operator: "EQUAL", value: "platos_carta" },
              { field: "status", operator: "EQUAL", value: "1" },
              { field: "field_tipo_plato", operator: "EQUAL", value: "mar" },
            ],
          },
          sort: [{ field: "field_precio", direction: "DESC" }],
        };
      },
      update(data) {
        return data.node.bundle;
      },
    },
    tierra: {
      query: PlatosCarta,
      variables() {
        return {
          limit: 40,
          filter: {
            conditions: [
              { field: "type", operator: "EQUAL", value: "platos_carta" },
              { field: "status", operator: "EQUAL", value: "1" },
              { field: "field_tipo_plato", operator: "EQUAL", value: "tierra" },
            ],
          },
          sort: [{ field: "field_precio", direction: "DESC" }],
        };
      },
      update(data) {
        return data.node.bundle;
      },
    },
    carpaccio: {
      query: PlatosCarta,
      variables() {
        return {
          limit: 10,
          filter: {
            conditions: [
              { field: "type", operator: "EQUAL", value: "platos_carta" },
              { field: "status", operator: "EQUAL", value: "1" },
              {
                field: "field_tipo_plato",
                operator: "EQUAL",
                value: "carpaccio",
              },
            ],
          },
          sort: [{ field: "field_precio", direction: "DESC" }],
        };
      },
      update(data) {
        return data.node.bundle;
      },
    },
    postre: {
      query: PlatosCarta,
      variables() {
        return {
          limit: 10,
          filter: {
            conditions: [
              { field: "type", operator: "EQUAL", value: "platos_carta" },
              { field: "status", operator: "EQUAL", value: "1" },
              { field: "field_tipo_plato", operator: "EQUAL", value: "postre" },
            ],
          },
          sort: [{ field: "field_precio", direction: "DESC" }],
        };
      },
      update(data) {
        return data.node.bundle;
      },
    },
    tinto: {
      query: BebidasCarta,
      variables() {
        return {
          limit: 30,
          filter: {
            conditions: [
              { field: "type", operator: "EQUAL", value: "vinos_carta" },
              { field: "status", operator: "EQUAL", value: "1" },
              { field: "field_bebida", operator: "EQUAL", value: "tinto" },
            ],
          },
          sort: [{ field: "field_precio", direction: "DESC" }],
        };
      },
      update(data) {
        return data.node.bundle;
      },
    },
    blanco: {
      query: BebidasCarta,
      variables() {
        return {
          limit: 30,
          filter: {
            conditions: [
              { field: "type", operator: "EQUAL", value: "vinos_carta" },
              { field: "status", operator: "EQUAL", value: "1" },
              { field: "field_bebida", operator: "EQUAL", value: "blanco" },
            ],
          },
          sort: [{ field: "field_precio", direction: "DESC" }],
        };
      },
      update(data) {
        return data.node.bundle;
      },
    },
    rosado: {
      query: BebidasCarta,
      variables() {
        return {
          limit: 30,
          filter: {
            conditions: [
              { field: "type", operator: "EQUAL", value: "vinos_carta" },
              { field: "status", operator: "EQUAL", value: "1" },
              { field: "field_bebida", operator: "EQUAL", value: "rosado" },
            ],
          },
          sort: [{ field: "field_precio", direction: "DESC" }],
        };
      },
      update(data) {
        return data.node.bundle;
      },
    },
    cava: {
      query: BebidasCarta,
      variables() {
        return {
          limit: 30,
          filter: {
            conditions: [
              { field: "type", operator: "EQUAL", value: "vinos_carta" },
              { field: "status", operator: "EQUAL", value: "1" },
              { field: "field_bebida", operator: "EQUAL", value: "cava" },
            ],
          },
          sort: [{ field: "field_precio", direction: "DESC" }],
        };
      },
      update(data) {
        return data.node.bundle;
      },
    },
    teasers: {
      query: PrensaTeasers,
      variables() {
        return {
          slug: this.$route.params.slug,
          limit: 2,
          filter: {
            conditions: [
              { field: "status", operator: "EQUAL", value: ["1"] },
              // { field: 'promote', operator: 'EQUAL', value: ['1'] },
              { field: "type", operator: "EQUAL", value: ["prensa"] },
            ],
          },
        };
      },
      update(data) {
        return data.nodeQuery.entities;
      },
    },
  },
};
</script>

<style lang="postcss">
#carta {
  @apply bg-gray-300 dark:bg-gray-700;
  & .hero {
    @apply relative
    w-screen
    h-[25vh]
    bg-azulejos
    bg-cover
    content-after
    sm:h-[300px]
    md:h-[400px]
    xl:h-[480px];

    &:after {
      @apply absolute
      z-auto
      h-full
      w-full
      backdrop-contrast-75
      bg-gradient-to-b
      from-black/40
      to-slate800
      dark:to-gray-800;
    }

    & .is-divider {
      @apply w-screen
      absolute
      z-20
      -bottom-1
      left-0
      fill-[#d1d5db]
      dark:fill-[#374151];
    }

    & .title {
      @apply absolute
      z-20
      h-full
      w-full
      px-3
      flex
      items-center
      pt-5
      sm:px-10
      md:px-20
      md:pb-0
      lg:px-52
      xl:pb-5
      xl:px-60;
    }
  }

  & .carta {
    @apply w-11/12
    mx-auto
    pt-6
    md:w-10/12
    lg:w-8/12
    xl:w-7/12;

    & h2 {
      @apply content-after
        capitalize
        leading-tight
        font-rooney
        text-6xl
        mb-8
        xl:text-8xl;

      &:after {
        @apply lg:ml-0;
      }
    }

    & .notas {
      @apply mb-5
        font-hero
        font-light
        text-paragraph
        leading-7
        md:w-11/12
        lg:w-9/12
        2xl:w-6/12;
    }

    & .carta-items {
      @apply mb-10;
    }
  }
}
</style>
