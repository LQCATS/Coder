// pages/test1/test1.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    progress: 0,
    hobby: [],
    numOptions: [33, 44, 55, 66],
    num: "",
    time: '',
    date: '',
    region: '',
    multiArray: [
      ['电子产品', '家电'],
      ['手机', '电脑'],
      ['iphone', '华为']
    ],
    objectMultiArray: [
      {
        name: '小天鹅',
        firstParentPos: 1,
        secondParentPos: 1
      },
      {
        name: '松下',
        firstParentPos: 1,
        secondParentPos: 1
      },
      {
        name: '格力',
        firstParentPos: 1,
        secondParentPos: 0
      },
      {
        name: '海尔',
        firstParentPos: 1,
        secondParentPos: 0
      },
      {
        name: '小米',
        firstParentPos: 0,
        secondParentPos: 1
      },
      {
        name: '联想',
        firstParentPos: 0,
        secondParentPos: 1
      },
      {
        name: 'iphone',
        firstParentPos: 0,
        secondParentPos: 0
      },
      {
        name: '华为',
        firstParentPos: 0,
        secondParentPos: 0
      },
      {
        name: '手机',
        firstParentPos: 0,
      },
      {
        name: '电脑',
        firstParentPos: 0,
      },
      {
        name: '冰箱',
        firstParentPos: 1,
      },
      {
        name: '洗衣机',
        firstParentPos: 1,
      }
    ],
    multiIndex: [0, 0, 0],
  },
  changeprogress(ev) {
    this.setData({
      progress: this.data.progress + 10
    })
  },
  checkboxChange(ev) {
    console.log(111, ev);
    this.setData({
      hobby: ev.detail.value
    })
  },
  changenum(ev) {
    this.data.num = this.data.numOptions[ev.detail.value];
    this.setData({
      num: this.data.num
    })
  },
  changetime(ev) {
    this.data.time = ev.detail.value;
    this.setData({
      time: this.data.time
    })
  },
  changedate(ev) {
    this.setData({
      date: ev.detail.value
    })
  },
  changeregion(ev) {
    console.log(222, ev);
    this.setData({
      region: ev.detail.value.join('-')
    })
  },
  changecolumn(ev) {
    console.log(ev);
    let column = ev.detail.column;
    let val = ev.detail.value;
    if (0 == column) {
      //选中第一列，改变第二列和第三列的选项

      //第二列的选项要改成对应的二级分类
      let secondOptions = this.data.objectMultiArray.filter(item => item.firstParentPos == val && item.secondParentPos == undefined);
      this.data.multiArray[1] = secondOptions.map(item => item.name);

      //改成第三列的选项为新的第二玩选项中的第一个选项对应的三级分类
      let thridOptions = this.data.objectMultiArray.filter(item => item.firstParentPos == val && item.secondParentPos == 0);
      this.data.multiArray[2] = thridOptions.map(item => item.name);

      this.data.multiIndex[column] = val;

      this.setData({
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
      })
    } else if (1 == column) {
      //改变第三类的选项
      let fristPos = this.data.multiIndex[0];

      let thridOptions = this.data.objectMultiArray.filter(item => item.firstParentPos == fristPos && item.secondParentPos == val);
      this.data.multiArray[2] = thridOptions.map(item => item.name);

      this.data.multiIndex[column] = val;
      this.setData({
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
      })

    } else if (2 == column)
      this.data.multiIndex[column] = val;

    this.setData({
      multiIndex: this.data.multiIndex
    })
  }
})