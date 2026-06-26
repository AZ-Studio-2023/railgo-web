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
  <DownloadButton />
</ClientOnly>

### 网盘（备用）
请打开 ==[辰墨网盘](https://pan.zenglingkun.cn/s/5q5HX)== 。
> [!important]
> 请认准==辰墨==的文件分享，避免下载到了恶意文件

<script setup>
import { ref } from 'vue'

// 定义下载按钮组件
const DownloadButton = {
  setup() {
    const isLoading = ref(false)
    const btnText = ref('立即下载')
    const apiUrl = 'https://api.state.railgo.zenglingkun.cn/api/v1/url/pack/android'

    const handleDownload = async () => {
      if (isLoading.value) return
      isLoading.value = true
      btnText.value = '获取下载链接中...'

      try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        
        if (data.code === 200 && data.url) {
          window.location.href = data.url
        } else {
          alert('获取下载链接失败，请稍后重试或联系管理员。')
          isLoading.value = false
          btnText.value = '立即下载'
        }
      } catch (error) {
        console.error('请求下载接口出错:', error)
        alert('网络请求失败，请检查网络连接后重试。')
        isLoading.value = false
        btnText.value = '立即下载'
      }
    }

    return () => (
      <button 
        class="download-btn" 
        onClick={handleDownload}
        disabled={isLoading.value}
      >
        {isLoading.value ? (
          <>
            <span class="spinner"></span>
            <span style="margin-left: 8px;">{btnText.value}</span>
          </>
        ) : (
          <span>{btnText.value}</span>
        )}
      </button>
    )
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
  background-color: #2d8a5e;
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
