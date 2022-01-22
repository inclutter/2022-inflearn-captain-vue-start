<template>
  <div>
    <div>
      {{ num }}
    </div>
    <button @click="addNum">
      increase
    </button>
  </div>
</template>

<script>
export default {
  name: "Watch",
  data: () => ({
    num: 10
  }),
  watch: {
    num: function() {
      this.logText();
    }
  },
  methods: {
    addNum: function() {
      this.num = this.num + 1;
    },
    logText: function() {
      console.log('changed');
    }
  }
};
</script>

<style scoped>

</style>
