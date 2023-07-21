<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

import { useCounterStore } from '@/store/counter'
// 实例化
const counterStore = useCounterStore()
</script>

<template>
  <div>
    <h1 class="text-3xl">vue3-element-admin-父组件</h1>
    <el-button type="primary" @click="counterStore.increment">count++</el-button>

    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
