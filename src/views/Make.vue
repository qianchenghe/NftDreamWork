<template>
  <div class="make">
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
      <!-- <van-cell >展示弹出层</van-cell> -->
    </div>
    <el-button v-if="isShowModal" class="preservation" type="primary" @click="savePic">保存NFT</el-button>
    <!-- <canvas id="cvs" class="myCanvas"></canvas> -->
    <!-- {{image}} -->
  </div>
</template>
<script>
  import QRCode from "qrcodejs2";
  export default {
    name: "Make",

    data() {
      return {
        isShowModal: false,
        imageList: "",
        qrcodeAddress: "https://opensea.io/",
        qrcode1: "",
        bgImageUrl: "https://lh3.googleusercontent.com/_G6xsXGAL6ftk22W…u2zwPP-U27o0Zbk5Vgn0gKps06WZm43udlognHkWKXEtoLONw",
        dialogVisible: false,
        popupH: 0,
        tokenId: "",
        contraceAddress: ""
      };
    },
    mounted() {
      console.log(this.$route.query);
      // if(String(this.$route.query) == "{}") alert("请先选择一张NFT")
      this.contraceAddress = this.$route.query.contraceAddress;
      this.tokenId = this.$route.query.tokenId;
      if(this.contraceAddress && this.tokenId){
        this.getData();
      }else{
         this.$toast.fail("请先选择一张NFT");
          return false;
      } 
      
    },
    computed: {

    },
    watch: {
      userId: {

      }

    },
    methods: {
      getData() {
        const _this = this;
        const getData = {
          assetContractAddress: _this.contraceAddress,
          tokenId: _this.tokenId
         }

        _this.http.test.getDetailData({
          type: "get",
          params: getData,
          success(res) {
            if (res.code == 0) {
              _this.data = res.data
              _this.qrcodeAddress = _this.data.permalink;
              _this.bgImageUrl = _this.data.owner.profileImgUrl;
              console.log(res);
              console.log(_this.qrcodeAddress);
              console.log(_this.bgImageUrl);
              _this.qrcode(_this.qrcodeAddress)
              _this.drawAndShareImage(_this.bgImageUrl)
            }
          },
          fail(err) {
            console.log(err)
          }
        })

      },
      showPopup() {
        this.isShowModal = true;
        setTimeout(() => {
          this.saveImageInfo()
        }, 10);
      },
      closeModal() {
        console.log("22345678")
        var ele = document.querySelector('[data-id="1"]');
        ele.remove()
      },
      open() {
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
      drawAndShareImage(bgImageUrl, qrcodeUrl) {
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
        setTimeout(() => {
          bgImg.onload = function() {
            ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(qrcodeImg, 3, 3, qrcodeImg.width, qrcodeImg.height);
          }
        }, 10)
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
      saveAsLocalImage() {
        var myCanvas = document.getElementById("myCanvas");
        var image = myCanvas.toDataURL("image/jpg").replace("image/jpg", "image/octet-stream");
        window.location.href = image;
      },
      savePic() {
        console.log("保存到相册")
        var imgs = document.querySelector('[data-id="1"]');
        var url = imgs.getAttribute("src");
        this.saveImages(url);
      },
      saveImages(Url) {
        console.log("1111")
        var blob = new Blob([''], {
          type: 'application/octet-stream'
        });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = Url;
        a.download = Url.replace(/(.*\/)*([^.]+.*)/ig, "$2").split("?")[0];
        var e = document.createEvent('MouseEvents');
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
        URL.revokeObjectURL(url);
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
.el-button--primary {
  color: #fff;
  background-color: #bdbdbd;
  border-color: #bdbdbd;
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
