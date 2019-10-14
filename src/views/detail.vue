<template>
  <div class="detail">
    <div class="title">{{detail.title}}</div>
    <div class="summary">{{detail.summary}}</div>
    <div class="content">{{detail.content}}</div>
    <div class="create-time">{{detail.createTime}}</div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      detail: {
        image: "http://pic1.win4000.com/wallpaper/6/51e35bd76cd74.jpg",
        title: "标题",
        createTime: "2019-10-30 10:20:20",
        summary: "",
        content: "",
        id: 1
      }
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      fetch("/article/detail/" + this.$route.query.id)
        .then(res => {
          return res.json();
        })
        .then(res => {
          if (res.status == 200) {
            this.detail = res.data;
            this.detail.createTime = res.data.createTime
              ? moment(res.data.createTime).format("YYYY-MM-DD HH:mm:ss")
              : null;
          } else {
            this.$toast.fail(res.errMsg);
          }
        });
    }
  },
  watch:{
   $route(to,from){
        this.getDetail();

  }
  }
};
</script>

<style scoped>
.detail {
  padding: 20px;
  text-align: left;
}
.detail .title {
  font-size: 25px;
  padding-bottom: 20px;
}
.detail .summary {
  padding: 20px;
  background: #dcdcdc;
}
.detail .content {
  padding-bottom: 20px;
  text-indent: 2em;
}
.detail .create-time {
  color: #9c9c9c;
  text-align: right;
}
</style>
