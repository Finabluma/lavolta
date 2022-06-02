<template>
  <section v-if="conditions">
    <slot></slot>
    <div class="condiciones">
      <ul>
        <li v-for="condition in conditions" :key="condition.id">
          {{ condition.text }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "CondicionesReservas",
  props: {
    conditions: {
      type: Array,
    },
  },
};
</script>

<style lang="postcss" scoped>
section {
  @apply bg-white/30
  pt-5
  pb-3
  px-2
  border-b
  border-gray-100
  shadow-slate300
  sm:px-5
  dark:shadow-md
  dark:bg-gray-700
  dark:border-gray-500;

  & h2 {
    @apply text-altheader
    font-hero
    font-light
    w-11/12
    mx-auto
    mb-3
    flex
    flex-col
    justify-center
    items-center
    content-after
    md:items-start
    md:w-9/12
    md:pl-2
    lg:w-8/12
    xl:w-6/12
    xl:pl-1
    2xl:w-6/12;
  }

  & .condiciones {
    @apply w-11/12
    mx-auto
    lg:w-10/12
    xl:w-9/12
    2xl:w-8/12;

    & ul {
      @apply py-5
      px-2
      md:mb-3
      md:py-5
      md:px-0
      md:flex
      md:justify-center
      md:flex-wrap;

      & li {
        @apply text-lg
        font-hero
        font-light
        mb-5
        p-4
        border
      border-white/80
        ring-4
      ring-white/20
      bg-white
        shadow
        md:w-2/5
        dark:border-gray-500
        dark:bg-white/10;

        &:nth-child(odd){
          @apply md:mr-5
        }

        &:last-child {
          @apply md:mr-0;
        }
      }
    }
  }
}
</style>
