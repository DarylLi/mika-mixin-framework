# mika-minxin-framework

vue2 与 vue3 版本同时共存至一个项目中（当前主项目为 react）。

```bash
$ npm install
$ npm run build
```

<!-- why do this -->

这是一次尝试，vue 官方已提供 demi 解决 vue2，vue3 共存问题：<a href="https://github.com/vueuse/vue-demi">https://github.com/vueuse/vue-demi</a>

本人尝试的思路：

项目以 vue 某一版本为主，webpack 配置及应用引用方式保持不变（当前以 vue 3.2.13 为主）

在另一版本(vue 2.7.16)则通过修改:

    (1). vue2,vue3双版本npm下载及重命名：

```js
    //package.json相关配置
    {
        "vue": "3.2.13",
        "vue2": "npm:vue@^2.7.16",
    }
```

    (2). 文件类型调整：通过vue2,vue3不同版本对应文件夹区分编译内容

    (3). webpack相关修改：每一版本对应相应适配的vue-loader版本，如当前vue3对应17.4.2, vue2则对应13.3.0。在当前webpack配置中要
    根据上一步骤对新类型文件的loader配置作出调整:

```js
module: {
  rules: [
    // vue3对应文件
    {
      test: /\.vue$/,
      include: [path.resolve(__dirname, "src/vue3")],
      loader: "vue-loader",
    },
    // vue2对应文件
    {
      test: /\.vue$/,
      include: [path.resolve(__dirname, "src/vue2")],
      loader: path.resolve("extra/vue-loader/lib/loader.js"), //已发布相应npm包 无问题可替换为 'vue-loader-mika',
    },
  ];
}
```

    (4). 上述步骤调整后来到重头部分，loader相关调整。当前本地下载了版本为13.3.0的vue-loader包，并根据相应依赖作出代码上的调整（具体调整后续整理出来）,使其能够编译vue2.0版本组件
    (5).版本件组件相互引用：若vue3应用的内容想要引用vue2的组件，或相反。则使用vue所提供的运行时引用方法，通过暴露两个版本的实例，提供方法应用的来源：

```js
//vue3引用vue2:

new Vue({
  el: "#vue2Entry",
  components: { Vue2Component },
  template: "<Vue2Component/>",
});

//vue2引用vue3:

Vue.createApp(Vue3Component).mount("#vue3Entry");
```

## Preview:
<img width="1432" alt="image" src="https://github.com/user-attachments/assets/248aa21b-e05b-4069-bab7-daaf3519d94c">

<!-- 图片文件转换逻辑：生成一份公用json文件存储图片base64，编译项目后挂载至页面加载前的请求中。并注册至全局window or indexdb? -->
