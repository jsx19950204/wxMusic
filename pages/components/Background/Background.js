// pages/components/Background/Background.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mainInfoVisible: {
      type: Boolean
    },
    transitionDuration: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    height: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    closeMainInfo() {
      this.triggerEvent('closeMainInfo')
    }
  },
  observers: {
    mainInfoVisible (val) {
      if(val){
        this.setData({
          height: '100vh'
        })
      }else{
        const that = this
        let timer = setTimeout(function(){
          that.setData({
            height: 0
          })
          clearTimeout(timer)
        }, this.data.transitionDuration)
      }
    }
  }
})
