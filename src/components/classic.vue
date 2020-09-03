<template>
  <div id="components-layout-basic">
    <a-layout>
      <!-- 头部 -->
      <a-layout-header>

        <div id="head-menu-box">
          <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="mail"> <a-icon type="mail" />菜单一</a-menu-item>
            <a-menu-item key="app" > <a-icon type="appstore" />菜单二</a-menu-item>
            <a-sub-menu>
              <span slot="title" class="submenu-title-wrapper"
                ><a-icon type="setting" />菜单三</span
              >
                <a-menu-item key="setting:1">
                  Option 1
                </a-menu-item>
            </a-sub-menu>
            <a-menu-item key="alipay"><a-icon type="appstore" /> 菜单四 </a-menu-item>
          </a-menu>
        </div>

      </a-layout-header>
      <!-- 头部 -->

      <!-- 主体 -->
      <a-layout-content>
        <router-view />
      </a-layout-content>
      <!-- 主体 -->

      <!-- 底部 -->
      <a-layout-footer>

      </a-layout-footer>
      <!-- 底部 -->
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "classic",
  data() {
    return {
      current: ['mail'],
    };
  },
  mounted(){
  	this.initData()
  },
  methods:{
  	initData(){
      this.$router.push("home");
  	}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#head-menu-box {
  width: 1100px;
  bottom:0;
}
#components-layout-basic {
  margin: 0px;
  padding: 0px;
}
#components-layout-basic .ant-layout-header {
  height: 120px;
  background: #7dbcea;
}
#components-layout-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
  height: 80px;
  line-height: 1.5;
}
#components-layout-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 600px;
  line-height: 120px;
}
</style>
