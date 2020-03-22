<template>
    <el-container>
        <register-header :name="name" class="header"/>
        <el-card class="main">
            <el-main>
                <el-table
                  :data="data.result"
                  style="width: 100%">
                  <el-table-column
                    prop="time"
                    label="日期"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="temperature"
                    label="温度">
                  </el-table-column>
                  <el-table-column
                    prop="phone"
                    label="手机号码">
                  </el-table-column> 
                  <el-table-column
                    prop="department"
                    label="部门">
                  </el-table-column>
                  <el-table-column
                    prop="note"
                    label="备注">
                  </el-table-column>
                </el-table>
                <el-row type="flex">
                    <el-col :span="22" style="float: right; text-align: right; margin: 10px">
                        <div class="block">
                          <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[10, 15, 20, 25]"
                            :page-size="10"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="data.count">
                          </el-pagination>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
        </el-card>
        <el-footer style="margin-top: 10px"> 
            <span>Copyright © 2020 jax.chen <br> 
                接单请联系18617031873
            </span>
        </el-footer>
    </el-container>
  </div>
</template>

<script>
import { getInfo } from '~/api/register'
import { registerHeader } from './components'

export default {
  name: 'register',
  components: { registerHeader },
  data() {
    return {
        name: "",
        currentPage: 1,
        pageSize: 10,
        content: "",
        desc: "",
        title: "",
        search_field: "company",
        data: {
            result: [],
            count: 0
        } 
    }
  },
  created () {
    this.init()
  },
  computed: {
    blogData: function () {
        return {
            title: this.title,
            desc: this.desc,
            content: this.content
        }
    },
    listArg: function () {
        return {
            page_size: this.pageSize,
            page: this.currentPage,
            search: this.name,
            search_field: this.search_field
        }
    }
  },
  methods: {
    init () {
        this.name = this.$route.params.name
        this.handleSearch()
    },
    handleSearch () {
        getInfo(this.listArg).then(res => {
            this.data = res
        })
    },
    handleSizeChange(val) {
        this.pageSize = val
        this.currentPage = 1
        this.handleSearch()
    },
    handleCurrentChange(val) {
        this.currentPage = val
        this.handleSearch()
    },
  }
};
</script>

<style scoped>
.editor-content{
    margin-top: 20px;
    text-align: left;
  }
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