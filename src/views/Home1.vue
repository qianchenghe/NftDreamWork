<template>
  <div class="home">
    <div id="qrcode" style="display:none"></div>
    <canvas id="myCanvas"></canvas>
    <button type="text" @click="open">点击打开</button>
    <button @click="saveAsLocalImage">下载</button>

    <div class="el-dialog"></div>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span id="imgesBox"></span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  name: "Home",

  data() {
    return {
      imageList:"",
      qrcodeAddress:"https://opensea.io/",
      qrcode1:"",
      bgImageUrl:"https://storage.opensea.io/static/promocards/fatales-promocard.png",
      dialogVisible: false

    };
  },
  mounted() {
    // console.log(ImgMerge)
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
    open(){
      this.dialogVisible=true;
      setTimeout(()=>{
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
        this.qrcode1= new QRCode("qrcode", {
            render: "canvas", //也可以替换为table
            width: 80,
            height: 80,
            text: qrcodeAddress, // 二维码地址
            colorDark: "#000",
            colorLight: "#fff"
        });
      },
      // 合成图片
      drawAndShareImage(bgImageUrl,qrcodeUrl){
          var qrcodeImg = document.getElementById("qrcode").lastChild;
          var canvas = document.getElementById("myCanvas");
          var bgImg = new Image();
          bgImg.src=bgImageUrl;
          canvas.width = 375;
          canvas.height = 375;
          var ctx = canvas.getContext("2d");
          bgImg.crossOrigin = "Anonymous";
          setTimeout(()=>{
              bgImg.onload = function(){
                ctx.drawImage(bgImg,0,0,canvas.width,canvas.height);
                ctx.drawImage(qrcodeImg,0,0,qrcodeImg.width,qrcodeImg.height);
             }
          },10)
      },
      // 保存成图片
      saveImageInfo() {
            var mycanvas = document.getElementById("myCanvas");
            var imageSrc = mycanvas.toDataURL("image/jpg");
            // var w=window.open('about:blank','image from canvas');
             var imageBox = document.getElementById("imgesBox");
           　var image = document.createElement("img");
　　　　      image.setAttribute("src", imageSrc);
            // w.document.write("<img src='"+image+"' alt='from canvas'/>");
            imageBox.appendChild(image);
      },
      // 下载图片
     saveAsLocalImage(){
        var myCanvas = document.getElementById("myCanvas");
        var image = myCanvas.toDataURL("image/jpg").replace("image/jpg", "image/octet-stream");
        window.location.href=image;
    }
      // drawAndShareImage(){
      //    var canvas = document.getElementById("canvas");
      //    var qrcode=$('#qrcode').find('img')[0].currentSrc
      //     canvas.width = 375;
      //     canvas.height = 375;
      //     var context = canvas.getContext("2d");
      //     context.rect(0 , 0 , canvas.width , canvas.height);
      //     context.fillStyle = "#fff";
      //     context.fill();
      //     var myImage = new Image();
      //     myImage.src = "https://storage.opensea.io/static/promocards/fatales-promocard.png";  //背景图片 你自己本地的图片或者在线图片
      //     myImage.crossOrigin = 'Anonymous';
      //     setTimeout(()=>{
      //         myImage.onload = function(){
      //           context.drawImage(myImage,0,0,canvas.width,canvas.height);
      //           context.drawImage(qrcodeImg,0,0,80,80);
      //        }

      //     },10)
      // }
  },
};
</script>
<style lang="scss" scoped>
</style>
