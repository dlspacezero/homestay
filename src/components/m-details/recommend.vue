<template>
  <div class="recommend-container">
    <h4>周边相似房源</h4>
    <ul class="recommend-list-wrap">
      <li v-for="(item,index) in list" :key="index">
        <img :src="item.imgUrl" />
        <div class="house-describe">
          <p class="house-info">{{item.info}}</p>
          <p class="house-address">{{item.address}}</p>
          <p class="house-price">
            <span>￥</span>
            {{item.price}}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          imgUrl:
            "https://assets.muniao.com/UploadFiles/appimg/pc/Content/Assets_2019/images/index/hotcity/haerbin.jpg",
          info: "整租-酒店式公寓-宜住2人",
          address: "十七四合院公寓非遗文化",
          price: 581,
        },
        {
          imgUrl:
            "https://assets.muniao.com/UploadFiles/appimg/pc/Content/Assets_2019/images/index/hotcity/haerbin.jpg",
          info: "整租-酒店式公寓-宜住2人",
          address: "十七四合院公寓非遗文化",
          price: 581,
        },
        {
          imgUrl:
            "https://assets.muniao.com/UploadFiles/appimg/pc/Content/Assets_2019/images/index/hotcity/haerbin.jpg",
          info: "整租-酒店式公寓-宜住2人",
          address: "十七四合院公寓非遗文化",
          price: 581,
        },
        {
          imgUrl:
            "https://assets.muniao.com/UploadFiles/appimg/pc/Content/Assets_2019/images/index/hotcity/haerbin.jpg",
          info: "整租-酒店式公寓-宜住2人",
          address: "十七四合院公寓非遗文化",
          price: 581,
        },
        {
          imgUrl:
            "https://assets.muniao.com/UploadFiles/appimg/pc/Content/Assets_2019/images/index/hotcity/haerbin.jpg",
          info: "整租-酒店式公寓-宜住2人",
          address: "十七四合院公寓非遗文化",
          price: 581,
        },
      ],
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.recommend-container {
  h4 {
    height: 35px;
    line-height: 35px;
    margin-top: 10px;
    font-size: 15px;
    font-weight: bold;
    color: #333333;
  }
  .recommend-list-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 168px;
      height: 167px;
      img {
        display: block;
        width: 168px;
        height: 101px;
        background: #999999;
        border-radius: 3px;
      }
      .house-describe {
        width: 168px;
        padding: 0 20px 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .house-info {
          height: 17px;
          line-height: 24px;
          font-size: 11px;
          font-weight: 500;
          color: #656565;
        }
        .house-address {
          width: 138px;
          height: 18px;
          line-height: 24px;
          font-size: 14px;
          font-weight: bold;
          color: #333333;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .house-price {
          height: 22px;
          line-height: 32px;
          font-size: 16px;
          font-weight: bold;
          color: #f57b7e;
          span {
            font-size: 12px;
            color: #fe907f;
          }
        }
      }
    }
  }
}
</style>