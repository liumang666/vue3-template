<template>
  <div class="container">
    <div class="side">
      <div>
        <router-link to="/manage/home">首页</router-link>
      </div>
      <div>
        <router-link to="/manage/about">关于</router-link>
      </div>
      <div>
        <router-link to="/home">web</router-link>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="less">
.container {
  display: flex;
  .side {
    background: #eee;
    flex: 0 0 300px;
  }
  .content {
    flex: 1 1 auto;
  }
}
</style>
