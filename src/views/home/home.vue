<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />

    <p>bestlmc</p>
  </div>
</template>


<script>

// import api from "@/api";
export default {
  name: "Home",
  components: {
  },
  data () {
    return {
      datalist:[]
    }
  },
  mounted(){
  	this.showdata()
  },
  methods:{
  	showdata(){
//		import axios from 'axios'
//    Vue.prototype.$http = axios  在main.js中把axios添加到vue原型中，则可在每个组件中调用
  		this.rq.get('/parameter/query') //全局引入使用vue原型中的方法this.$http,已经把axios添加到原型中
  		.then((res)=>{
  			console.log(res.data)
  			this.datalist = res.data
  		})
  		.catch((err)=>{
  			console.log('调用失败',err)
  		})
  	}
  }
};
</script>
