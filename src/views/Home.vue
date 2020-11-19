<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="defaultActive"
          class="el-menu-vertical-demo"
          :router="true"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="/dashboard">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/fundGroupList">
            <i class="el-icon-star-off"></i>
            <span slot="title">蛋卷基金组合</span>
          </el-menu-item>
          <el-menu-item index="/fundStatisticsList">
            <i class="el-icon-tickets"></i>
            <span slot="title">选中基金统计</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  data() {
    return {
      defaultActive: "/dashboard",
    };
  },
  components: {
    // HelloWorld
  },
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  created() {
    this.defaultActive = this.$route.path;
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(10px);
}
</style>
