<template>
  <div id="app">
    <router-view/>
    <van-tabbar route>
  <van-tabbar-item
    replace
    to="/"
    icon="home-o"
  >
    首页
  </van-tabbar-item>
  <van-tabbar-item
    replace
    to="/add"
    icon="plus"
  >
    发布
  </van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';

export default {
  name: 'App',
  components:{
    [TabbarItem.name]:TabbarItem,
    [Tabbar.name]:Tabbar
  }
}
</script>

<style>

</style>
