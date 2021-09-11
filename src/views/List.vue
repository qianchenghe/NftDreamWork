<template>
  <div class="ListBox">
    <div class="col-lg-12 col-md-12 contentBox">
      <div class="feetype row">
        <div v-for="item in list" :key="item.id" class="col-md-4 col-xs-12 recommend_li">
          <div class="imgUrl">
            <img style="width:100%" :src="item.imgUrl" alt />
          </div>
          <div class="describeInfo">
            <div class="describe_title">
              <div style="margin:3px 3px">
                <b>{{item.title}}</b>
              </div>
              <div style="margin:3px 3px"> {{item.name}}</div>
            </div>
            <div class="describe_price">
              <div style="margin:3px 3px">Price</div>
              <div>
                <img
                  class="Blockreact__Block-sc-1xf18x6-0 Avatarreact__ImgAvatar-sc-sbw25j-1 dZKMVc hzWBaN"
                  src="https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456.svg"
                />
                <span style="margin:3px 3px">{{item.price}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import cordovaPlugin from "../utils/cordovaplugin";
export default {
  name: "List",

  data() {
    return {
       bgImageUrl:"https://storage.opensea.io/static/promocards/fatales-promocard.png",
       list:[
         { 
           imgUrl:"https://storage.opensea.io/static/promocards/fatales-promocard.png",
           title:"CryptoPunk",
           name:"CryptoPunk #29343",
           price:"105"
         },
          { 
           imgUrl:"https://storage.opensea.io/static/promocards/fatales-promocard.png",
           title:"CryptoPunk",
           name:"CryptoPunk #29343",
           price:"105"
         },
          { 
           imgUrl:"https://storage.opensea.io/static/promocards/fatales-promocard.png",
           title:"CryptoPunk",
           name:"CryptoPunk #29343",
           price:"105"
         },
          { 
           imgUrl:"https://storage.opensea.io/static/promocards/fatales-promocard.png",
           title:"CryptoPunk",
           name:"CryptoPunk #29343",
           price:"105"
         },
       ]
    };
  },

  computed: {
   
  },
  watch: {
    userId: {
      
    }
   
  },
  mounted() {
    // this.getData()
  },
  methods: {
    getData(){
      const _this = this;
      _this.http.test.getWeekly({
         type: "get",
         success: res => {
           console.log(res)
        }
      })
    }
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1280px) and (max-width: 1680px) {
  .feetype {
    margin: 0 auto;
    width: 82%;
  }
}
.feetype {
  padding: 10px;
  .recommend_li {
    border: 1px solid #ddd;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 3px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .describeInfo {
    font-size: 14px;
    .dZKMVc {
      width: 14px;
      height: 14px;
    }
    display: flex;
    .describe_title {
      flex: 2 0 0%;
      align-items: flex-start;
      flex-direction: column;
    }
    .describe_price {
      max-width: 50%;
      align-items: flex-end;
      flex-direction: column;
      display: flex;
    }
  }
}
</style>
