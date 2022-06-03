<template>
  <div v-if="!$apollo.loading" id="reservas">
    <app-header />
    <main>
      <div class="hero">
        <div class="content">
          <div class="content-inner">
            <h1>{{ node.title }}</h1>
            <p class="lead">
              ¿Quieres asegurarte una mesa? ¡Llámanos! Haremos lo posible por
              darte el sitio que mereces. No olvides leer las condiciones
              sujetas a las constelaciones :)
            </p>
          </div>
          <SVGCallNow ref="call" />
        </div>
        <SVGUniverse />
      </div>
      <app-aside layout="gray">
        <h2 class="sr-only">Condiciones sujetas a reservas</h2>
        <reservas-condiciones :conditions="conditions">
          <h2>{{ bloqueId.title }}</h2>
        </reservas-condiciones>
        <section>
          <h2>¿Qué comer?</h2>
          <p>
            Abre el apetito echando un vistazo a lo que podemos ofrecer. En
            nuestra cocina encontrarás una gran variedad de productos que
            esperamos sean de tu agrado. Bienvenid@ a nuestro hogar ;)
          </p>
          <app-button to="carta" title="La Carta" variant="primary" size="small"
            >la carta</app-button
          >
        </section>
      </app-aside>
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "~/components/AppFooter.vue";
import AppHeader from "~/components/AppHeader.vue";
import SVGUniverse from "~/components/SVGUniverse.vue";
import SVGCallNow from "~/components/SVGCallNow.vue";
import ReservasCondiciones from "~/components/ReservasCondiciones.vue";

import NodeById from "~/graphql/nodeById";
import BlockById from "~/graphql/blockById";
import ParagraphsCondtions from "~/graphql/ParagraphsConditions";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default {
  data: () => ({
    tlCall: gsap.timeline({
      defaults: {
        duration: 0.5,
      },
    }),
  }),
  components: {
    AppFooter,
    AppHeader,
    SVGUniverse,
    SVGCallNow,
    ReservasCondiciones,
  },
  apollo: {
    $loadingKey: "loading",
    node: {
      prefetch: true,
      query: NodeById,
      variables() {
        return { path: "reservas" };
      },
      update(data) {
        return data.route.entity;
      },
    },
    conditions: {
      prefetch: true,
      query: ParagraphsCondtions,
      variables() {
        return {
          filter: {
            conditions: [
              { field: "type", operator: "EQUAL", value: "condiciones" },
              { field: "status", operator: "EQUAL", value: "1" },
            ],
          },
        };
      },
      update(data) {
        return data.paragraphQuery.entities;
      },
    },
    bloqueId: {
      prefetch: true,
      query: BlockById,
      variables() {
        return { id: "2" };
      },
      update(data) {
        return data.blockContentById;
      },
    },
  },
  methods: {
    badge() {
      gsap.registerPlugin(ScrollTrigger);
      const { letters, ring, bruja, ring1, ring2, ring3 } =
        this.$refs.call.$refs;

      console.log(this.$refs.call.$refs);

      const tlScroll = this.tlCall;

      tlScroll
        .add("rings")
        .to(ring1, {
          y: "+=30",
          autoAlpha: 0.2,
        })
        .to(
          ring2,
          {
            y: "+=40",
            fill: "black",
            fillOpacity: 0.4,
          },
          "rings+=0.2"
        )
        .to(
          ring3,
          {
            y: "+=50",
            stroke: "white",
            strokeWidth: "5",
            strokeOpacity: 0.2,
            fillOpacity: 0.9,
            drawSVG: "50% 0",
          },
          "rings+=0.2"
        )
        .to(
          letters,
          {
            y: "+=50",
            fillOpacity: 0.8,
          },
          "rings+=0.2"
        );

      ScrollTrigger.create({
        trigger: ".hero",
        animation: tlScroll,
        start: "center center-20%",
        end: "bottom top+=10%",
        scrub: 1,
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "18px",
        //   indent: "20",
        // },
      });
    },
  },
  mounted() {
    this.$refs.call.badgeOn();
    this.badge();
  },
};
</script>

<style lang="postcss">
#reservas {
  @apply bg-gradient-to-b
    from-white/30
    via-gray-200
    to-gray-300
    dark:bg-none
    dark:bg-gray-700;

  & main {
    & .hero {
      @apply relative
      w-screen
      h-auto
      overflow-x-hidden
      flex
      justify-center
      pb-10
      md:h-full
      lg:min-h-[80vh]
      xl:min-h-[70vh];

      & .content {
        @apply relative
        z-30
        w-10/12
        mt-16
        md:w-10/12
        md:mt-32
        lg:w-9/12
        lg:mt-32
        xl:w-8/12
        2xl:w-7/12;

        & .content-inner {
          @apply max-w-xs
          mb-5
          sm:mb-10
          lg:ml-0;

          & h1 {
            @apply font-dejanire
            text-5xl
            content-after
            mb-5
            lg:text-7xl
            lg:text-left;

            &:after {
              lg: ml-0;
            }
          }

          & .lead {
            @apply font-hero
            font-light
            text-paragraph;
          }
        }
      }
    }

    & section:last-of-type {
      @apply pt-5
      w-full
      mx-auto
      flex
      flex-col
      justify-center
      items-center
      sm:w-9/12
      md:w-8/12
      lg:w-6/12
      2xl:px-10;

      & h2,
      & p {
        @apply px-2;
      }
      & h2 {
        @apply text-altheader font-dejanire content-after mb-5;

        &:after {
          @apply mx-auto;
        }
      }

      & p {
        @apply font-hero font-light text-paragraph mb-5 text-center;
      }
    }
  }
}
</style>
