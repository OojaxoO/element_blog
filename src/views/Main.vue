<template>
    <el-container style="height: 100%">
        <header />
        <el-main>
            <transition name="fade-transform" mode="out-in">
                <!-- <keep-alive :include="cachedViews"> -->
                <keep-alive>
                    <router-view :key="key" />
                </keep-alive>
            </transition>
        </el-main>
        </div>
        <div>
        <el-footer>Footer</el-footer>
        </div>
    </el-container>
</template>

<script>
import { header } from '../layout/header.vue'

export default {
  name: 'Main',
  computed: {
    // cachedViews() {
    //   return this.$store.state.tagsView.cachedViews
    // },
    key() {
      return this.$route.path
    }
  }
}
</script>

<style>
  header, .el-footer {
    background-color: #fff;
    color: #333;
    text-align: center;
    /* line-height: 60px; */
  }
  .el-main {
    background-color: #eff3f5;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  
</style>