---
title: 下载
createTime: 2025/05/25 20:16:46
permalink: /android/join.html
---
安卓版本已发布正式版本，请按照下方说明下载。
## 安装
### CDN直链下载

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

### 网盘（备用）
请打开 ==[辰墨网盘](https://pan.zenglingkun.cn/s/5q5HX)== 。
> [!important]
> 请认准==辰墨==的文件分享，避免下载到了恶意文件

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
  background-color: #3eaf7c;
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
  background-color: #114598;
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
