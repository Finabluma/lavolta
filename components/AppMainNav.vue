<template>
  <nav :aria-label="ariaLabel">
    <h2 class="sr-only">{{ navName }}</h2>
    <ul role="menubar" :aria-label="ariaLabel">
      <li role="none">
        <NuxtLink to="/" role="menuitem">Inicio</NuxtLink>
      </li>
      <!-- <li role="none">
      <NuxtLink to="/cocina" role="menuitem">Cocina</NuxtLink>
    </li> -->
      <li role="none">
        <NuxtLink to="/carta" role="menuitem">Carta</NuxtLink>
      </li>
      <li role="none">
        <NuxtLink to="/reservas" role="menuitem">Reservas</NuxtLink>
      </li>
      <li role="none">
        <NuxtLink to="/prensa">Prensa</NuxtLink>
      </li>
      <li role="none">
        <NuxtLink to="/contacta" role="menuitem">Contacta</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "mainNavigation",
  props: {
    ariaLabel: String,
    navName: String,
  },
};
</script>

<style lang="postcss" scoped>
.drawer {
  & nav ul {
    @apply w-11/12
      h-auto;

    & li {
      @apply w-full
      font-hero
      font-light
      text-2xl
      text-center
      xl:text-3xl;

      & a {
        @apply block border-b
        border-gray-300
        py-4
        transition-all
        xl:py-6
        hover:text-gray-900
        dark:border-white/30
        dark-hover:text-gray-400;

        &.nuxt-link-exact-active,
        &.nuxt-link-exact-active:hover {
          @apply text-pink-500
          text-opacity-80
          cursor-default
          dark:text-gray-400
          dark:text-opacity-100;
        }
      }

      &:last-child a {
        @apply border-b-0;
      }
    }
  }
}

/* footer */

.footer {
  & nav {
    @apply mb-10
        w-full
        xl:w-auto
        xl:mb-0;

    & ul {
      @apply flex
          flex-col
          items-center
          w-full
          xl:flex-row
          xl:justify-end
          xl:w-auto;

      & li {
        @apply text-[18px]
          font-hero
          font-light
          w-full
          border-b
          border-gray-400
          xl:mx-2
          xl:text-sm
          xl:border-b-0
        dark:border-gray-800;

        & a {
          @apply flex
          justify-center
          py-3
          xl:py-0
          xl:px-1;

          &:hover {
            @apply text-pink-700 dark:text-yellow-100;
          }

          &.nuxt-link-exact-active.nuxt-link-active {
            @apply xl:bg-slate800 xl:text-gray-300;

            &:hover {
              @apply dark:text-gray-400 dark:xl:text-gray-300;
            }
          }
        }

        &:last-child {
          @apply border-b-0 xl:mr-0;
        }
      }
    }
  }
}
</style>
