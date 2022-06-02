<template>
  <div itemscope itemtype="http://schema.org/Organization" class="instagram">
    <a
      itemprop="sameAs"
      href="https://instagram.com/la.volta"
      title="La Volta en Instagram"
      target="_blank"
    >
      <app-icon-instagram />
      <span>Instagram</span>
    </a>
  </div>
</template>

<script>
import AppIconInstagram from '~/components/AppIconInstagram'
export default {
  components: {
    AppIconInstagram,
  },
}
</script>

<style lang="postcss" scoped>
.instagram span{
  @apply sr-only;
}
</style>

