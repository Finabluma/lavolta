<template>
  <div class="inner-content">
    <h1>{{ node.title }}</h1>
    <div v-html="node.body.value"></div>
  </div>
</template>

<script>
import SVGBarcaCorazon from "~/components/SVGBarcaCorazon";
export default {
  props: ["node"],
  components: {
    SVGBarcaCorazon,
  },
};
</script>

<style lang="postcss" scoped>
.inner-content{
  @apply relative
  z-20
  w-10/12
  mx-auto
}
</style>
