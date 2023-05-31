// 引入SDK核心类，js文件根据自己业务，位置可自行放置
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 0,
    latitude: 0,
    markers: [],
    setting: {
      showCompass: true,
      enableScroll: true,
      enable3D: true,
      enableOverlooking: true,
      enableTraffic: true
    }
  },
  onLoad() {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'ZO7BZ-YMDCZ-3OBXF-7S2W7-KG7PH-IHBF4'
    });
  },

  onReady() {
    wx.getLocation({
      success: res => {
        console.log("res", res);

        this.data.markers.push({
          id: 1,
          width: 20,
          height: 20,
          latitude: res.latitude,
          longitude: res.longitude,
          callout: {
            // 点击marker展示title
            content: "my"
          }
        });
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          markers: this.data.markers
        })
      }
    });

    // 调用接口
    qqmapsdk.search({
      keyword: '美食',
      success: res => {
        console.log(333, res);
        let i = 2;
        for (let item of res.data) {
          this.data.markers.push({
            id: i,
            width: 20,
            height: 20,
            latitude: item.location.lat,
            longitude: item.location.lng,
            iconPath: '/statics/images/R-C.jpg',
            callout: {
              //点击masker展示title
              content: item.title
            }
          });
          i++;
        };
        console.log(444, this.data.markers);
        this.setData({
          markers: this.data.markers
        })
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    })
  }


})