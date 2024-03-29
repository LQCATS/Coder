// components/cbutton/cbutton.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type:String,
      value: '',
    },
    src: {
      type:String,
      value:'',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    doClick(ev){
      this.triggerEvent('click',{
        type: this.properties.text,
      })
    }
  }
})
