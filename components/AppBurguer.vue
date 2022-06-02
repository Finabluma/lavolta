<template>
  <div id="menu__navigation" v-on="$listeners">
    <app-icon-base
      view-box="0 0 50 50"
      icon-name="burguer"
      :width="50"
      :height="50"
      id="burger"
      role="button"
    >
      <rect y="43.28" width="53.5" height="8.95" /><rect
        y="21.64"
        width="53.5"
        height="8.95"
      /><rect width="53.5" height="8.95" />
    </app-icon-base>
  </div>
</template>

<script>
import AppIconBase from "./AppIconBase.vue";
export default {
  components: { AppIconBase },
};
</script>

<style lang="postcss" scoped>
#menu__navigation svg {
  @apply w-4;
}
</style>
