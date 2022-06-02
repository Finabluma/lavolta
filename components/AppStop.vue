<template>
  <app-icon-base
    view-box="0 0 512 512"
    :width="40"
    :height="40"
    icon-name="stop"
  >
    <path
      d="M256 4C116.6 4 4 116.6 4 256s112.6 252 252 252 252-112.6 252-252S395.4 4 256 4zm110.9 346.1c0 9.5-7.3 16.8-16.8 16.8H161.9c-9.5 0-16.8-7.3-16.8-16.8V161.9c0-9.5 7.3-16.8 16.8-16.8h188.2c9.5 0 16.8 7.3 16.8 16.8v188.2z"
    />
  </app-icon-base>
</template>

<script>
import AppIconBase from "./AppIconBase.vue";
export default {
  components: { AppIconBase },
};
</script>
