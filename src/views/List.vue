<template>
  <div>11112233</div>
</template>
<script>
// @ is an alias to /src
// import cordovaPlugin from "../utils/cordovaplugin";
export default {
  name: "List",

  data() {
    return {
      url: "https://api.opensea.io/api/v1/assets?order_direction=desc",
      offset: 0,
      limit:20,
      owner: ""
    };
  },

  mounted() {
    var account = JSON.parse(localStorage.getItem('account'));
    this.owner = account;
    console.log('地址列表', this.owner);

    //TODO 初始化数据
    //https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&owner={address}

  },

  computed: {

  },
  watch: {
    userId: {

    }

  }
};
</script>
<style lang="scss" scoped>
</style>
