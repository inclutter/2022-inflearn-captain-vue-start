<template>
  <header>
    <h1>
      {{ propsdata }}
    </h1>
    <button @click="sendEvent">
      send
    </button>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: ['propsdata'],
  methods: {
    sendEvent: function() {
      this.$emit('renew')
    }
  }
};
</script>

<style scoped>

</style>
