<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          :router="true"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="Dashboard">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="fundGroupList">
            <i class="el-icon-star-off"></i>
            <span slot="title">蛋卷基金组合</span>
          </el-menu-item>
          <el-menu-item index="FundStatisticsList">
            <i class="el-icon-tickets"></i>
            <span slot="title">选中基金统计</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss">
</style>
