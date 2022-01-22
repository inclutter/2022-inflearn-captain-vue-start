<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input
        id="username"
        v-model="username"
        type="username"
      >
    </div>
    <div>
      <label for="password">pw: </label>
      <input
        id="password"
        v-model="password"
        type="password"
      >
    </div>
    <button type="submit">
      login
    </button>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  name: "FormView",
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    submitForm: function() {
      // event.preventDefault();
      console.log(this.username);
      console.log(this.password);
      const url = 'https://jsonplaceholder.typicode.com/users'
      let data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        })
    }
  }
};
</script>

<style scoped>

</style>
