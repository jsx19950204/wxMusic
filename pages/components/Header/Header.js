// pages/components/Header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: String,
      value: [
        { url: '', text: '我的' },
        { url: '', text: '发现' },
        { url: '', text: '朋友', unread: true },
        { url: '', text: '视频' }
      ]
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
    // 打开主信息页
    openMainInfo () {
      this.triggerEvent('openMainInfo');
    },
    // 打开搜索页
    openSearch () {
      wx.navigateTo({
        url: '/pages/search',
      })
    },
    tabChange(e) {
      this.triggerEvent('tabChange')
    }
  },
  lifetimes: {
    ready() {
    }
  }
})
