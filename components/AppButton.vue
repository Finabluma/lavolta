<template>
  <nuxt-link :to="to" :title="title" :class="[btnClass, colorVariants]">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    rounded: {
      type: String,
      default: "medium",
    },
    size: {
      type: String,
      default: "normal",
    },
    variant: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    btnClass() {
      return {
        base: true,
        "rounded-lg": this.rounded === "medium",
        "rounded-full": this.rounded === "large",

        normal: this.size == "normal",
        small: this.size == "small",
        large: this.size == "large",
      };
    },
    colorVariants() {
      switch (this.variant) {
        case "primary":
          return "primary";
        case "secondary":
          return "secondary";
        case "danger":
          return "border-red-300 bg-red-300 text-white";
        default:
          break;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.base {
  @apply flex items-center
  justify-center
  border
  font-ibm
  tracking-wide
  capitalize
  w-7/12
  mx-auto
  mt-3
  mb-12
  sm:w-4/12
  md:w-3/12
  xl:w-3/12;
}
.small {
  @apply px-4 py-2;
}
.normal {
  @apply px-6 py-4 text-xl
  md:py-4
  lg:py-4;
}
.large {
  @apply px-2
  py-4
  text-xl
  block
  sm:py-4
  lg:py-4
  lg:text-2xl;
}
.primary {
  @apply border-0
  bg-yellow-700
  bg-opacity-60
  text-white
  backdrop-filter
  backdrop-blur
  hover:bg-black
  hover:bg-opacity-80
  hover:text-gray-300
  dark:border-white
  dark:text-gray-300
  dark-hover:text-gray-300
  dark-hover:bg-gray-700
  dark-hover:bg-opacity-100;
}
.secondary {
  @apply bg-white
  bg-opacity-80
  backdrop-filter
  backdrop-blur
  border-opacity-40
  hover:border-opacity-50 hover:bg-opacity-20
  hover:text-white
  dark:bg-gray-700
  dark:text-gray-300
  dark:hover:bg-opacity-80;
}
</style>

