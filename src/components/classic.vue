<template>
  <div id="components-layout-basic">
    <a-layout id="components-layout-body">
      <!-- 头部 -->
      <a-layout-header>
        <!-- logo  start -->
        <div>
          <div id="head-logo">
            <div>
              <img src="@/assets/color.png" alt="logo" id="logo-img" />
              <img src="@/assets/logo-name.png" alt="logo" id="logo-name" />
            </div>
          </div>
        </div>
        <!-- logo  end -->

        <div id="head-menu-box">
          <a-menu v-model="current" mode="horizontal">
            <!-- 首页 start -->
            <a-menu-item key="home"> <a-icon type="home" />首页 </a-menu-item>
            <!-- 首页 start -->

            <a-sub-menu>
              <span slot="title" class="submenu-title-wrapper">
                <a-icon type="shop" />货架
              </span>
              <a-menu-item key="books">书籍区</a-menu-item>
              <a-menu-item key="games">游戏区</a-menu-item>
            </a-sub-menu>

            <a-menu-item key="blog"> <a-icon type="book" />博客 </a-menu-item>

            <a-sub-menu>
              <span slot="title" class="submenu-title-wrapper">
                <a-icon type="experiment" />实验室
              </span>
              <a-menu-item key="special-effects">特效</a-menu-item>
              <a-menu-item key="layout">布局</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </div>
      </a-layout-header>
      <!-- 头部 -->

      <a-divider type="horizontal" />
      <!-- 主体 -->
      <a-layout-content>
        <router-view />
      </a-layout-content>
      <!-- 主体 -->

      <a-divider type="horizontal" />
      <!-- 底部 -->
      <a-layout-footer>
        <div id="footer-box">
          <p>©2021 Lmc. All rights reserved.</p>
        </div>
      </a-layout-footer>
      <!-- 底部 -->
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "classic",
  components: {},
  data() {
    return {
      current: ["mail"],
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.$router.push("home");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#footer-box {
  text-align: center;
}
#head-logo {
  flex-direction: row;
}
#logo-img {
  width: 100px;
  height: 100px;
}
#logo-name {
  width: 400px;
  height: 100px;
}
#head-menu-box .ant-menu.ant-menu-horizontal.ant-menu-root.ant-menu-light {
  background-color: rgba(1, 1, 1, 0.2);
}
#components-layout-body {
  margin: 0px auto;
  width: 80%;
  background-color: rgba(16, 142, 233, 0);
}
#components-layout-basic {
  margin: 0px;
  padding: 0px;
  background-image: url("~@/assets/background.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
#components-layout-basic .ant-layout-header {
  margin: 0px;
  padding: 0px;
  height: 149px;
  background: rgba(16, 142, 233, 0);
}
#components-layout-basic .ant-layout-footer {
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  height: 80px;
  line-height: 1.5;
}
#components-layout-basic .ant-layout-content {
  background: rgba(0, 0, 0, 0.2);
  min-height: 600px;
}
</style>
