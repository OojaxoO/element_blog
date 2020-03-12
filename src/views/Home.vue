<template>
    <div>
        <el-row>
            <el-col :span="12" v-for="d in data.result" :key="d.id">
                <el-card shadow="hover" style="margin: 10px">
                    <div slot="header" class="clearfix">
                        <div style="float: left">
                            <h3 style="text-align: left; margin: 3px 0">{{ d.title }}</h3>
                            <el-tooltip placement="right-end" effect="dark">
                                <div class="contentShow" slot="content">{{ d.desc }}</div>
                                <h6 style="margin: 3px 0" class="oneLineText">{{ d.desc }}</h6>
                            </el-tooltip>
                        </div>
                    </div>
                    <div class="content" v-html="d.content">
                    </div>
                    <el-divider></el-divider>
                    <div class="cardFooter"> 
                        <div style="float: left">
                            <i style="color: blue" class="el-icon-view" />{{ d.view }}
                            <el-divider direction="vertical"></el-divider>
                            <i style="color: red" class="el-icon-star-off" @click="handleAddLove(d)" />{{ d.love}}
                        </div>
                        <div style="float: right">
                            <router-link style="text-decoration: none" :to="{path: '/blog/'+d.id}" @click.native="handleDetail(d)">
                                <el-link type="primary" icon="el-icon-arrow-right">详情</el-link>
                            </router-link>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row type="flex">
            <el-col :span="2">
                <el-button @click="dialogVisible = true" style="margin: 10px" v-if="isAdmin()">添加博客</el-button>
            </el-col>
            <el-col :span="22" style="float: right; text-align: right; margin: 10px">
                <div class="block">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[5, 10, 15, 25]"
                    :page-size="5"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="data.count">
                  </el-pagination>
                </div>
            </el-col>
        </el-row>
        <el-dialog fullscreen title="添加笔记" :visible.sync="dialogVisible">
            <div class="components-container">
                <el-input v-model="title" placeholder="标题"></el-input>
                <el-input v-model="desc" placeholder="描述"></el-input>
                <tinymce v-model="content" :height="300" />
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleAddBlog">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { getBlogs, getBlog, updateBlog, createBlog } from '../api/home'
import Tinymce from "../components/Tinymce"

export default {
  name: 'home',
  components: { Tinymce },
  data() {
    return {
        dialogVisible: false,
        currentPage: 1,
        pageSize: 5,
        content: "",
        desc: "",
        title: "",
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
              //search: this.search
          }
      }
  },
  filters: {
      show: function(value) {
          return value.slice(0, 100)
      }
  },
  methods: {
    init () {
        this.handleSearch()
    },
    handleSearch () {
        getBlogs(this.listArg).then(res => {
            this.data = res
        })
    },
    isAdmin () {
        console.log(this.$store.getters.roles)
        console.log(this.$store.state.roles)
        console.log(this.$store)
        return this.$store.getters.roles.includes("admin")
    },
    handleAddLove (d) {
        d.love = d.love + 1 
        updateBlog(d)
    },
    handleDetail (d) {
        d.view = d.view + 1 
        updateBlog(d)
    },
    handleSizeChange(val) {
        this.pageSize = val
        this.currentPage = 1
    },
    handleCurrentChange(val) {
        this.currentPage = val
    },
    handleAddBlog() {
        createBlog(this.blogData).then(res => {
            this.dialogVisible = false
            this.$message({
              message: '添加成功',
              type: 'success'
            });
        }).catch(err => {
            console.log(err)
            this.dialogVisible = false
        })
    },
  }
};
</script>

<style scoped>
div /deep/ .el-divider--horizontal {
    display: block;
    height: 1px;
    width: 100%;
    margin: 12px 0;
}
div /deep/ .el-dialog__footer {
    text-align: center
}
.content {
    /* font-size: 15px; */
    /* text-indent:2em; */
    text-align: left;
    height: 150px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
}
.contentShow {
    max-width: 200px;
}
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .oneLineText {
    max-width: 150px;
    text-align: left; 
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .tooltipShow {
	max-height: 90px;
	white-space: nowrap;
	text-overflow: ellipsis;
	-o-text-overflow: ellipsis;
    word-wrap:break-word;  
    word-break:break-all; 
  }
  .cardFooter {
      padding-bottom: 12px; 
  }
  .editor-content{
    margin-top: 20px;
  }

</style>
