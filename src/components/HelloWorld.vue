<template>
  <div class="box">
    <h1>{{ msg }}</h1>
    <h1>{{ lang }}</h1>
    <el-row>
      <el-button @click="changeTheme">切换主题</el-button>
      <el-button @click="changeLocal">切换语言</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
import { changeTheme, blueTheme, pinkTheme } from "../styles/utils";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => {
    return {
      theme: "pink",
    };
  },
  computed: {
    lang() {
      return this.$t("route.dashboard")
    },
  },
  created() {
    this.changeTheme();
  },
  methods: {
    changeTheme() {
      const theme = this.theme === "pink" ? blueTheme : pinkTheme;
      this.theme = this.theme === "pink" ? "blue" : "pink";
      changeTheme(theme);
    },
    changeLocal() {
      this.$i18n.locale = this.$i18n.locale === "en" ? "zh" : "en";
    },
  },
};
</script>
<style scoped lang="scss">
@import "../styles/var.scss";
.box {
  // color: $primary-color;
  @include test($primary-color);
}
</style>
