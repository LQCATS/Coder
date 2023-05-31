import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
import ums from "../../apis/ums";
// pages/meetingbooking/meetingbooking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    meetingNo: '',
    chooseDate: '',
    chooseTime: '',
    seltype: '',
    selmeeting: '',
    showdituser: false,
    nickname: '',
    userhead: ''
  },
  changedate(ev) {
    console.log(ev);
    this.setData({
      chooseDate: ev.detail.value
    })
  },
  changetime(ev) {
    this.setData({
      chooseTime: ev.detail.value
    })
  },
  changetx(ev) {
    this.setData({
      seltype: 0
    })
  },
  changewn(ev) {
    this.setData({
      seltype: 1
    })
  },
  checkmeeting(ev) {
    this.setData({
      selmeeting: ev.currentTarget.dataset.num
    })
  },
  wxlogin1() {
    wx.getUserProfile({
      desc: '登录',
      success: (userRes) => {
        wx.login({
          success(loginRes) {
            console.log(userRes, loginRes, 111);
            if (loginRes.code) {
              //发起网络请求
              wx.request({
                url: 'http://localhost:3000/api/wxLogin',
                method: 'POST',
                data: {
                  code: loginRes.code,
                  rowData: userRes.encryptedData,
                  iv: userRes.iv
                },
                header: {
                  'content-type': 'application/json'//默认值
                },
                success(res) {
                  console.log(res, 222);
                  wx.setStorageSync('LoginUser', JSON.stringify(res.data.data));
                }
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      }
    })
  },
  wxlogin2() {
    //1.getUserProfile获取用户信息，返回一个promis
    let userPromise = new Promise((resolve, reject) => {
      wx.getUserProfile({
        desc: '登录',
        success: (res) => {
          resolve(res)
        }
      })
    });
    //2.login获取用户code，返回一个promis
    let loginPromise = new Promise((resolve, reject) => {
      wx.login({
        success: (res) => {
          resolve(res)
        },
      })
    });
    //3.调用自己的接口
    userPromise.then(userRes => {
      loginPromise.then(loginRes => {
        wx.request({
          url: 'http://localhost:3000/api/wxLogin',
          method: 'POST',
          data: {
            code: loginRes.code,
            rowData: userRes.encryptedData,
            iv: userRes.iv
          },
          header: {
            'content-type': 'application/json'//默认值
          },
          success(res) {
            console.log(res, 222);
            wx.setStorageSync('LoginUser', JSON.stringify(res.data.data));
          }
        })
      })
    })
  },
  wxlogin3() {
    wx.login({
      success: (loginRes) => {
        wx.request({
          url: 'http://localhost:3000/api/wxCodeLogin', //仅为示例，并非真实的接口地址
          method: "POST",
          data: {
            code: loginRes.code
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: (res) => {
            console.log(res.data)
            wx.setStorageSync('LoginUser', JSON.stringify(res.data.data));
            this.setData({
              showdituser: true
            })
          }
        })
      },
    })
  },
  uploadavatar(ev) {
    console.log(333, ev);
    wx.uploadFile({
      url: 'http://localhost:3000/api/uploadImg', //仅为示例，非真实的接口地址
      filePath: ev.detail.avatarUrl,
      name: 'file',
      success: (res) => {
        console.log(444, res);
        const data = JSON.parse(res.data);
        this.setData({
          userhead: data.imgUrl
        })

      }
    })
  },
  enterUpdate(ev) {
    //点击确认按钮触发的事件
    console.log(this.data.userhead, this.data.nickname, 555);
    let loginUser = wx.getStorageSync('LoginUser');
    if (loginUser) {
      loginUser = JSON.parse(loginUser);
      let id = loginUser.id;
      let token = loginUser.token;
      console.log(token);
      wx.request({
        url: 'http://localhost:3000/api/updateUmsStudent',
        method: "POST",
        data: {
          id,
          name: this.data.nickname,
          headImg: this.data.userhead
        },
        header: {
          'content-type': 'application/json', // 默认值
          "Authorization": 'bearer ' + token
        },
        success: (res) => {
          if (200 == res.data.code) {
            //提示用户信息
            Notify({ type: 'success', message: '修改用户信息成功' });
            console.log(111);
            //覆盖本地存储中的用户信息
            loginUser.name = this.data.nickname;
            loginUser.headImg = this, this.data.userhead;
            wx.setStorageSync('LoginUser', JSON.stringify(loginUser));
          }
        }

      })
    }
  },
  dosumbit(ev) {
    //回调请求接口，可能会造成回调地狱
    // this.wxlogin1();
    // this.wxlogin2();
    let loginUser = wx.getStorageSync('LoginUser');
    if (loginUser) {
      loginUser = JSON.parse(loginUser);
      //登录成功的情况下，调用预定会议室接口
      ums.bookingMeetingRoom({
        fkRoomId: this.data.meetingNo,
        bookingDate: this.data.chooseDate,
        bookingTime: this.data.chooseTime,
        fkUserId: loginUser.id
      }).then(res => {
        if (200 == res.code) {
          Notify({ type: "success", message: "恭喜你预定成功" });
        } else {
          Notify({ type: "danger", message: res.msg });
        }

      })

    } else {
      //未登录的情况下，调用微信的登录
      this.wxlogin3();
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
    if (options.qrcode) {
      this.setData({
        meetingNo: options.qrcode
      })
    }

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