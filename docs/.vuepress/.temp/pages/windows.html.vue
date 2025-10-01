<template><div><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h2>
<h3 id="github-发行版" tabindex="-1"><a class="header-anchor" href="#github-发行版"><span>Github 发行版</span></a></h3>
<p><a href="https://github.com/AZ-Studio-2023/RailGo/releases" target="_blank" rel="noopener noreferrer">传送门</a></p>
<h3 id="microsoft-store" tabindex="-1"><a class="header-anchor" href="#microsoft-store"><span>Microsoft Store</span></a></h3>
<p><a href="https://apps.microsoft.com/detail/9ntrz0dmckgz?mode=mini" target="_blank" rel="noopener noreferrer"><img :src="msStoreImgSrc" width="200"/></a></p>
<h2 id="开源" tabindex="-1"><a class="header-anchor" href="#开源"><span>开源</span></a></h2>
<p>Windows版本使用WinUI3开发，目前已经在Github开源，欢迎Star~</p>
<RepoCard repo="AZ-Studio-2023/RailGo" /></div></template>


<script setup>
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
const msStoreImgSrc = `https://get.microsoft.com/images/zh-cn ${document.documentElement.getAttribute('data-theme') || 'dark'}.svg`
</script>