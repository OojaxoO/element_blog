<template>
    <el-card class="header">
        <el-header style="height: inherit;">
            <el-row type="flex" :gutter="5" align="middle">
                <el-col :span="3">
                    <div style="text-align: left">
                        <router-link style="text-decoration: none; color: CornflowerBlue" to="/">
                            读书笔记
                        </router-link>
                    </div>
                </el-col>
                <el-col :offset="12" :span="9">
                    <el-input size="small" v-model="input" placeholder="搜索"/>
                    <router-link 
                        v-for="route in router" 
                        :key="route.path" 
                        style="text-decoration: none;color: CornflowerBlue" 
                        :to="route.path">
                        {{ route.name }}
                    </router-link>
                </el-col>
            </el-row>
        </el-header>
    </el-card>
</template>

<script>
export default {
    name: "MyHeader",
    data () {
        return {
            input: '',
            exclude_route: ["/", "/login"]
        }
    }, 
    computed: {
        router: function () {
            return this.$router.options.routes.filter(item => !item.hidden)
        }
    }
}
</script>

<style scoped>
.el-header {
    background-color: #fff;
    color: #333;
    text-align: center;
}
.header {
    margin-left: 8%;
    margin-right: 8%;
}
</style>