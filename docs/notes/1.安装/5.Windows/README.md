---
title: Windows
createTime: 2025/05/25 20:23:03
permalink: /windows.html
---

<script setup>
import { onMounted, ref } from 'vue'
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'

const msStoreImgSrc = ref('')

onMounted(() => {
  const theme = document.documentElement.getAttribute('data-theme') || 'dark'
  msStoreImgSrc.value = `https://get.microsoft.com/images/zh-cn ${theme}.svg`
})
</script>

## 下载

### Github 发行版

[传送门](https://github.com/RailGoApps/RailGo-WinUI/releases)

### Microsoft Store

[<img :src="msStoreImgSrc" width="200"/>](https://apps.microsoft.com/detail/9ntrz0dmckgz?mode=mini)

## 开源

Windows版本使用WinUI3开发，目前已经在Github开源，欢迎Star~

<RepoCard repo="RailGoApps/RailGo-WinUI" />
