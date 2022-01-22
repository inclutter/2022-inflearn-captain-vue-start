<template>
  <app-header
    :propsdata="str"
    @renew="renewStr"
  >
    test
  </app-header>
</template>

<script>
import AppHeader from "@/components/AppHeader";
export default {
  name: "AppBody",
  components: { AppHeader },
  data: () => ({
    str: 'Header'
  }),
  methods: {
    renewStr: function() {
      this.str = 'Hi';
    }
  }
};
</script>

<style scoped>

</style>
