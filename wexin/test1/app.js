// app.js

//应用注册函数，类似于vue中的 new Vue这行代码
App({
  //生命周期函数：应用启动时，只调用一次
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  //全局变量存放的位置
  globalData: {
    userInfo: null
  }
})
