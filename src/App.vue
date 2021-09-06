<template>
  <div id="app">
    <div>
      <app-header></app-header>
    </div>
    <vue-page-stack>
      <router-view></router-view>
    </vue-page-stack>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #333;
  font-size: 14px;
  // position: absolute;
  position: relative;
  height: 100vh;
}
</style>
