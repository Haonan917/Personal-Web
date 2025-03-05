<template>
  <el-menu
    default-active="1-4-1"
    background-color="#0765A0"
    text-color="#fff"
    active-text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  > 
  <div style="background-color:#0b4c75">
    <img class="me" src="../assets/avatar.jpg" alt="" />
    <div class="info">
      <h2 class="name">Haonan Chen</h2>
      <h2 class="name_chinese">陈昊楠</h2>
      <h2 class="email">haonanchen0815@163.com</h2>
      <h2 class="email">hnchen23@m.fudan.edu.cn</h2>
      <h2 class="email">Fudan University</h2>
      <h2 class="link">
        <a
          style="font-size: 14px; color: yellow; font-weight: bold"
          href="https://scholar.google.com/citations?hl=zh-CN&amp;user=cRWgAzcAAAAJ"
          >Google Scholar</a
        >
      </h2>
      <h2 class="link">
        <a href="https://www.semanticscholar.org">[Semantic Scholar]</a>
        <a href="https://www.researchgate.net/profile/Youcheng-Li-2"
          >[Research Gate]</a
        >
      </h2>
      <h2 class="link">
        <a href="https://github.com/xjtulyc">[Github]</a>
        <a href="https://paperswithcode.com/">[PaperWithCode]</a>
      </h2>
      <h2 class="link">
        <a href="https://www.zhihu.com/people/yan-cheng-86-84">[知乎]</a>
        <a href="https://www.youtube.com">[Youtube]</a>
        <a href="https://space.bilibili.com">[B站]</a>
      </h2>
      <h2 class="link">
        <a href="https://www.linkedin.com">[LinkedIn]</a>
        <a href="https://twitter.com">[Twitter]</a>
        <a href="https://www.xiaohongshu.com">[小红书]</a>
      </h2>
      <h2 class="link">
        <a href="https://youchengli.com/pdf/youcheng_li_cv.pdf">[简历/CV]</a>
      </h2>
    </div>
  </div>
    
    <el-menu-item
      @click="clickMenu(item)"
      :index="item.path + ''"
      v-for="item in noChildren"
      :key="item.path"
    >
      <i style="color:#fff" :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      :index="item.index"
      v-for="item in hasChildren"
      :key="item.path"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item @click="clickMenu(subItem)" :index="subItem.index">{{
          subItem.label
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang="less" scoped>
.me {
  max-height: 180px;
  max-width: 180px;
  margin: 20px 35px;
  border-radius: 50%;
}
.info {
  color: white;
  text-align: center;
  padding-bottom: 20px;
}
.name {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
}
.name_chinese {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
}
.email {
  font-size: 14px;
  font-family: "Lato", Helvetica, Arial, sans-serif;
  font-style: italic;
  font-weight: 400;
}
.link{
    font-size: 14px;
    font-weight: 500;

  }
  .link > a{
    color: white;
    text-decoration: underline;
  }


::v-deep .el-menu-item:hover {
  background-color: #3c7eb0 !important;

}
</style>

<script>
export default {
  data() {
    return {
      menu: [
        {
          path: "/About",
          label: "About",
          name:'About',
          icon: "s-home",
          index: "1",
        },
        {
          path: "/Projects",
          label: "Projects",
          name:'Projects',
          icon: "menu",
          index: "2",
        },
        {
          path: "/Publications",
          label: "Publications",
          name:'Publications',
          icon: "tickets",
          index: "2",
        },
        {
          path: "/Teaching",
          label: "Teaching / Talks",
          name:'Teaching',
          icon: "s-custom",
          index: "2",
         
        },
        {
          path: "/Honors",
          label: "Honors / Awards",
          name:'Honors',
          icon: "collection-tag",
          index: "2",
         
        },
        {
          path: "/Selected",
          label: "Selected Media",
          name:'Selected',
          icon: "mic",
          index: "2",
        },
        {
          path: "/Awesome",
          label: "Awesome Lists",
          name:'Awesome',
          icon: "notebook-2",
          index: "2",
        },
        {
          path: "/Letter",
          label: "Letter",
          name:'Letter',
          icon: "edit",
          index: "2",
        },
        // {
        //   path: "/page",
        //   name: "page",
        //   label: "客户线索管理",
        //   icon: "edit",
        //   url: "Other/PageOne",
        //   index: "2",
        //   children: [
        //     {
        //       path: "/mail",
        //       name: "mail",
        //       label: "增长率",
        //       icon: "mail",
        //       url: "Mail/Mail",
        //       index: "1-1",
        //     },
        //   ],
        // },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      this.$router.push({
        name: item.name,
      });
      // this.$store.commit("selectMeun", item);
    },
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>