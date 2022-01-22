<template>
  <div>
    {{ num }}
  </div>
</template>


<script>
export default {
  name: "WatchVsComputed",
  data: () => ({
    num: 10
  }),
  computed: {
    doubleNum: function() {
      return this.num * 2;
    }
  },
  // watch는 데이터 요청에 적합
  // 무거운 로직을 실행할 때 주로 사용
  // https://vuejs.org/v2/guide/computed.html#Computed-vs-Watched-Property
  watch: {
    num: function(newValue) {
      this.fetchUserByNumber(newValue);
    }
  },
  methods: {
    fetchUserByNumber: function(num) {
      console.log(num);
    }
  }
};
</script>

<style scoped>

</style>
