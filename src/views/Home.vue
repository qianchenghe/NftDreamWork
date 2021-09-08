<template>
  <div class="home">
    <!-- {{name}}
    {{image}}
    <van-empty :image="image" description="暂时没有数据" />-->
    <div id="canvasBox">
      <div id="qrcode" style="display:none"></div>
      <canvas id="myCanvas"></canvas>
    </div>
    <div class="mackText">预览模式</div>
    <div class="mackBtn">
      <van-popup
        closeable
        close-icon="close"
        @click-close-icon="closeModal"
        :style="{ height: popupH,width:'85%', }"
        v-model="isShowModal"
      >
        <div id="dranwBox"></div>
      </van-popup>

      <el-button is-link @click="showPopup" icon="el-icon-edit-outline" type="primary">制作NFT</el-button>
      <el-button is-link @click="connectWallet" icon="el-icon-edit-outline" type="primary">连接钱包</el-button>

      <!-- <van-cell >展示弹出层</van-cell> -->
    </div>
    <el-button
      v-if="isShowModal"
      class="preservation"
      type="primary"
      @click="saveAsLocalImage"
    >保存NFT</el-button>
    <!-- <canvas id="cvs" class="myCanvas"></canvas> -->
    <!-- {{image}} -->
  </div>
</template>
<script>
import QRCode from "qrcodejs2";

export default {
  name: "Home",

  data() {
    return {
      isShowModal: false,
      imageList:"",
      qrcodeAddress:"https://opensea.io/",
      qrcode1:"",
      bgImageUrl:"https://storage.opensea.io/static/promocards/fatales-promocard.png",
      dialogVisible: false,
      popupH:0
    };
  },
  mounted() {
    this.qrcode(this.qrcodeAddress)
     this.drawAndShareImage(this.bgImageUrl,)
  },
  computed: {

  },
  watch: {
    userId: {

    }

  },
  methods: {
    connectWallet(){
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
      		});
      }
    },
    showPopup(){
      this.isShowModal = true;
      setTimeout(() => {
            this.saveImageInfo()
      }, 10);
    },
    closeModal(){
      console.log("22345678")
      var ele = document.querySelector('[data-id="1"]');
      ele.remove()
    },
    open(){
      this.dialogVisible = true;
      setTimeout(() => {
          this.saveImageInfo()
      })

    },
     handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      // 二维码生成
      qrcode(qrcodeAddress) {
        this.qrcode1 = new QRCode("qrcode", {
            render: "canvas", // 也可以替换为table
            width: 60,
            height: 60,
            text: qrcodeAddress, // 二维码地址
            colorDark: "#000",
            colorLight: "#fff"
        });
      },
      // 合成图片
      drawAndShareImage(bgImageUrl,qrcodeUrl){
          var qrcodeImg = document.getElementById("qrcode").lastChild;
          var canvas = document.getElementById("myCanvas");
          var canvasBox = document.getElementById("canvasBox");
          var bgImg = new Image();
          bgImg.src = bgImageUrl;
          canvas.width = canvasBox.offsetWidth;
         canvas.height = canvasBox.offsetWidth;
         this.popupH = canvasBox.offsetWidth;
          var ctx = canvas.getContext("2d");
          bgImg.crossOrigin = "Anonymous";
          setTimeout(()=>{
              bgImg.onload = function(){
                ctx.drawImage(bgImg,0,0,canvas.width,canvas.height);
                ctx.drawImage(qrcodeImg,3,3,qrcodeImg.width,qrcodeImg.height);
             }
          },10)
      },
      // 保存成图片
      saveImageInfo() {
          var mycanvas = document.getElementById("myCanvas");
          var imageSrc = mycanvas.toDataURL("image/jpg");
            // var w=window.open('about:blank','image from canvas');
          var imageBox = document.getElementById("dranwBox");
          console.log(imageBox, "imageBox")
          var image = document.createElement("img");
　　　　   image.setAttribute("src", imageSrc);
          image.setAttribute("data-id", "1");
            // w.document.write("<img src='"+image+"' alt='from canvas'/>");
          imageBox.append(image);
      },
      // 下载图片
     saveAsLocalImage(){
        var myCanvas = document.getElementById("myCanvas");
        var image = myCanvas.toDataURL("image/jpg").replace("image/jpg", "image/octet-stream");
        window.location.href = image;
    }
    // PictureSynthesis(imageUrl, qrcodeUrl,){
    //   // alert("111")
    //   var canvas = document.getElementById("mycanvas")
    //   var canvasBox = document.getElementById("canvasBox");
    //    console.log(canvasBox, "canvasBoxWidth.style.width")
    //     canvas.width = canvasBox.offsetWidth;
    //     canvas.height = canvasBox.offsetWidth;
    //     var context = canvas.getContext("2d");
    //     context.rect(0, 0, canvas.width, canvas.height);
    //     context.fillStyle = "#fff";
    //     context.fill();
    //     var myImage = new Image();
    //     myImage.src = imageUrl // 背景图片 你自己本地的图片或者在线图片
    //     myImage.crossOrigin = 'Anonymous';
    //     myImage.onload = function(){
    //       context.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    //       var myImage2 = new Image();
    //       console.log(qrcodeUrl, "qrcodeUrl")
    //       myImage2.src = require(qrcodeUrl); // 你自己本地的图片或者在线图片
    //       myImage2.crossOrigin = 'Anonymous';
    //       myImage2.onload = function(){
    //         context.drawImage(myImage2, 0, 0, 80, 80);
    //       }
    //     }
    // }
  },
};
</script>
<style lang="scss" scoped>
#canvasBox,
.mackBtn {
  width: 86%;
  height: 100%;
  margin: 0 auto;
  padding-top: 20px;
  // border: 1px solid #ddd;
}
.mackBtn {
  border: none;
  text-align: center;
  margin-top: 40px;
}
.mackText {
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
  color: #5e5e5e;
}
.preservation {
  position: absolute;
  bottom: -8rem;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 10000;
}
// #dranwBox {
//   width: 90%;
//   margin: 10px auto;
//   height: 100%;
// }
</style>
