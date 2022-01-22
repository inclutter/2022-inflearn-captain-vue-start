<template>
  <div>
    <button @click="logText">
      click me
    </button>  |
    <input
      type="text"
      @keyup.enter="logText"
    >
    <div>
      <button>
        addd
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Methods",
  methods: {
    logText: function() {
      console.log('clicked')
    }
  }
};
</script>

<style scoped>

</style>
