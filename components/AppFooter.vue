<template>
  <footer class="footer">
    <div class="container">
      <div class="inner-top">
        <app-logo />
        <app-main-nav aria-label="Footer" navName="Navegación footer" />
      </div>
      <div class="inner-bottom">
        <p>
          c / Via Augusta 14, Altafulla, 43893
          <span><a href="tel:0034977651416">tel. 977651416</a></span>
          <span
            ><a
              itemprop="sameAs"
              href="https://instagram.com/la.volta"
              title="La Volta en Instagram"
              target="_blank"
              >Instagram</a
            ></span
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import AppLogo from "./AppLogo.vue";

export default {
  components: {
    AppLogo,
  },
};
</script>


<style lang="postcss" scoped>
.footer {
  & .container {
    @apply w-10/12
    mx-auto
    mt-5
    pt-2
    pb-10
    px-2
    xl:w-9/12
    2xl:w-8/12;

    & .inner-top {
      @apply flex
      flex-col
      items-center
      xl:flex-row
      xl:justify-between
      xl:items-center;

      & .link-logo {
        @apply flex
        justify-center
        h-32
        w-32
        mx-auto
        mb-5
        xl:ml-0
        xl:mb-0
        xl:w-28
        xl:h-28;

        & #boveda {
          @apply w-full;
        }
      }
    }

    & .inner-bottom {
      @apply w-full
      flex
      flex-col
      justify-center
      items-start
      py-4
      content-before
      sm:w-auto
      sm:mt-5
      sm:justify-end
      sm:items-end
      md:py-2;

      &:before {
        @apply block
        h-1
        w-3/12
        bg-white/80
        mb-2
        md:w-1/12
        dark:bg-gray-500
      }

      & p {
        @apply w-full
        flex
        flex-col
        justify-around
        text-center
        text-xs
        font-hero
        font-light
        leading-7
        sm:flex-row
        sm:w-auto
        sm:text-right;

        & a{
            @apply dark-hover:text-yellow-100;
        }

        & span {
          @apply flex
          flex-col
          items-center
          sm:inline-flex
          sm:flex-row
          sm:items-center
          sm:justify-center
          sm:content-before;

          &:before {
            @apply block
            items-center
            w-[3px]
            h-[3px]
            rounded-md
            bg-black/80
            mx-2
            dark:bg-gray-300;
          }
        }
      }
    }
  }
}
</style>
