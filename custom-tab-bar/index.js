Component({
  data: {
    selected: 0,
    list: [{
      pagePath: '/pages/logs/logs',
      text: 'Logs',
      iconPath: '/static/tabbar/log.jpg',
      selectedIconPath: '/static/tabbar/log-selected.jpg'
    },
    {
      pagePath: '/pages/index/index',
      text: '主页',
      iconPath: '/static/tabbar/home.jpg',
      selectedIconPath: '/static/tabbar/home-selected.jpg'
    },
    {
      pagePath: '/pages/wxml/index',
      text: 'WXML',
      iconPath: '/static/tabbar/wxml.jpg',
      selectedIconPath: '/static/tabbar/wxml-selected.jpg'
    }]
  },
  methods: {
    handleClick(e) {
      const path = e.currentTarget.dataset.path;
      const index = e.currentTarget.dataset.index;
      wx.switchTab({
        url: path,
      });
      this.setData({
        selected: index
      });
    }
  }
});