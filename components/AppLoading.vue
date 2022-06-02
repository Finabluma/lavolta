<template>
  <div v-if="loading" class="loading-page">
    <div class="loading"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  },
}
</script>

<style lang="postcss" scoped>
.loading-page {
  @apply fixed
  w-screen
  min-h-screen
  bg-gradient-radial
  from-white
  to-gray-100
  bg-black/80
  top-0
  right-0
  flex
  flex-col
  justify-center
  items-center
  text-center;
  z-index: 1000;
}
.loading {
  @apply inline-block
  w-44
  h-44
  border-8
  border-pink-400
  rounded-full
  border-t-transparent
  animate-spin;
}
</style>
