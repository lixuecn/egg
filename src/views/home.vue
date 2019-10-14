<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :offset="5"
    >
      <van-cell v-for="(item,index) in list" :key="index" @click="handelClick(item.id)">
        <div class="list">
          <div class="left">
            <img :src="item.img" />
          </div>
          <div class="right">
            <div class="title">{{item.title}}</div>
            <div class="create-time">{{item.createTime}}</div>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { List, Cell } from "vant";
import moment from "moment";
export default {
  props: {},
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  created() {},
  methods: {
    onLoad() {
      fetch("/article/lists")
        .then(res => {
          return res.json();
        })
        .then(res => {
          if (res.status == 200) {
            this.loading = false;
            this.finished = true;

            this.list = res.data.map(item => {
              if (item.createTime) {
                item.createTime = moment(item.createTime).format(
                  "YYYY-MM-DD HH:mm:ss"
                );
              }
              return item;
            });
          } else {
            Toast.fail(res.errMsg);
          }
        });
    },
    handelClick(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id
        }
      });
    }
  },
  components: {
    [List.name]: List,
    [Cell.name]: Cell
  }
};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: row;
}
.list .left,
img {
  width: 150px;
  height: 100px;
  border-radius: 10px;
}
.list .right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
}
.list .rigth .title {
  font-size: 18px;
}
.list .rigth .create-time {
  font-size: 12px;
  color: #9e9e9e;
}
</style>
