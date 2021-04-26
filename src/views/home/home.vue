<template>
  <div class="home">
    <a-carousel autoplay>
      <div class="pic-box">
        <img src="@/static/images/home/circle.png" width="100%" height="100%" alt />
      </div>
      <div class="pic-box">
        <img src="@/static/images/home/fog.png" width="100%" height="100%" alt />
      </div>
      <div class="pic-box">
        <img src="@/static/images/home/imagine.png" width="100%" height="100%" alt />
      </div>
      <div class="pic-box">
        <img src="@/static/images/home/darkline.png" width="100%" height="100%" alt />
      </div>
    </a-carousel>
  </div>
</template>


<script>
// import api from "@/api";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      datalist: [],
    };
  },
  mounted() {
    this.showdata();
  },
  methods: {
    showdata() {
      //		import axios from 'axios'
      //    Vue.prototype.$http = axios  在main.js中把axios添加到vue原型中，则可在每个组件中调用
      this.rq
        .get("/parameter/query") //全局引入使用vue原型中的方法this.$http,已经把axios添加到原型中
        .then((res) => {
          console.log(res.data);
          this.datalist = res.data;
        })
        .catch((err) => {
          console.log("调用失败", err);
        });
    },
  },
};
</script>

<style scoped>
.pic-box {
  width: 600px;
  height: 600px;
}

/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 600px;
  line-height: 18px;
  background: rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
