<template>
  <div class="container">
    <div class="header">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/manage">管理</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="less">
.container {
  .header {
    display: flex;
    gap: 20px;
    background: #eee;
    margin-bottom: 20px;
  }
  .content {
  }
}
</style>
