<template>
  <el-container style="height: 100%">
    <el-aside style="width: 250px;">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import commonAside from "../src/components/commonAside.vue";
export default {
  name: "Home",
  components: {
    commonAside,
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: white;
}
.el-main {
  padding-top: 0;
}
</style>