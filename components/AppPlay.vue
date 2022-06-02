<template>
  <app-icon-base
    view-box="0 0 512 512"
    :width="40"
    :height="40"
    icon-name="reproducir"
  >
    <path
      d="M256 4C116.6 4 4 116.6 4 256s112.6 252 252 252 252-112.6 252-252S395.4 4 256 4zm132.2 266.6L196.1 381.4c-11.2 6.7-25.2-1.7-25.2-14.6V145.1c0-12.9 14-21.3 25.2-14.6l192.1 110.9c11.2 6.8 11.2 22.4 0 29.2z"
    />
  </app-icon-base>
</template>

<script>
import AppIconBase from "./AppIconBase.vue";
export default {
  components: { AppIconBase },
};
</script>
