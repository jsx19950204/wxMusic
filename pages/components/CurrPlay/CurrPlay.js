// pages/components/CurrPlay/CurrPlay.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    currPlay: {
      imageSrc: '/static/icon/musicList.png',
      title: 'Dusk',
      name: 'Peter Jeremias'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    createPlayIcon () {
      let ctx = wx.createContext()
      ctx.setFillStyle('#1aad19')
      let w = 60
      let h = 60
      // ctx.translate(w/2, h/2)
      ctx.arc(0, 0, 60, 0, Math.PI*2)
      ctx.fill()
      ctx.fillRect(0, 0, 60, 60)
    }
  },

  lifetimes: {
    ready () {
      this.createPlayIcon()
    }
  }
})
