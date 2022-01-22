<template>
  <div>
    <p :class="errorTextColor">
      Hello
    </p>
  </div>
</template>

<script>
export default {
  name: "ComputedUsage",
  data: () => ({
    cname: 'blue-text',
    isError: false
  }),
  computed: {
    errorTextColor: function() {
      return this.isError ? 'warning' : null;
    }
  }
};
</script>

<style scoped>
  .warning {
    color: red;
  }
</style>
