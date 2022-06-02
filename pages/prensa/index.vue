<template>
  <div v-if="!$apollo.loading" id="prensa">
    <app-header />
    <main>
      <h1 class="sr-only">Prensa</h1>
      <prensa-teaser
        :teasers="teasers"
        title="Prensa"
        subtitle="así vemos las cosas"
        size="xs:32px"
      >
      </prensa-teaser>
      <app-aside layout="green">
        <h2>¿Te apetece comer algo?</h2>
        <p>
          Tanto en nuestra cocina como en nuestra oferta de vinos encontrarás
          una variedad de productos que esperamos sean de tu agrado. Te
          inivitamos a consultar nuestra carta. No dudes en preguntarnos en caso
          de duda. Bienvenid@ :)
        </p>
        <app-button to="carta" title="La Carta" variant="primary" size="small"
          >la carta</app-button
        >
      </app-aside>
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import AppIconHome from "~/components/AppIconHome.vue";
import SVGMarieta from "~/components/SVGMarieta.vue";
import PrensaTeaser from "~/components/PrensaTeaser.vue";
import AppFooter from "~/components/AppFooter.vue";
import PrensaTeasers from "~/graphql/prensaTeaserQuery";
import AppButton from "~/components/AppButton.vue";

export default {
  name: "prensablog",
  components: {
    PrensaTeaser,
    AppHeader,
    AppIconHome,
    SVGMarieta,
    AppFooter,
    AppButton,
  },
  apollo: {
    $loadingKey: "loading",
    teasers: {
      query: PrensaTeasers,
      variables() {
        return {
          slug: this.$route.params.slug,
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
#prensa {
  @apply bg-gray-300 dark:bg-gray-700;

  & aside .inner {
    @apply flex
    flex-col
    justify-center
    items-center;

    &:before {
      @apply mb-10;
    }

    &:after {
      @apply mt-2;
    }

    & h2,
    & p {
      @apply px-2
      mx-auto
      sm:w-10/12
      md:w-10/12
      lg:w-9/12
      xl:w-10/12;
    }
    & h2 {
      @apply text-altheader font-dejanire content-after text-center mb-5;

      &:after {
        @apply block
          w-10
          h-1
          mx-auto
        bg-slate800
          dark:bg-gray-300;
      }
    }

    & p {
      @apply font-hero font-light text-paragraph mb-5 text-center;
    }
  }
}
</style>
