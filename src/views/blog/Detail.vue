<template>
  <div>
    <h3>{{ data.title }}</h3>
    <div style="text-indent:2em; text-align: left">{{ data.desc }}</div>
    <div class="editor-content" v-html="data.content" />
  </div>
</template>

<script>
import { getBlogs, getBlog } from '../../api/home'

export default {
  name: 'blog-detail',
  data() {
    return {
        id: null,
        data: {},
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
        this.id = this.$route.params.id
        getBlog(this.id).then(data => {
            this.data = data 
        })
    }
  }
};
</script>

<style scoped>
.editor-content{
    margin-top: 20px;
    text-align: left;
  }
</style>
