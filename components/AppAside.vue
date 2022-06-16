<template>
  <aside :class="bg">
    <div class="inner">
      <slot name="header" />
      <slot />
      <slot name="footer" />
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    layout: {
      type: String,
    },
  },
  computed: {
    bg() {
      return {
        green: this.layout === "green",
        gray: this.layout === "gray",
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
aside {
  @apply py-2
  shadow-slate400
  dark:shadow-md;

  & .inner {
    @apply mx-auto
    mt-10
    content-before
    content-after
    w-full
    md:w-11/12
    lg:w-9/12
    xl:w-8/12
    2xl:w-8/12
    2xl:px-10;

    &:before,
    &:after {
      @apply block h-1 w-3/12 bg-white/90
      mx-auto
      md:ml-0
      dark:bg-gray-300;
    }

    &:before {
      @apply mb-5;
    }

    &:after {
      @apply mb-8;
    }
  }
}

.gray {
  @apply bg-gradient-radial
  from-white/60
  dark:from-gray-500
  dark:via-gray-600
  dark:to-gray-700;

  & .inner {
    @apply w-full px-0;
  }

  & .inner:before,
  & .inner:after {
    @apply bg-white/90
    max-w-[200px]
    mx-auto
    md:ml-8
    lg:ml-36
    xl:ml-40
    2xl:ml-72
    dark:bg-gray-500;
  }
}

.green {
  @apply bg-gradient-radial
  from-white/70
  dark:from-gray-500
  dark:to-gray-700;

  & .inner:before,
  & .inner:after {
    @apply bg-white/80 dark:bg-gray-500;
  }
}
</style>
