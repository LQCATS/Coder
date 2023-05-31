const BASE_URL = 'http://localhost:3000';

export default {
  post(url, parmas) {
    wx.showLoading({
      title: '请求中',
      mask: true
    })
    let promise = new Promise((resolve, reject) => {
      //1.拿到当前登录信息中的token
      let loginUser = wx.getStorageSync('LoginUser');
      let token = '';
      if (loginUser) {
        loginUser = JSON.parse(loginUser);
        token = loginUser.token;
      }

      wx.request({
        url: `${BASE_URL}${url}`,
        method: 'POST',
        data: parmas,
        header: {
          'content-type': 'application/json', // 默认值
          'Authorization': 'bearer ' + token
        },
        success: (res) => {
          resolve(res.data);
        },
        fail(err) {
          reject(err);
        },
        complete() {
          wx.hideLoading();
        }

      })
    });
    return promise;
  },

  get(url, parmas) {
    wx.showLoading({
      title: '请求中',
      mask: true
    })
    let promise = new Promise((resolve, reject) => {
      //1.拿到当前登录信息中的token
      let loginUser = wx.getStorageSync('LoginUser');
      let token = '';
      if (loginUser) {
        loginUser = JSON.parse(loginUser);
        token = loginUser.token;
      }

      wx.request({
        url: `${BASE_URL}${url}`,
        method: 'GET',
        data: parmas,
        header: {
          'content-type': 'application/json', // 默认值
          'Authorization': 'bearer ' + token
        },
        success: (res) => {
          resolve(res.data);
        },
        fail(err) {
          reject(err);
        },
        complete() {
          wx.hideLoading();
        }

      })
    });
    return promise;
  }
}