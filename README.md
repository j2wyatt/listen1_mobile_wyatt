# 自己修改的 listen1 安卓版

项目的原地址：[listen1_mobile](https://github.com/listen1/listen1_mobile)

## 简介

我比较需要手机和电脑之间的同步功能，所以就改善了一下

修改同步功能的基本思路就是输入 gist 页面地址，然后根据这个页面提取出 json 歌单的文件地址，接着访问它，然后读取它，最后覆盖手机歌单

> 特别注意！！！这里只能填 gist 仓库地址
> 
> 这个 gist 页面地址指的是你的 gist 仓库地址，类似这样：https://gist.github.com/1312312312/d6b3cea9ff734c2bb644a5837a5414b8
> 
> 你只需要把这个地址填到文本框里就可以了，软件会自动从这个页面里提起到歌单的 json 文件地址
> 
> 为什么这样做呢，因为如果以后你更新了电脑的歌单，那么 josn 文件地址会变化的，所以就需要再次填一下新的文件地址，而现在这种方式就只需要填一次

<span>
<img src="https://github.com/j-wyatt-a/wyattj.github.io/raw/main/b.jpg" width="300">
<img src="https://github.com/j-wyatt-a/wyattj.github.io/raw/main/a.jpg" width="300">
</span>

## 使用方法

操作
- 打开设置
- 找到「从 gist 恢复」，点击进入
- 填入 gist 页面地址
- 点击「恢复到本地」
- 同步过程的详情会展示在下方文本框里

说明
- 这里只能把 gist 歌单文件恢复到手机本地，所以只推荐在电脑上编辑歌单
- gist 歌单文件会`覆盖`手机原本的歌单
- 这个 gist 地址是需要科学上网才能访问的，所以注意检查网络状况

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

