<template>
  <app-icon-base
    view-box="0 0 512 512"
    :width="40"
    :height="40"
    icon-name="pausa"
  >
    <path
      d="M256 4C116.6 4 4 116.6 4 256s112.6 252 252 252 252-112.6 252-252S395.4 4 256 4zm-26.3 353.9c0 9.5-7.3 16.8-16.8 16.8h-44.8c-9 0-16.8-7.3-16.8-16.8V154.1c0-9 7.8-16.8 16.8-16.8h44.8c9.5 0 16.8 7.8 16.8 16.8v203.8zm129.9 0c0 9.5-7.3 16.8-16.8 16.8H298c-9 0-16.8-7.3-16.8-16.8V154.1c0-9 7.8-16.8 16.8-16.8h44.8c9.5 0 16.8 7.8 16.8 16.8v203.8z"
    />
  </app-icon-base>
</template>

<script>
import AppIconBase from "./AppIconBase.vue";
export default {
  components: { AppIconBase },
};
</script>
