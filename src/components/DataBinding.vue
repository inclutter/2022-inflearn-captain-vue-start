<template>
  <div>
    <div> {{ str }} </div>
    <div
      :id="uuid"
      :class="name"
    >
      {{ num }}
    </div>
    <p> {{ doubleNum }} </p>
    <div v-if="loading">
      Loading...
    </div>
    <div v-else>
      test user has been logged in
    </div>
    <div v-show="loading">
      Loading...
    </div>
    <input
      v-model="message"
      placeholder="edit me"
    >
    <p>Message is: {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "DataBinding",
  data: () => ({
    str: 'hi',
    num: 10,
    uuid: 'abc1234',
    name: 'text-blue',
    loading: true,
    message: ''

  }),
  computed: {
    doubleNum: function () {
      console.log(this.num);
      return this.num * 2;
    }
  }
}
</script>

<style scoped>

</style>
