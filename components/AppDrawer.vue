<template>
  <div id="drawer" ref="drawerblock" @click="drawerOut()">
    <app-close @click="drawerOut()" id="close" />
    <div class="drawer" ref="innerdrawer">
      <app-main-nav aria-label="Main" navName="Navegación principal"/>
      <div class="bottom">
        <!-- <app-logo class="fav" /> -->
        <p class="text text-xs sm:text-xs mb-3 font-hero font-light">
          c / Via Augusta 14, Altafulla, 43893
        </p>
        <app-phone-contact />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import AppMainNav from "./AppMainNav.vue";
import AppLogo from "./AppLogo.vue";
import AppClose from "./AppClose.vue";

export default {
  data() {
    return {
      drawertl: gsap.timeline({
        paused: true,
        onReverseComplete: () => {
          gsap.set("#drawer", { clearProps: "all" });
        },
      }),
    };
  },
  components: { AppMainNav, AppLogo, AppClose },
  methods: {
    drawer() {
      const tl = this.drawertl;
      const { drawerblock, innerdrawer } = this.$refs;
      const navigation = gsap.utils.toArray(".drawer ul li");

      tl.add("nav")
        .set(drawerblock, {
          visibility: "visible",
          yPercent: "-5",
          autoAlpha: 0,
        })
        .to(
          drawerblock,
          {
            duration: 0.25,
            autoAlpha: 1,
            yPercent: "0",
            ease: "none",
          },
          "nav"
        )
        .from(
          innerdrawer,
          {
            autoAlpha: 0,
            yPercent: "-20",
          },
          "nav+=0.1"
        )
        .from(
          navigation,
          {
            autoAlpha: 0,
            yPercent: "-=10",
            stagger: 0.15,
            ease: "power3.in",
          },
          "nav+=0.1"
        )
        .from(
          [".fav", ".text", ".tel"],
          {
            autoAlpha: 0,
            yPercent: "-=20",
            stagger: 0.1,
            ease: "power.inOut",
          },
          "nav"
        );
    },
    drawerIn() {
      this.drawertl.play();
    },
    drawerOut() {
      this.drawertl.reverse();
    },
  },
  mounted() {
    this.drawer();
  },
};
</script>

<style lang="postcss" scoped>
#drawer {
  @apply fixed
  bg-fixed
  z-50
  inset-0
  w-screen
  h-screen
  flex
  justify-center
  items-center
  bg-gradient-radial
  from-gray-300
  to-gray-400
  backdrop-blur-sm
  invisible
  dark:from-gray-700
  dark:to-gray-800
  dark:bg-opacity-95;

  & #close {
    @apply absolute
      top-5
      right-2
      z-50
      lg:right-10;
  }

  & .drawer {
    @apply h-5/6
    pt-0
    pb-10
    flex
    flex-col
    items-center;

    & .bottom {
      @apply mt-auto
      flex
      flex-col
      items-center;

      & p {
        @apply mb-3;
      }
    }
  }
}
</style>
