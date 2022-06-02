<template>
  <app-icon-base
    view-box="0 0 512 512"
    icon-name="burguer"
    :width="20"
    :height="20"
    id="burger"
    role="button"
  >
    <path
      d="M2.84 475c1.89 1.89 4.37 2.84 6.85 2.84s4.95-.95 6.84-2.84l222.54-222.38L461.58 475c1.89 1.89 4.37 2.84 6.85 2.84s4.95-.95 6.84-2.84c3.79-3.79 3.79-9.92 0-13.69l-222.5-222.38 222.52-222.4a9.663 9.663 0 0 0 0-13.69c-3.79-3.78-9.91-3.79-13.69 0L239.06 225.22 16.53 2.84c-3.79-3.79-9.91-3.79-13.69 0-3.78 3.79-3.79 9.92 0 13.69l222.51 222.4L2.84 461.31c-3.78 3.78-3.78 9.91 0 13.68Z"
    />
  </app-icon-base>
</template>

<script>
import AppIconBase from "./AppIconBase.vue";
export default {
  components: { AppIconBase },
};
</script>

<style lang="postcss" scoped>
svg {
  @apply w-16;
}
</style>
