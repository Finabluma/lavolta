<template>
  <app-icon-base
    view-box="0 0 512 512"
    :width="40"
    :height="40"
    icon-name="reset"
  >
    <path
      d="M256 4C116.6 4 4 116.6 4 256s112.6 252 252 252 252-112.6 252-252S395.4 4 256 4zm7.9 381v-36.9c55.3 0 92.1-41.3 92.1-92.1s-41.3-92.1-92.1-92.1c-44.9 0-82.4 28.8-90.5 73.7h21.8c11.1 0 15.8 8.8 13.5 18.4L164 335c-6.8 9.7-16 9.7-21.4 2.7L98 256c-2.3-7.7 2.3-18.4 13.5-18.4h24.6c8.7-64.3 62.7-110.6 127.8-110.6 71.1 0 129 57.9 129 129s-55.3 129-129 129z"
    />
  </app-icon-base>
</template>

<script>
import AppIconBase from "./AppIconBase.vue";
export default {
  components: { AppIconBase },
};
</script>
