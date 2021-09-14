<template>
  <div class="ListBox">
    <div class="col-lg-12 col-md-12 contentBox">
      <div v-if="list.length" class="feetype row">
        <div v-for="item in list" :key="item.id" class="col-md-4 col-xs-12 recommend_li">
          <div class="card" @click="toMake(item)">
            <div>
              <img width="100%" :src="item.owner.profileImgUrl" />
              <!-- <span style="margin:3px 3px">{{item.price}}</span> -->
            </div>
            <div class="describeInfo">
              <div class="describe_title">
                <div style="margin:3px 3px">
                  <b>{{item.name}}</b>
                </div>
                <div style="margin:3px 3px">{{item.description}}</div>
              </div>
            </div>
            <!-- <div class="describe_price">
              <div>
                <img width="100%" :src="item.imageUrl" />
                <span style="margin:3px 3px">{{item.price}}</span>
              </div>
            </div>-->
          </div>
        </div>
      </div>
    </div>
    <div v-if="!list.length" style="width:60%;margin:40px auto">
      <img style="width:100%" src="../assets/img/empty.png" alt />
      <p style="text-align:center;color:#a8a8a8">您没有NFT,连接钱包看看！</p>
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
        query: {
          orderDirection: "desc",
          offset: 0,
          limit: 20,
          owner: ""
        },
        bgImageUrl: "https://storage.opensea.io/static/promocards/fatales-promocard.png",
        list: [

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
      var account = JSON.parse(localStorage.getItem('account'));
      this.query.owner = account;
      this.getAthleteList(account)
    },
    methods: {
      getAthleteList(account) {
        const getData = {
          orderDirection: "desc",
          offset: 0,
          limit: 20,
          // owner: "0xB72b0a3e30BCF013310214f2B839162f7f066397"
          owner: account
        }
        const _this = this;
        _this.http.test.getTestData({
          type: "get",
          params: getData,
          success(res) {
            if (res.code == 0) {
              console.log(res);
              _this.list = res.data;
              console.log(_this.list);
            }
          },
          fail(err) {
            console.log(err)
          }
        })
      },
      toMake(item){
        // console.log(item.assetContract.address);
        // console.log(item.tokenId);
        this.$router.push({path:'/Make',query:{"tokenId":item.tokenId,"contraceAddress":item.assetContract.address}});
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
