<template>
  <div :style="{display:'flex',flexDirection:'column',alignItems:'center'}">
    <van-uploader v-model="fileList" :after-read="afterRead"    :max-count="1"/>
    <van-cell-group style="width:100%">
      <van-field v-model="title" placeholder="文章标题" label="文章标题" />
      <van-field v-model="summary" placeholder="文章简介" label="文章简介" />
      <van-field v-model="content" placeholder="文章内容" label="文章内容" type="textarea"/>
    </van-cell-group>
    <van-button type="primary" @click="handelAdd" class="add-button">提交</van-button>
  </div>
</template>

<script>
import { Uploader, CellGroup, Field, Button } from "vant";

export default {
  props: {},
  data() {
    return {
      fileList: [],
      title: "",
      summary: "",
      content: "",
      img:''
    };
  },
  created() {},
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      this.img=file.content
    },
    handelAdd(){
        const data={
            title:this.title,
            summary:this.summary,
            content:this.content,
            img:this.img
        }
       fetch("/article/create",{
         method:'post',
         headers:{
           'Content-type':'application/json',
         },
         body:JSON.stringify(data)
       })
        .then(res => {
          return res.json();
        })
        .then(res => {
          if (res.status == 200) {
                     this.$toast.success('发布成功');
                     this.$router.push('/')

          } else {
            this.$toast.fail(res.errMsg);
          }
        });
    }
  },
  components: {
    [Uploader.name]: Uploader,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button
  }
};
</script>

<style scoped>
.add-button{
    position: absolute;
    left :0;
    bottom: 80px;
    width: 100%;
}
</style>
