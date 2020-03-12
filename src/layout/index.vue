<template>
    <el-container>
        <my-header class="header"/>
        <el-card class="main">
            <el-main>
                <transition name="fade-transform" mode="out-in">
                    <!-- <keep-alive :include="cachedViews"> -->
                    <keep-alive>
                        <router-view :key="key" />
                    </keep-alive>
                </transition>
            </el-main>
        </el-card>
        <el-footer style="margin-top: 10px"> 
            <span>Copyright © 2020 jax.chen <br> 
                接单请联系18617031873
            </span>
        </el-footer>
    </el-container>
</template>

<script>
import { MyHeader } from './components'

export default {
  name: 'index',
  components: { MyHeader },
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

<style scoped>
  body > .el-container {
    position: relative;
    width: 100%;
  }
  .el-main {
    background-color: #fff;
    text-align: center;
  }
  .main {
    margin-right: 8%;
    margin-left: 8%;
    margin-top: 10px;
  }
</style>