<template>
  <div class="NavBar">
    <nav class="navbar navbar-default" role="navigation">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu">
          <span class="sr-only">展开导航</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">网站标题</a>
      </div>
      <div class="collapse navbar-collapse" id="menu">
        <ul class="nav navbar-nav">
          <li class="active">
            <a href="#">首页</a>
          </li>
          <li>
            <a href="#">导航标题1</a>
          </li>
          <li>
            <a href="#">导航标题2</a>
          </li>
          <li>
            <a href="#">导航标题2</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    title: {
      type: String,
      default: ""
    },
    showRight: {
      type: Boolean,
      default: false
    },
    iconName:{
      type: String,
      default : 'arrow-down'
    },
    selectText: {
      type: String,
      default: ""
    }
  },
  methods: {
    back() {
      if (this.$route.name == "Home" || this.$route.path == "/") {
        this.$router.go(-1);
        this.$emit("backAction");
      }
    },
    action() {
      this.$emit("rightAction");
    }
  }
};
</script>

<style lang="scss" scoped>
.NavBar {
  ::v-deep {
    [class*="van-hairline"]::after {
      border: none;
    }
  }
  .iconfont {
    color: #83888a;
  }
}
</style>
