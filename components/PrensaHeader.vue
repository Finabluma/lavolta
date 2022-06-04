<template>
  <div class="hero-post" ref="hero">
    <div class="inner-hero" ref="inner">
      <div class="info-hero">
        <h1 itemprop="headline" ref="headline">
          {{ item.title }}
        </h1>
        <div class="meta-info" ref="meta">
          <ul>
            <li>
              <span
                itemprop="author"
                itemscope
                itemtype="http://schema.org/Person"
              >
                <span itemprop="name">{{ item.user.entity.name }}</span>
              </span>
            </li>
            <li>
              <time
                datetime="item.created"
                itemprop="dateCreated pubdate datePublished"
              >
                {{ moment(item.created).format("D MMM YY") }}
              </time>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <nuxt-picture
      v-if="item.mainimage"
      :src="item.mainimage.entity.field.img.url"
      :alt="item.mainimage.entity.field.alt"
      sizes="sm:100vw md:100vw lg:100vw"
    />
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
var moment = require("moment");
export default {
  props: ["item"],
  data: () => ({
    moment: moment,
    heroScroll: gsap.timeline({ paused: true }),
  }),
  methods: {
    hero() {
      const { hero, inner, headline, meta } = this.$refs;

      const tl = this.heroScroll;

      tl.to([headline, meta], {
        yPercent: "+=80",
        autoAlpha: 0,
        stagger: 0.2,
      });

      ScrollTrigger.create({
        trigger: hero,
        animation: tl,
        start: "top top",
        pin: inner,
        pinSpacing: false,
        scrub:1
      });
    },
  },
  mounted() {
    this.hero();
  },
};
</script>

<style lang="postcss" scoped>
.hero-post {
  @apply relative
  w-screen
  h-[30vh]
  content-before
  overflow-hidden
  sm:h-[45vh]
  md:h-[30vh]
  lg:h-[35vh]
  xl:h-[35vh];

  &:before {
    @apply absolute
    w-full
    h-full
    z-10
    top-0
    bg-gradient-to-b
  from-black/30
  to-black
    md:backdrop-blur-[1px]
    dark:to-gray-800;
  }

  & picture {
    @apply absolute
      w-full
      inset-0;
  }

  & .inner-hero {
    @apply absolute
    w-screen
    bottom-0
    left-0
    z-10
    flex
    justify-center
    items-center
    sm:py-2;

    & .info-hero {
      @apply w-10/12
      mx-auto
      flex
      flex-col
      items-start
      justify-center
      sm:w-10/12
      lg:w-8/12
      xl:w-7/12
      2xl:w-6/12;

      & h1 {
        @apply font-hero
        font-light
        text-3xl
        text-white/90
        content-after
        mb-2
        sm:text-4xl
        xl:text-6xl
        dark:text-gray-300;

        &:after {
          @apply bg-white/90 dark:bg-gray-300;
        }
      }

      & .meta-info {
        @apply text-white/90
        py-2
        dark:text-gray-300;

        & ul {
          @apply flex
          text-xs
          font-hero;

          & li {
            @apply flex items-center;
          }

          & li:first-child {
            @apply content-after;

            &:after {
              @apply bg-white/75 dark:bg-gray-300;
            }
          }
        }
      }
    }
  }
}
</style>
