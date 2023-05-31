// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listImg: [
      "https://woniufile.oss-cn-hangzhou.aliyuncs.com/banner/8%E5%91%A8%E5%B9%B4.com.pc.jpg",
      "https://woniuxy.com/static/woniuopen/img/woniubanner-2.png",
      "https://woniufile.oss-cn-hangzhou.aliyuncs.com/banner/banner.com.pc.jpg"
    ],
    listNav: [
      { src: '/statics/images/icon/notice_B.png', text: '扫描预定' },
      { src: '/statics/images/icon/ico_huiyi_.png', text: '参与会议' },
      { src: '/statics/images/icon/ico_zuowei_.png', text: '预约会议室' },
    ]

  },
  doScan(ev) {
    console.log('doScan', ev);
    console.log('doScan', ev.detail);
  },
  doImg(ev) {
    console.log('doImg', ev);
  },
  gomeeting(ev) {
    wx.navigateTo({
      url: "/pages/meeting/meeting",
    })
  },
  gomeetingbooking(ev) {
    // 只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log(res)
        //获取二维码中会议室的编号
        let meetingNo = res.result;
        wx.navigateTo({
          url: `/pages/meetingbooking/meetingbooking?qrcode=${meetingNo}`,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})