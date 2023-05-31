// components/ctabutton/ctabutton.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    checked: {
      type: Number,
      value: -1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    issel: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changesel(ev) {
      if (this.data.issel) {
        this.data.issel = "";
        this.triggerEvent('change', false);
      } else {
        this.data.issel = 'btnactive';
        this.triggerEvent('change', true);
      }
      this.setData({
        issel: this.data.issel
      })
    }
  }
})
