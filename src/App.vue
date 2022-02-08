<template>
  <div>
    <div class="App">
        <div>Hello {{msg}}</div>
         <img src="./assects/logo.png" style="display:inline-block;">
          <img :src="imgUrl1" style="display:block;width:100%;height:100%;">
    </div>
    <div>
        <router-link to="/page1">go page1</router-link>
        <router-link to="/page2">go page2</router-link>
        </div>
        <div>
        <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
        msg: "diyVue",
        imgUrl1: require('./assects/logo1.jpg')
    };
  }
};
</script>
<style lang="scss" scoped>
    .App{
        color:burlywood;
    }
</style>
