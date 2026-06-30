---
title: 安装
createTime: 2025/05/25 20:16:46
permalink: /android/join.html
---

## 安装方式
### 最新版本
> 点击下方按钮，获取到链接后会自动弹出下载

<ClientOnly>
  <button 
    class="download-btn" 
    @click="handleDownload"
    :disabled="isLoading"
  >
    <span v-if="!isLoading">立即下载</span>
    <template v-else>
      <span class="spinner"></span>
      <span style="margin-left: 8px;">获取下载链接中...</span>
    </template>
  </button>
</ClientOnly>

### 自选版本
请打开 ==[RailGo Update](https://update.railgo.zenglingkun.cn/update/pack/android)== ，选择需要的版本下载。
> [!TIP]
> 根据Android系统软件包安装规则，若系统内已安装新版本软件，则无法直接重新安装旧版。如需安装旧版，需要卸载新版后再进行安装。
>
>请注意，该过程将清除您的用户数据，包括但不限于搜索记录、图标兑换情况等，我们无法恢复。

### 网盘（备用）
请打开 ==[辰墨网盘](https://pan.zenglingkun.cn/s/5q5HX)== 。
> [!important]
> 请认准==辰墨==的文件分享，避免下载到了恶意文件

## V2 公众预览版本
我们已经推送RailGo 2.0.0 Build 20000版本，V2系列版本将逐渐将接口更换至全新的V2接口。
有关V1与V2接口的差异，可查看 [RailGo API文档](https://api.railgo.dev)。
> [!WARNING]
> RailGo V2是实验性产品，如无法接受在使用过程中遇到各样的Bug，请不要升级至V2版本。
>
> 如需退级，请查看[自选版本](#自选版本)处的说明信息。

### 获取公测码
由于V2版本API对服务器性能开销较大，且可能出现一些未知的错误，V2版本使用需要在[RailGo Center](https://center.zenglingkun.cn)获取公测码，积分不足可在活动中心领取积分补偿。

更多有关公测码鉴权的信息，可查阅 [开箱即用体验 - 公测版鉴权](/use/oobe.html#公测版鉴权) 。


<script>
export default {
  data() {
    return {
      isLoading: false,
      apiUrl: 'https://api.state.railgo.zenglingkun.cn/api/v1/url/pack/android'
    }
  },
  methods: {
    async handleDownload() {
      if (this.isLoading) return
      this.isLoading = true

      try {
        const response = await fetch(this.apiUrl)
        const data = await response.json()
        
        if (data.code === 200 && data.url) {
          // 先重置按钮状态，再进行跳转
          this.isLoading = false
          // 使用 window.location.href 跳转
          window.location.href = data.url
        } else {
          alert('获取下载链接失败，请稍后重试或联系管理员。')
          this.isLoading = false
        }
      } catch (error) {
        console.error('请求下载接口出错:', error)
        alert('网络请求失败，请检查网络连接后重试。')
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
.download-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 30px;
  background-color: #114598;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  min-width: 180px;
  gap: 8px;
}

.download-btn:hover:not(:disabled) {
  background-color: #4a7ac7;
}

.download-btn:disabled {
  background-color: #a0a0a0;
  cursor: not-allowed;
  opacity: 0.8;
}

.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 0.8s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
