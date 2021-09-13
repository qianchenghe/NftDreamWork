<template>
  <div class="home">
    <div class="introduction">NFT Dream work 最好用的nft二次加工平台</div>
    <div class="content">
      <br>应用场景:</br>
      社交网站，微博，微信朋友圈发带二维码的NFT。朋友通过扫描二维码，了解更多NFT的信息，以及所有者的信息。
      <br></br>
      总体描述:<br>
      NFT图片加二维码，手机通过扫描二维码跳转到二维码网站上的个人网页显示NFT信息，个性化信息。
    </div>
    <div class="img">
      <img :src="imgUrl">
    </div>
    <div class="btn" v-show="isShow">
      <el-button is-link @click="connectWallet" icon="el-icon-edit-outline" type="primary">连接钱包</el-button>
    </div>
  </div>
</template>
<script>
  import {
    web3j
  } from '../assets/js/web3.min.js';

  export default {
    name: "Home",
    data() {
      return {
        isShow:true,
        imgUrl: require("../assets/img/back.jpg")
      };
    },
    mounted() {
      var _this = this;
      var account = JSON.parse(localStorage.getItem('account'));
        if (account != null) {
          _this.isShow = false;
        }
      console.log(account);
    },

    computed: {

    },
    watch: {
      userId: {

      }

    },
    methods: {
      connectWallet() {
        var _this = this;
        var account = JSON.parse(localStorage.getItem('account'));
        if (account != null) {
          _this.isShow = false;
        } else {
          console.log("connet wallet");
          //判断用户是否安装MetaMask钱包插件
          if (typeof window.ethereum === "undefined") {
            //没安装MetaMask钱包进行弹框提示
            alert("Looks like you need a Dapp browser to get started.");
            alert("Consider installing MetaMask!");
          } else {
            //如果用户安装了MetaMask，你可以要求他们授权应用登录并获取其账号
            ethereum.enable()
              .catch(function(reason) {
                //如果用户拒绝了登录请求
                if (reason === "User rejected provider access") {
                  // 用户拒绝登录后执行语句；
                } else {
                  // 本不该执行到这里，但是真到这里了，说明发生了意外
                  alert("There was an issue signing you in.");
                }
              }).then(function(accounts) {
                console.log('地址列表', accounts)
                localStorage.setItem('account', JSON.stringify(accounts[0]));
                _this.isShow = false;
              });
          }
        }
      },

    },
  };
</script>
<style lang="scss" scoped>
  #canvasBox,

  .btn {
    width: 100%;
    border: none;
    text-align: center;
    margin-top: 40px;
  }

  .introduction {
    margin-top: 20%;
    font-size: 16px;
    text-align: center;
    color: #5e5e5e;
    font-weight: bold;
  }

  .content {
    width: 70%;
    margin-left: 15%;
    font-size: 16px;
    color: #5e5e5e;
  }

  .img {
    margin-top: 20px;
    width: 100%;
    text-align: center;
  }
</style>
