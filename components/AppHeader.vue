<template>
  <header>
    <div class="nav" :class="{ white: white }" ref="nav">
      <div class="nav__container" ref="container">
        <div class="nav__btns" ref="btns">
          <app-phone-contact />
          <app-instagram-profile />
          <app-color-mode />
          <app-burguer @click="drawerOn()" ref="burguer" />
        </div>
        <div itemscope itemtype="https://schema.org/Restaurant" class="logo">
          <app-logo ref="logo" />
        </div>
      </div>
    </div>
    <app-drawer ref="drawer" />
  </header>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AppMainNav from "./AppMainNav.vue";
import AppPhoneContact from "./AppPhoneContact.vue";
import AppInstagramProfile from "./AppInstagramProfile.vue";
import AppColorMode from "./AppColorMode.vue";
import AppBurguer from "./AppBurguer.vue";
import AppLogo from "./AppLogo.vue";

export default {
  props: {
    layout: {
      type: String,
    },
  },
  data: () => ({
    tl: gsap.timeline({
      paused: true,
      defaults: {
        ease: "power2.out",
      },
    }),
  }),
  components: {
    AppMainNav,
    AppPhoneContact,
    AppInstagramProfile,
    AppBurguer,
    AppColorMode,
    AppLogo,
  },
  methods: {
    drawerOn() {
      this.$refs.drawer.drawerIn();
    },
    navigation() {
      const { nav } = this.$refs;

      ScrollTrigger.create({
        start: "top+=200 top",
        end: 10000,
        toggleClass: {
          targets: nav,
          className: "scrolled",
        },
        onEnter: () => {
          this.tl.play();
          gsap.to(nav, { yPercent: "-100", duration: 0.25 });
          gsap.fromTo(
            nav,
            { yPercent: "-100" },
            { yPercent: "0", delay: "0.25" }
          );
          gsap.set(nav, { position: "fixed" });
        },
        onLeaveBack: () => {
          gsap.set(nav, { position: "absolute" });
        },
      });
    },
  },
  computed: {
    white() {
      return (
        this.$route.name === "prensa-slug" ||
        this.$route.name === "carta" ||
        this.$route.name === "index"
      );
    },
  },
  mounted() {
    this.$refs.logo.logoBoveda();
    this.navigation();
  },
};
</script>

<style lang="postcss" scoped>
.nav {
  @apply absolute
  top-0
  z-40
  h-16
  p-1
  w-screen
  flex
  justify-center
  md:h-auto
  md:py-5;

  & .nav__container {
    @apply relative
    z-40
    w-full
    h-full
    flex
    justify-center
    py-1
    md:flex-row-reverse
    md:items-center
    md:px-9
    md:max-w-6xl;

    & .nav__btns {
      @apply relative
      z-50
      w-full
      mx-auto
      h-full
      flex
      justify-around
      items-center
      md:h-auto
      md:w-8/12
      md:justify-end;

      & div {
        @apply md:mx-5;
      }

      & .instagram {
        @apply text-3xl;
      }
    }

    & .logo {
      @apply hidden
      h-2/3
      mx-auto
      md:flex
      md:justify-center
      md:items-center
      md:w-2/12
      lg:w-2/12
      xl:w-2/12;
    }
  }

  &.scrolled {
    @apply h-auto
    bg-gray-400
    bg-opacity-90
    backdrop-blur-sm
    p-0
    dark:bg-gray-800;

    & .nav__container {
      @apply md:flex-row-reverse
      py-1
      md:items-center
      md:w-11/12
      md:py-0
      md:px-0
      xl:w-9/12;

      & .nav__btns {
        @apply bg-transparent
        xl:w-4/12
        xl:justify-around
        xl:mr-0
        xl:ml-auto;

        & div {
          @apply mr-4;

          &:last-child {
            @apply mr-0;
          }
        }
      }

      & .logo {
        @apply xl:ml-0
        xl:py-1;
        & a {
          @apply block;
        }
      }
    }
  }
}

/* .white{
  @apply backdrop-blur-sm
   bg-[#50929f]/60
  bg-white
  ring-4
  ring-white/80
  ;
} */
</style>
