// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });

    this.setNavbarInfo();
  },

  globalData: {
    userInfo: null,
    navBarHeight: 0,
    menuBottom: 0,
    menuRight: 0,
    menuHeight: 0,
    menuTop: 0,
  },

  setNavbarInfo(){
    wx.getSystemInfo(
      {
        success: result => {
          const {
            top, right, height
          } = wx.getMenuButtonBoundingClientRect();
          const {
            statusBarHeight, screenWidth
          } = result;
  
          this.globalData.navBarHeight = statusBarHeight + 44;
          this.globalData.menuBottom = top - statusBarHeight;
          this.globalData.menuRight = screenWidth - right;
          this.globalData.menuHeight = height;
          this.globalData.menuTop = top;
        }
      }
    );
  },

});
