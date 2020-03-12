<template>
    <tinymce v-model="content"></tinymce>
</template>

<script>
import Tinymce from "../../components/Tinymce"

export default {
  name: 'blog-add',
  components: { Tinymce },
  data() {
    return {
      content: ""
    }
  },
  created () {
    // this.init()
  },
  methods: {
    init () {
    }
  }
};
</script>

<style scoped>
</style>
