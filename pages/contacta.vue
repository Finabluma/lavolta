<template>
  <div v-if="!$apollo.loading" id="contacta">
    <app-header />
    <main>
      <div class="contact_content">
        <contacta-header :node="node" />
        <div class="mapa">
          <map-box-light />
        </div>
      </div>

      <app-aside layout="green">
        <!-- <SVGBarcaCorazon/> -->
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
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppAside from "~/components/AppAside.vue";
import AppFooter from "~/components/AppFooter.vue";
import AppHeader from "~/components/AppHeader.vue";
import ContactaHeader from "~/components/ContactaHeader.vue";
import SVGBarcaCorazon from "~/components/SVGBarcaCorazon.vue";
import MapBoxLight from "~/components/MapBoxLight.vue";
import NodeById from "~/graphql/nodeById";
import PrensaTeasers from "~/graphql/prensaTeaserQuery";

export default {
  components: { AppHeader, ContactaHeader, AppFooter, MapBoxLight, AppAside, SVGBarcaCorazon },
  apollo: {
    $loadingKey: "loading",
    node: {
      prefetch: true,
      query: NodeById,
      variables() {
        return { path: "contacta" };
      },
      update(data) {
        return data.route.entity;
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
  head() {
    return {
      title: "Contacta",
      link: [
        {
          rel: "stylesheet",
          href: "https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css",
        },
      ],
    };
  },
};
</script>
<style lang="postcss">
#contacta {
  @apply dark:bg-gray-700;
  & main {
    & .contact_content {
      @apply relative
      z-10
      pt-[10vh]
      sm:pt-[15vh]
      md:pt-[11vh]
      xl:pt-[11vh];

      & .mapa {
        @apply w-[95vw]
        h-[70vh]
        mx-auto
        shadow-md
        sm:w-[98vw]
        sm:h-[80vh]
        md:h-[70vh]
        md:w-[95vw]
        xl:w-[85vw];
      }

      & .inner-content {
        @apply absolute
        w-10/12
        flex
        flex-col
        left-4
        bottom-5
        p-3
        sm:left-6
        sm:bg-white/20
        sm:w-auto
        md:left-10
        md:bg-transparent
        xl:left-36
        xl:bottom-10
        2xl:left-40;

        & h1 {
          @apply font-dejanire
          text-6xl
          text-slate800
          content-after
          mb-5
          xl:text-8xl;

          &:after {
            @apply bg-slate800;
          }
        }

        & div {
          @apply pl-2 xl:pl-3;
          & p {
            @apply font-hero font-light text-slate800;
          }

          & a{
            @apply text-slate800
          }
        }
      }
    }
  }
}

#contacta #map .mapboxgl-ctrl-bottom-left {
  display: none !important;
  & .mapboxgl-ctrl-logo {
  }
}
</style>
