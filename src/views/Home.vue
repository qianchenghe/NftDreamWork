<template>
  <div class="home">
    <div>1111111</div>
    <div>1111111</div>
    <div>1111111</div>
    <div>1111111</div>
    <div>1111111</div>
    <div>1111111</div>
    <div>1111111</div>
    <div>1111111</div>
    <div>1111111</div>
  </div>
</template>
<script>
// @ is an alias to /src
// import cordovaPlugin from "../utils/cordovaplugin";
export default {
  name: "Home",

  data() {
    return {
      
    };
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
.popoverDiv {
  position: fixed;
  top: 50px;
  right: 0px;
  text-align: right;
  margin-right: 8px;
}
.banner {
  padding-bottom: 10px;
  background-color: #ededed;
}
.title {
  width: 80%;
  position: relative;
  font-size: 16px;
  margin: 0 auto;
  padding: 10px 16px 10px 24px;
  border-bottom: 1px solid #f1f1f1;
  font-weight: 500;
  text-align: left;
}

.title::before {
  content: "";
  position: absolute;
  left: 5px;
  top: 15px;
  display: block;
  width: 4px;
  height: 12px;
  background: #b51313;
  border-radius: 10px;
}
.navList {
  display: flex;
  justify-content: flex-start;
  align-items: top;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 15px;
  color: #5e5e5e;
  border-bottom: 10px solid #f5f5f5;
}
.navIn {
  width: 33.33333%;
  padding: 16px 0 0;
}
.navIcon {
  display: block;
  margin: 0 auto 6px;
  width: 2rem;
}
.changeUser {
  position: relative;
  /* padding: 15px; */
  text-align: center;
  color: #b1b1b1;
  padding-bottom: 8px;
}
.changeUser span {
  display: inline-block;
  padding: 15px 10px;
  background: #fff;
}
.changeUser::before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 40px;
  right: 40px;
  top: 25px;
  height: 1px;
  background: #e6e3e3;
}
// .manageBox {
//   margin: 0 40px;
//   border: 1px #e6e3e3 dashed;
//   text-align: center;
// }
// .manageBox > div {
//   font-size: 40px;
//   color: #e6e3e3;
// }
// .manageBox > span {
//   font-size: 14px;
//   line-height: 30px;
//   color: #5e5e5e;
// }
</style>
