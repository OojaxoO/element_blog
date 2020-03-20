<template>
    <el-card class="header">
        <el-header style="height: inherit;">
            <el-row type="flex" :gutter="5" align="middle">
                <el-col :span="24">
                    <div style="text-align: center">
                         {{ name }} 
                    </div>
                </el-col>
            </el-row>
        </el-header>
    </el-card>
</template>

<script>
export default {
    name: "MyHeader",
    props: {
        name: ''
    },
    data () {
        return {
        }
    }, 
    computed: {
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