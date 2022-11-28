# 自己修改的 listen1 安卓版

项目的原地址：[listen1_mobile](https://github.com/listen1/listen1_mobile)

## 简介

我比较需要手机和电脑之间的同步功能，所以就改善了一下

修改同步功能的基本思路就是输入 gist 文件地址，然后读取它，最后覆盖手机歌单

<img src="https://github.com/j-wyatt-a/wyattj.github.io/raw/main/b.jpg" width="300">
<img src="https://github.com/j-wyatt-a/wyattj.github.io/raw/main/a.jpg" width="300">

## 使用方法

操作
- 打开设置
- 找到「从 gist 恢复」，点击进入
- 填入 gist 文件地址
- 点击「恢复到本地」
- 同步过程的详情会展示在下方文本框里

说明
- 这里只能把 gist 歌单文件恢复到手机本地，所以只推荐在电脑上编辑歌单
- gist 歌单文件会`覆盖`手机原本的歌单
- 这个 gist 地址是需要科学上网才能访问的，所以注意检查网络状况
- 这里的文件地址可以是任何的网络地址，可以不是 github gist 网站，可以是自己的域名网站里的地址

## 开发方法

开发环境
- Clone 或下载本项目代码
- `yarn` 安装依赖
- USB 连接手机，打开开发者调试，确定授权
- `yarn start:android` 将在安卓真机或模拟器（取决于手机是否连接）运行项目

Apk 打包

```
   cd .\android\
   ./gradlew assembleRelease
   react-native run-android --variant=release
```

更详细的打包信息（包括生成 keystone）

https://reactnative.cn/docs/signed-apk-android

## 期待贡献者

本人时间有限，只能对自己需要的功能做一下加工

这是一个优秀的软件，我想看到它能更加好用，所以如果你有编码能力的话，非常希望你能做出自己的贡献 

-----> 项目的原地址：[listen1_mobile](https://github.com/listen1/listen1_mobile)

