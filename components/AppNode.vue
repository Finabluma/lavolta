<template>
  <div v-html="node.body.value"></div>
</template>

<script>
export default {
  props: ["node"],
};
</script>
