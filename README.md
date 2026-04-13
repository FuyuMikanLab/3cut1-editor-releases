<div style="display: flex;">
  <img style="height: 128px;" src="https://github.com/user-attachments/assets/37fec583-9bf1-4714-90fb-e4d346fa5783" alt="fuyumikanlab-icon" />
</div>

# 3cut1-editor-releases

3cut1-editor ✧ [release page](https://fuyumikanlab.github.io/3cut1-editor-releases/)

## 使用说明

- [✧必看✧ 使用说明书](https://docs.qq.com/doc/DZGtvSUVyR2p5WHJY)

## 简介

1. 必须安装ffmpeg。
2. 可以不安装本地Whisper，原因见下条。
3. 本工具分为两部分：语音转文字+按照文字选取拼接语音片段。
   1. 语音转文字：
      1. 如果原视频存在字幕文件：推荐使用“B站下载助手”和“B站字幕提取”分别下载音频与字幕。
         - 除了花钱的火山tts api之外，最佳方案就是B站自己的自动生成字幕了。本地推理比较考验电脑性能，真的很慢。
      2. 如果原视频不存在字幕文件：使用火山api或者安装本地推理模型。具体请见：https://github.com/FuyuMikanLab/3cut1-editor-releases/wiki

4. windows导出音频时，会有黑色cmd弹窗狂闪，这是调用ffmpeg处理音频的必然现象，可以不用管，等导出完毕就不会闪了。这个暂时没想到办法解决。

5. 没开源因为vibe太丑陋了，git记录里secret乱飞。而且也不知道是不是真的有人用这个软件。如果有人用的话会逐步加起来。

6. 联系我：
   1. [b站](https://space.bilibili.com/2570276)
   2. [github](https://github.com/FuyuMikanLab/3cut1-editor-releases/issues)

7. 后面准备做的方向：
   1. 批量下载音频/字幕
   2. 导出文件转xml格式，联动剪辑软件
   3. 有想法欢迎联系我，欢迎一切

![workspace](./screenshot/image-workspace.png)
![import](./screenshot/image-import.png)
