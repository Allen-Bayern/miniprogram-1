// components/navigation-bar/index.js
const app = getApp();

Component({
  properties: {
    // defaultData（父页面传递的数据-就是引用组件的页面）
    defaultData: {
        type: Object,
        value: {
            title: "我是默认标题"
        },
        observer: function(newVal, oldVal) {}
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    navBarHeight: app.globalData.navBarHeight, //导航栏高度
    menuRight: app.globalData.menuRight, // 胶囊距右方间距（方保持左、右间距一致）
    menuBottom: app.globalData.menuBottom,
    menuHeight: app.globalData.menuHeight,
    menuTop: app.globalData.menuTop,
  },
})
