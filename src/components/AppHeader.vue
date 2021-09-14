<template>
  <div class="NavBar">
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu">
          <span class="sr-only">展开导航</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <img class="navbar-brand" :src="logo" />
        <a class="navbar-brand" href="#">NFT Dream Work</a>
      </div>
      <div class="collapse navbar-collapse" id="menu">
        <ul class="nav navbar-nav nav-fill">
          <li
            v-for="(item,index) in navlist"
            :key="item.id"
            :class=" navIndex === index ? 'active' : ''"
          >
            <a @click="goPage(index,item.navUrl)" data-toggle="tab" href="#">{{item.navName}}</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data(){
    return{
      navlist:[
        {
          navUrl:"Home",
          navName:"首页"

        },
        {
          navUrl:"List",
          navName:"NFT列表"
        },
        {
          navUrl:"Make",
          navName:"NFT制作"
        },
        {
          navUrl:"About",
          navName:"关于"
        },

      ],
      navIndex:0,
      logo: require("../assets/img/logo.jpg")
    }
  },
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
    goPage(i, item){
      console.log("跳转")
      this.navIndex = i;
      var a = document.querySelector(".navbar-toggle");
      $(".navbar-nav li a").on("click",function () {
          a.click();
      });
      this.$router.push({
        name:item
      })

    },
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
  .logo {
    height: 30px;
    weight: 30px;
  }
}
</style>
