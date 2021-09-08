<template>
  <div id="app">
    <div>
      <app-header></app-header>
    </div>
    <div style="margin-top:60px">
      <vue-page-stack>
        <router-view></router-view>
      </vue-page-stack>
    </div>
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
}
</style>
